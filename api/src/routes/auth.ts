import express from 'express'
import { signin, signup, googleAuth } from '../controllers/auth'
const router = express.Router()


// CREATE A USER
router.post('/signup', signup)

//SIGN IN
router.post('/signin', signin)

// GOOGLE AUTH
router.post('/google', googleAuth)

export default router