import express from 'express'
import { addComment, deleteComment, getComment } from '../controllers/comment'
import { verifyToken } from '../middlewares/verifyToken'

const router = express.Router()

router.post('/', verifyToken, addComment)
router.delete('/:id', verifyToken, deleteComment)
router.get('/:videoId', getComment)

export default router