import User from "../models/userModel.js"
import asyncHandler from '../middleware/asyncHandler.js'
import bcrypt from "bcryptjs"
import generateToken from "../utils/creteToken.js"


const readUser = asyncHandler(async(req,res) => {
    const users  = await User.find({})
    res.json(users)
})

const createUser = asyncHandler(async(req,res) => {
   const {username, email, password} = req.body
   if(!username || !email || !password){
    throw new Error("Please add all fields")
   }
   const userExists = await User.findOne({email})
   if(userExists){
    throw new Error("User already exists")
   }

   const salt = await bcrypt.genSalt(10)
   const hashedPassword = await bcrypt.hash(password, salt)
   const newUser = new User({username, email, password: hashedPassword})
   
   try {
      await newUser.save();
      generateToken(res, newUser._id)
    res.status(201).json({
        _id: newUser._id,
        username: newUser.username,
        email: newUser.email,
        password: newUser.password,
        isAdmin: newUser.isAdmin
    }) 
   } catch (error) {
    res.status(400)
    throw new Error(error.message)
   }
})

const loginUser = asyncHandler(async(req,res) => {
    const {email, password} = req.body
    const user = await User.findOne({email})
    if(user && (await bcrypt.compare(password, user.password))){
        generateToken(res, user._id)
        res.status(200).json({
            _id: user._id,
            username: user.username,
            email: user.email,
            isAdmin: user.isAdmin
        })
    }else{
        res.status(401)
        throw new Error("Invalid email or password")
    }
})

const logoutUser = asyncHandler(async(req,res) => {
    res.cookie("jwt", "", {
        httpOnly: true,
        expires: new Date(0),
    }) 
    
    res.status(200).json("Logout Success")
})

const getUserProfile = asyncHandler(async(req,res) => {
    console.log("masuk")
    res.send("masuk")
})

export {readUser, createUser, loginUser, logoutUser, getUserProfile}