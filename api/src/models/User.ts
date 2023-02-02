import mongoose, {Document} from 'mongoose'

export interface User extends Document {
  name: string,
  email: string,
  password: string,
  img?: string,
  subscribers: number,
  subscribedUsers: [string],
  createdAt: Date,
  updatedAt: Date,
  fromGoogle: boolean,
  _doc: any
}

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
  },
  img: {
    type: String
  },
  subscribers: {
    type: Number,
    default: 0
  },
  subscribedUsers: {
    type: [String]
  },
  fromGoogle:{
    type: Boolean,
    default: false
  }
}, {timestamps: true});

export default mongoose.model<User>("User", UserSchema)