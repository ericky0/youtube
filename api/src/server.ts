import express, { Request, Response, NextFunction} from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import userRoutes from './routes/users'
import videoRoutes from './routes/videos'
import commentRoutes from './routes/comments'
import authRoutes from './routes/auth'
import cookieParser from 'cookie-parser'

interface CustomError extends Error {
  status?: number;
}

const app = express()

dotenv.config()

const connect = () => {
  mongoose.connect(process.env.MONGO!).then(() => {
    console.log('📦 Connected to MongoDB')
  }).catch((err: Error) => {
    throw err
  })
}

app.use(cookieParser())
app.use(express.json())

app.use('/api/users', userRoutes)
app.use('/api/videos', videoRoutes)
app.use('/api/comments', commentRoutes)
app.use('/api/auth', authRoutes)

app.use((err: CustomError, req: Request, res: Response, next: NextFunction) => {
  const status = err.status || 500;
  const message = err.message || 'Something went wrong!'
  return res.status(status).json({
    success: false,
    status,
    message
  })
})

app.listen(process.env.PORT || 3001, () => {
  connect()
  console.log('🔥 backend server is running at http://localhost:3001')
})