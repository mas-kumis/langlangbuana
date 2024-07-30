import express from 'express'
import dotenv from 'dotenv'
import path from 'path'
import cookieParser from 'cookie-parser'

import connectDB from './config/connectDB.js'
import userRoute from './router/userRoute.js'
import { notFound, errorHandler } from './middleware/errorMiddleware.js'
dotenv.config()
const app = express()
connectDB()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())
app.use('/api/users', userRoute)
app.use(notFound)
app.use(errorHandler)

const port = process.env.PORT
app.listen(port , () => {
    console.log(`Server is running on port ${port}`)
})

