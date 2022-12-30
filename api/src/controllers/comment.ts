import { NextFunction, Request, Response } from 'express'
import Comment from '../models/Comment'

export const addComment = async (req: Request, res: Response, next: NextFunction) => {
  const newComment = new Comment({...req.body, userId: req.user.id})
  try {
    const savedComment = await Comment.save()
  } catch (err) {
    next(err)
  }
}

export const deleteComment = async (req: Request, res: Response, next: NextFunction) => {
  try {
    
  } catch (err) {
    next(err)
  }
}

export const getComment = async (req: Request, res: Response, next: NextFunction) => {
  try {
    
  } catch (err) {
    next(err)
  }
}