import mongoose from "mongoose"
import { ICivciv } from "./types"

const civcivSchema = new mongoose.Schema<ICivciv>({
  text: {
    type: String,
    required: true,
  },
  writer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
  },
  likes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    }
  ],
  replies: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Civciv'
    }
  ],
  replyTo: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Civciv'
  },
  reCivciv: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    }
  ]
})

export default mongoose.model('Civciv', civcivSchema)
