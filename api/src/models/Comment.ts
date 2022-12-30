import { Document, model, Schema } from 'mongoose'

interface IComment extends Document {
  _id: Schema.Types.ObjectId
  userId: string
  videoId: string
  desc: string
  createdAt: Date
  updatedAt: Date
}

const CommentSchema: Schema = new Schema({
  userId: {
    type: String,
    required: true
  },
  videoId: {
    type: String,
    required: true
  },
  desc: {
    type: String,
    required: true
  }
}, {timestamps: true});

export default model<IComment>("Comment", CommentSchema)