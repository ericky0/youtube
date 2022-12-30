import { model, Schema, Document } from 'mongoose'

interface IVideo extends Document {
  _id: Schema.Types.ObjectId
  userId: string
  title: string
  desc: string
  imgUrl: string
  videoUrl: string
  views: number
  tags: string[]
  likes: string[]
  dislikes: string[]
  createdAt: Date
  updatedAt: Date
}


const VideoSchema: Schema = new Schema({
  userId: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  desc: {
    type: String,
    required: true
  },
  imgUrl: {
    type: String,
    required: true
  },
  videoUrl: {
    type: String,
    required: true
  },
  views: {
    type: Number,
    default: 0
  },
  tags: {
    type: [String],
    default: []
  },
  likes: {
    type: [String],
    default: []
  },
  dislikes: {
    type: [String],
    default: []
  },
}, {timestamps: true});

export default model<IVideo>("Video", VideoSchema)