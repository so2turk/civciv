import mongoose from "mongoose"
import { IUser } from "./types"

const userSchema = new mongoose.Schema<IUser>({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  userName: {
    type: String,
    unique: true,
    required: true,
    min: 3,
    max: 10,
  },
  email: {
    type: String,
    unique: true,
    required: true,
    max: 50,
  },
  password: {
    type: String,
    required: true,
    min: 6,
  },
})

export default mongoose.model('User', userSchema)
