<<<<<<< HEAD
import mongoose, { Document, Model, model, Schema } from 'mongoose'
=======
import { Document, model, Schema } from 'mongoose'
>>>>>>> 32c77c90990a9444f5780c3258fa837ad3dce9e6

interface IComment extends Document {
  _id: Schema.Types.ObjectId
  userId: string
  videoId: string
  desc: string
  createdAt: Date
  updatedAt: Date
<<<<<<< HEAD
  _doc?: any
=======
>>>>>>> 32c77c90990a9444f5780c3258fa837ad3dce9e6
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

<<<<<<< HEAD
export default mongoose.model<IComment>("Comment", CommentSchema)
=======
export default model<IComment>("Comment", CommentSchema)
>>>>>>> 32c77c90990a9444f5780c3258fa837ad3dce9e6
