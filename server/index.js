import path from 'path'
import express from 'express'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'

import userRoute from './routes/userRoute.js'

import connectDB from './config/db.js'
dotenv.config()
const PORT = process.env.PORT
connectDB()

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())

app.use('/api/users',userRoute)

app.get('/', (req,res) => {
    res.send("Hello Developer")
})

app.listen (PORT,() =>
console.log("Server Running"))