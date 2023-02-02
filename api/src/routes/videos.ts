import express from 'express'
import { addVideo, addView, deleteVideo, getByTag, getVideo, random, search, sub, trends, updateVideo } from '../controllers/video'
import { verifyToken } from '../middlewares/verifyToken'

const router = express.Router()

//create video
router.post('/', verifyToken, addVideo)

//update video
router.put('/:id', verifyToken, updateVideo)

//delete video
router.delete('/:id', verifyToken, deleteVideo)

//get video
router.get('/find/:id', getVideo)

//add view
router.put('/view/:id', addView)

//get trends (ordained by more views)
router.get('/trends', trends)

//random videos
router.get('/random', random)

// get subscribed videos
router.get('/sub', verifyToken, sub)

// get video by tags
router.get('/tags', getByTag)

// search videos
router.get('/search', search)

export default router