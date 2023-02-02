import mongoose, {Document} from 'mongoose'

export interface User extends Document {
  name: string,
  email: string,
  password: string,
  img?: string,
  subscribers: number,
<<<<<<< HEAD
  subscribedUsers: [string],
  createdAt: Date,
  updatedAt: Date,
  fromGoogle: boolean,
=======
  subscribedUsers: [User],
  createdAt: Date,
  updatedAt: Date,
>>>>>>> 32c77c90990a9444f5780c3258fa837ad3dce9e6
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
<<<<<<< HEAD
=======
    required: true
>>>>>>> 32c77c90990a9444f5780c3258fa837ad3dce9e6
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
<<<<<<< HEAD
  },
  fromGoogle:{
    type: Boolean,
    default: false
=======
>>>>>>> 32c77c90990a9444f5780c3258fa837ad3dce9e6
  }
}, {timestamps: true});

export default mongoose.model<User>("User", UserSchema)