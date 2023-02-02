import { NextFunction, Request, Response } from 'express'
import { createError } from '../error'
import User from '../models/User'
<<<<<<< HEAD
import bcrypt from 'bcryptjs'
import Video from '../models/Video'
=======
>>>>>>> 32c77c90990a9444f5780c3258fa837ad3dce9e6

export const update = async (req: Request, res: Response, next: NextFunction) => {
  if(req.params.id === req.user.id) {
    try {
<<<<<<< HEAD
      const salt = bcrypt.genSaltSync(10)
      const hash = bcrypt.hashSync(req.body.password, salt)
      const updatedUser = await User.findByIdAndUpdate(req.params.id, {
        $set: req.body, password: hash
=======
      const updatedUser = await User.findByIdAndUpdate(req.params.id, {
        $set: req.body
>>>>>>> 32c77c90990a9444f5780c3258fa837ad3dce9e6
      },
      { 
        new: true 
      })
      res.status(200).json(updatedUser)
    } catch (err) {
      next(err)
    }
  } else {
    return next(createError(403, 'You can update only your account!'))
  }
}

export const deleteUser = async (req: Request, res: Response, next: NextFunction) => {
  if(req.params.id === req.user.id) {
    try {
      const updatedUser = await User.findByIdAndDelete(req.params.id)
      res.status(200).json('User has been deleted.')
    } catch (err) {
      next(err)
    }
  } else {
    return next(createError(403, 'You can delete only your account!'))
  }
}

export const getUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const user = await User.findById(req.params.id)
    if(!user) return next(createError(404, 'User not found'))
    res.status(200).json(user)
  } catch (err) {
    next(err)
  }
}

export const subscribe = async (req: Request, res: Response, next: NextFunction) => {
  try {
    await User.findByIdAndUpdate(req.user.id, {
      $push:{subscribedUsers: req.params.id}
    })
    await User.findByIdAndUpdate(req.params.id, {
      $inc:{subscribers: 1}
    })
    res.status(200).json('Subscription successfull')
  } catch (err) {
    next(err)
  }
}

export const unsubscribe = async (req: Request, res: Response, next: NextFunction) => {
  try {
    await User.findByIdAndUpdate(req.user.id, {
      $pull:{subscribedUsers: req.params.id}
    })
    await User.findByIdAndUpdate(req.params.id, {
      $inc:{subscribers: -1}
    })
    res.status(200).json('Unsubscription successfull')
  } catch (err) {
    next(err)
  }
}

export const like = async (req: Request, res: Response, next: NextFunction) => {
<<<<<<< HEAD
  const id = req.user.id
  const videoId = req.params.videoId
  try {
    await Video.findByIdAndUpdate(videoId, {
      $addToSet: {likes: id},
      $pull: {dislikes: id}
    })
    res.status(200).json('The video has been liked')
  } catch (err) {
    next(err)
  }
}

export const dislike = async (req: Request, res: Response, next: NextFunction) => {
  const id = req.user.id
  const videoId = req.params.videoId
  try {
    await Video.findByIdAndUpdate(videoId, {
      $addToSet: {dislikes: id},
      $pull: {likes: id}
    })
    res.status(200).json('The video has been unliked')
  } catch (err) {
    next(err)
  }
=======
  res.json('its sucessful')
}

export const dislike = async (req: Request, res: Response, next: NextFunction) => {
  res.json('its sucessful')
>>>>>>> 32c77c90990a9444f5780c3258fa837ad3dce9e6
}