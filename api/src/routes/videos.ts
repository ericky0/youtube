import express from 'express'
import { addVideo, addView, deleteVideo, getByTag, getVideo, random, search, sub, trends, updateVideo } from '../controllers/video'
import { verifyToken } from '../middlewares/verifyToken'

const router = express.Router()

//create a video
router.post('/', verifyToken, addVideo)
router.put('/:id', verifyToken, updateVideo)
router.delete('/:id', verifyToken, deleteVideo)
router.get('/find/:id', getVideo)
router.put('/view/:id', addView)
router.get('/trends/', trends)
router.get('/random', random)

// get subscribed videos
router.get('/sub', verifyToken, sub)

// get video by tags
router.get('/tags', getByTag)

// search videos
router.get('/search', search)

export default router