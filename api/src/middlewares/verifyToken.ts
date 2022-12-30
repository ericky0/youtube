import {Request, Response, NextFunction} from 'express'
import jwt from 'jsonwebtoken'
import { createError } from '../error'

export const verifyToken = (req: Request, res: Response, next: NextFunction) => {
  const token = req.cookies.access_token
  if(!token) return next(createError(401, 'You are not authenticated!'))

  jwt.verify(token, process.env.JWT_SECRET!, (err: any, user: any) => {
    if(err) return next(createError(403, 'Token is not valid'))
    req.user = user
    next()
  })
}