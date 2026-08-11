import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
  userName: {
    type: String,
    requried: true,
    index: true,
    lowercase: true,
    trim: true,
    unique: true,
  },
  email: {
    type: String,
    requried: true,
    lowercase: true,
    trim: true,
  },
  fullName: {
    type: String,
    requried: true,
    trim: true,
    index: true,
  },
  avatar: {
    type: String,
    requried: true,
  },
  coverImage: {
    type: String,
    requried: true,
  },

});

export const User = mongoose.model("user", userSchema);
