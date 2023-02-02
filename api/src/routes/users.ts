import express from 'express'
import { deleteUser, dislike, getUser, like, subscribe, unsubscribe, update } from '../controllers/user'
import { verifyToken } from '../middlewares/verifyToken'
const router = express.Router()

//update user
router.put('/:id', verifyToken, update)

//delete user
router.delete('/:id', verifyToken, deleteUser)

//get a user
router.get('/find/:id', getUser)

//subscribe a user
router.put('/sub/:id', verifyToken, subscribe)

//unsubscribe a user
router.put('/unsub/:id', verifyToken, unsubscribe)

//like a video
router.put('/like/:videoId', verifyToken, like)

//dislike a video
<<<<<<< HEAD
router.put('/dislike/:videoId', verifyToken, dislike)
=======
router.put('/dislike/:id', verifyToken, dislike)
>>>>>>> 32c77c90990a9444f5780c3258fa837ad3dce9e6

export default router