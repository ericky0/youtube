import express from 'express'
<<<<<<< HEAD
import { signin, signup, googleAuth } from '../controllers/auth'
=======
import { signin, signup } from '../controllers/auth'
>>>>>>> 32c77c90990a9444f5780c3258fa837ad3dce9e6
const router = express.Router()


// CREATE A USER
router.post('/signup', signup)

//SIGN IN
router.post('/signin', signin)

// GOOGLE AUTH
<<<<<<< HEAD
router.post('/google', googleAuth)
=======
router.post('/google', )
>>>>>>> 32c77c90990a9444f5780c3258fa837ad3dce9e6

export default router