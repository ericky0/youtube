import { NextFunction, Request, Response } from 'express'
<<<<<<< HEAD
import { createError } from '../error'
import Comment from '../models/Comment'
import Video from '../models/Video'
=======
import Comment from '../models/Comment'
>>>>>>> 32c77c90990a9444f5780c3258fa837ad3dce9e6

export const addComment = async (req: Request, res: Response, next: NextFunction) => {
  const newComment = new Comment({...req.body, userId: req.user.id})
  try {
<<<<<<< HEAD
    const savedComment = await newComment.save()
    res.status(200).send(savedComment)
=======
    const savedComment = await Comment.save()
>>>>>>> 32c77c90990a9444f5780c3258fa837ad3dce9e6
  } catch (err) {
    next(err)
  }
}

export const deleteComment = async (req: Request, res: Response, next: NextFunction) => {
  try {
<<<<<<< HEAD
    const comment = await Comment.findById(req.params.id)
    const video = await Video.findById(req.params.id)
    if(req.user.id === comment.userId || req.user.id === video.userId) {
      await Comment.findByIdAndDelete(req.params.id)
      res.status(200).json("The comment has been deleted.")
    } else {
      return next(createError(403, 'You can delete only your comment!'))
    }
=======
    
>>>>>>> 32c77c90990a9444f5780c3258fa837ad3dce9e6
  } catch (err) {
    next(err)
  }
}

export const getComment = async (req: Request, res: Response, next: NextFunction) => {
  try {
<<<<<<< HEAD
    const comments = await Comment.find({videoId: req.params.videoId})
    res.status(200).json(comments)
=======
    
>>>>>>> 32c77c90990a9444f5780c3258fa837ad3dce9e6
  } catch (err) {
    next(err)
  }
}