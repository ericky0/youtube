import mongoose from "mongoose";
import {NextFunction, Request, Response} from 'express'
import User from '../models/User'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { createError } from "../error";

export const signup = async (req: Request, res: Response, next: NextFunction) => {
  try {
    // encrypt password
    const salt = bcrypt.genSaltSync(10)
    const hash = bcrypt.hashSync(req.body.password, salt)
    const newUser = new User({...req.body, password: hash})

    // save user
    await newUser.save()
    res.status(200).send('User has been created')
  } catch (err) {
    next(err)
  }
}

export const signin = async (req: Request, res: Response, next: NextFunction) => {
  try {

    //find user
    const user = await User.findOne({name: req.body.name})
    if(!user) return next(createError(404, 'User Not Found'))

    const isCorrect = await bcrypt.compare(req.body.password, user.password)

    if(!isCorrect) return next(createError(400, 'Wrong Credentials'))

    //creating token
    const token = jwt.sign({id: user._id}, process.env.JWT_SECRET!)
    const { password, ...others } = user._doc

    //create cookie (token) and response
    res.cookie('access_token', token, {
      httpOnly: true
    }).status(200).json(others)
    
  } catch (err) {
    next(err)
  }
}

export const googleAuth = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const user = await User.findOne({email: req.body.email})
    if(user){
      const token = jwt.sign({id: user._id}, process.env.JWT_SECRET!)
      //create cookie (token) and response
      res.cookie('access_token', token, {
        httpOnly: true
      }).status(200).json(user._doc)
    } else {
      const newUser = new User({
        ...req.body,
        fromGoogle:true
      })
      const savedUser = await newUser.save()
      const token = jwt.sign({id: savedUser._id}, process.env.JWT_SECRET!)
      //create cookie (token) and response
      res.cookie('access_token', token, {
        httpOnly: true
      }).status(200).json(savedUser._doc)
    }
  } catch (err) {
    next(err)
  }
}