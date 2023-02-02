import { NextFunction, Request, Response } from 'express'
import { createError } from '../error'
import Comment from '../models/Comment'
import Video from '../models/Video'

export const addComment = async (req: Request, res: Response, next: NextFunction) => {
  const newComment = new Comment({...req.body, userId: req.user.id})
  try {
    const savedComment = await newComment.save()
    res.status(200).send(savedComment)
  } catch (err) {
    next(err)
  }
}

export const deleteComment = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const comment = await Comment.findById(req.params.id)
    const video = await Video.findById(req.params.id)
    if(req.user.id === comment.userId || req.user.id === video.userId) {
      await Comment.findByIdAndDelete(req.params.id)
      res.status(200).json("The comment has been deleted.")
    } else {
      return next(createError(403, 'You can delete only your comment!'))
    }
  } catch (err) {
    next(err)
  }
}

export const getComment = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const comments = await Comment.find({videoId: req.params.videoId})
    res.status(200).json(comments)
  } catch (err) {
    next(err)
  }
}