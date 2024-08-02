import bcrypt from 'bcryptjs/dist/bcrypt.js'
import User from '../models/userModel.js'
import asyncHandler from 'express-async-handler'
import generateToken from '../utils/generateToken.js'


const createUser = asyncHandler(async (req, res) => {
    const { username, email, password } = req.body
        if (!username || !email || !password) {
            res.status(400)
            throw new Error('Please add all fields')
        }
    const userExists = await User.findOne({ email })
        if (userExists) {
            res.status(400)
            throw new Error('User already exists')
        }
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)
    const newUser = await User.create({ username, email, password : hashedPassword })
    try {
        const savedUser = await newUser.save()
        const token = generateToken(res, savedUser._id)
        generateToken(res, savedUser._id)
        res.status(200).json({

            _id: savedUser._id,
            username: savedUser.username,
            email: savedUser.email,
            isAdmin : savedUser.isAdmin
        })

    } catch (error) {
        res.status(500).json("Invalid data")
    }
})

const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body
    const existingUser = await User.findOne({ email })
    if (existingUser) {
        const isPasswordCorrect = await bcrypt.compare(password, existingUser.password)
        if (isPasswordCorrect) {
              generateToken(res, existingUser._id)
              res.cookie('jwt', generateToken(res, existingUser._id), { httpOnly: true })
            res.status(200).json({
                message : 'Login success',
                _id: existingUser._id,
                username: existingUser.username,
                email: existingUser.email,
                isAdmin : existingUser.isAdmin,
            })
            return
        } else {
            res.status(400)
            throw new Error('Invalid credentials')
        }
    } else {
        res.status(404)
        throw new Error('User not found')
    }

})

const logoutUser = asyncHandler(async (req, res) => {
    res.cookie('jwt', '', {
        httpOnly: true,
        expires: new Date(0)
    })
    res.status(200).json('User logged out')
})

const getAllUsers = asyncHandler(async (req, res) => {
    const users = await User.find({})
    res.status(200).json(users)
})

const getCurrentUserProfile = asyncHandler(async (req, res) => {
    const user = await User.findById(req.user._id)
    if(user) {
        res.json({
            _id: user._id,
            username: user.username,
            email: user.email,
            isAdmin : user.isAdmin
        })
    } else {
        res.status(404)
        throw new Error('User not found')
    }
})

const updateCurrentUserProfile = asyncHandler(async (req, res) => {
    const user = await User.findById(req.user._id)
    if(user) {
        user.username = req.body.username || user.username
        user.email = req.body.email || user.email

        if(req.body.password) {
            const salte = await bcrypt.genSalt(10)
            const hashedPassword = await bcrypt.hash(req.body.password, salte)
            user.password = hashedPassword
        }

        const updatedUser = await user.save()
        res.json({
            _id: updatedUser._id,
            username: updatedUser.username,
            email: updatedUser.email,
            isAdmin : updatedUser.isAdmin
        })
    } else {
        res.status(404)
        throw new Error('User not found')
    }
})

const deleteUser = asyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id)
    if(user) {
        if(user.isAdmin) {
            res.status(400)
            throw new Error('Can not delete admin')
        }
        await user.deleteOne()
        res.json({message : 'User deleted'})
    } else {
        res.status(404)
        throw new Error('User not found')
    }


})

const getUserById = asyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id)
    if(user) {
        res.json(user)
    } else {
        res.status(404)
        throw new Error('User not found')
    }
})

const updateUserById = asyncHandler(async (req, res) => {
    try{
        const user = await User.findById(req.params.id)
    if(user) {
        user.username = req.body.username || user.username
        user.email = req.body.email || user.email
        const updatedUser = await user.save()
        res.json({
            _id: updatedUser._id,
            username: updatedUser.username,
            email: updatedUser.email,
            isAdmin : updatedUser.isAdmin
        })
    } else {
        res.status(404)
        throw new Error('User not found')
    }
    } catch(error) {
        res.status(500).json(error.message)
    }
    
})

export  {createUser, loginUser, logoutUser, getAllUsers, getCurrentUserProfile, updateCurrentUserProfile, deleteUser, getUserById, updateUserById}