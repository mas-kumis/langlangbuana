import express from 'express'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'
import cors from 'cors'

import connectDB from './config/connectDB.js'
import userRoute from './router/userRoute.js'
import categoryRoute from './router/categoryRoute.js'
import { notFound, errorHandler } from './middleware/errorMiddleware.js'
dotenv.config()
const app = express()
connectDB()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(cors());

app.use('/api/users', userRoute)
app.use('/api/category', categoryRoute)
app.use(notFound)
app.use(errorHandler)


const port = process.env.PORT
app.listen(port , () => {
    console.log(`Server is running on port ${port}`)
})

