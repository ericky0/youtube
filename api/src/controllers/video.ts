import { NextFunction, Request, Response } from 'express'
import { createError } from '../error'
import User from '../models/User'
import Video from '../models/Video'

export const addVideo = async (req: Request, res: Response, next: NextFunction) => {
  const newVideo = new Video({userId: req.user.id, ...req.body})
  try {
    const savedVideo = await newVideo.save()
    res.status(200).json(savedVideo)
  } catch (err) {
    next(err)
  }
}

export const updateVideo = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const video = await Video.findById(req.params.id)
    if(!video) return next(createError(404, 'Video not found'))
    if(req.user.id === video.userId){
      const updatedVideo = await Video.findByIdAndUpdate(req.params.id, {
        $set: req.body
      }, {
        $new: true
      })
      res.status(200).json(updatedVideo)
    } else {
      return next(createError(403, 'You can update only your video!'))
    }
  } catch (err) {
    next(err)
  }
}

export const deleteVideo = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const video = await Video.findById(req.params.id)
    if(!video) return next(createError(404, 'Video not found'))
    if(req.user.id === video.userId){
      const updatedVideo = await Video.findByIdAndDelete(req.params.id)
      res.status(200).json('The video has been deleted')
    } else {
      return next(createError(403, 'You can delete only your video!'))
    }
  } catch (err) {
    next(err)
  }
}

export const getVideo = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const video = await Video.findById(req.params.id)
    res.status(200).json(video)
  } catch (err) {
    next(err)
  }
}

export const addView = async (req: Request, res: Response, next: NextFunction) => {
  try {
    await Video.findByIdAndUpdate(req.params.id, {
      $inc: {views: 1}
    })
    res.status(200).json('The view has been increased')
  } catch (err) {
    next(err)
  }
}

export const random = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const videos = await Video.aggregate([{$sample:{size: 40}}])
    res.status(200).json(videos)
  } catch (err) {
    next(err)
  }
}

export const trends = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const videos = await Video.find().sort({views:-1})
    res.status(200).json(videos)
  } catch (err) {
    next(err)
  }
}

export const sub = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const user = await User.findById(req.user.id)
    const subscribedChannels = user.subscribedUsers

    const list = await Promise.all(
      subscribedChannels.map(channelId => {
        return Video.find({ userId: channelId })
      })
    )

    res.status(200).json(list.flat().sort((a,b) => b.createdAt.getTime() - a.createdAt.getTime()))
  } catch (err) {
    next(err)
  }
}

export const getByTag = async (req: Request, res: Response, next: NextFunction) => {
  const tags = (<string>req.query.tags).split(",")
  try {
    const videos = await Video.find({tags:{$in: tags}}).limit(20)
    res.status(200).json(videos)
  } catch (err) {
    next(err)
  }
}

export const search = async (req: Request, res: Response, next: NextFunction) => {
  const query = req.query.q
  try {
    const videos = await Video.find({
      title: { $regex: query, $options: 'i' }
    }).limit(40);
    res.status(200).json(videos)
  } catch (err) {
    next(err)
  }
}