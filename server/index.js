import express from 'express'
import dotenv from 'dotenv'
import path from 'path'
import cookieParser from 'cookie-parser'
import cors from 'cors'

import connectDB from './config/connectDB.js'
import userRoute from './router/userRoute.js'
import { notFound, errorHandler } from './middleware/errorMiddleware.js'
dotenv.config()
const app = express()
connectDB()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(cors());
app.use('/api/users', userRoute)
app.use(notFound)
app.use(errorHandler)

if (process.env.NODE_ENV === 'production') {
  const __dirname = path.resolve();
  app.use(express.static(path.join(__dirname, '/frontend/dist')));

  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'frontend', 'dist', 'index.html'))
  );
} else {
  app.get('/', (req, res) => {
    res.send('API is running....');
  });
}

const port = process.env.PORT
app.listen(port , () => {
    console.log(`Server is running on port ${port}`)
})

