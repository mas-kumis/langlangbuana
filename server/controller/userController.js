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
//    If Not All Filled
   if(!username || !email || !password){
    throw new Error("Please add all fields")
   }
//    If Email Existed
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
    const user = await User.findById(req.user._id)

    if(user) {
        res.json({
            _id : user._id,
            username: user.username,
            email: user.email,
        })
    } else {
        res.status(404)
        throw new Error("User not found")
    }
})

const updateUser = asyncHandler(async(req,res) => {
        const user = await User.findById(req.user._id)
        if(user) {
            user.username = req.body.username || user.username
            user.email = req.body.email || user.email
            if(req.body.password){
                const salt = await bcrypt.genSalt(10)
                const hashed = await bcrypt.hash(req.body.password, salt)
                user.password = hashed;
            }
            const update = await user.save()
            res.json({
                _id : update._id,
                username : update.username,
                email : update.email,
                isAdmin : update.isAdmin
            })
        }    else {
            res.status(404)
            throw new Error("user Not Found")
        }
})

const deleteUser = asyncHandler(async(req,res) => {
    const user = await User.findById(req.params.id)

    if(user) {
        if (user.isAdmin) {
            res.status(400)
            res.json("Cannot delete Admin User")
        } 
            await User.deleteOne({ _id:user._id })
            res.json({message: "user removed"})
    } else {
        res.status(404)
        res.json("User not found")
    }
})

const getUserbyId = asyncHandler(async(req,res) =>{
    const user = await User.findById(req.params.id).select('-password')

    if(user) {
        res.json(user)
    } else {
        res.status(400)
        res.json("User Not Found")
    }
})

const updateUserbyId = asyncHandler(async(req,res) => {
    const user = await User.findById(req.params.id)

    if(user) {
        user.username = req.body.username || user.username
        user.email = req.body.email || user.email
        user.isAdmin = Boolean(req.body.isAdmin)

        const updated = await user.save()
        res.json({
            _id : updated._id,
            username : updated.username,
            email : updated.email,
            isAdmin : updated.isAdmin
        }) 
    } else {
        res.status(404);
        res.json("User Not Found")
    }
})


export {readUser, createUser, loginUser, logoutUser, getUserProfile, updateUser, deleteUser, getUserbyId, updateUserbyId}