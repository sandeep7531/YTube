import mongoose, { Schema } from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const userSchema = new Schema(
  {
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
    watchHistory: [
      {
        type: Schema.Types.ObjectId,
        ref: "Video",
      },
    ],
    avatar: {
      type: String,
      requried: true,
    },
    coverImage: {
      type: String,
    },
    password: {
      type: String,
      requried: [true, "Password is requried"],
    },
    refreshToken: {
      type: String,
    },
  },
  { timestamps: true }
);
// Middleware for before save in database it's encrypt the password
userSchema.pre("save", async function () {
  if (!this.isModified("password")) return;
  this.password = await bcrypt.hash(this.password, 10);
});

// MEthod for checking password is correct after encrypt
userSchema.methods.isPasswordCorrect = async function (password) {
  return bcrypt.compare(password, this.password);
};

userSchema.method.generateAccessToken = function () {
  jwt.sign(
    {
      _id: this._id,
      email: this.email,
      username: this.userName,
    },
    process.env.ACCESS_TOKEN_SECRET,
    {
      expiresIn: process.env.ACCESS_TOKEN_EXP,
    }
  );
};

userSchema.method.generateRefreshToken = function () {
  jwt.sign(
    {
      _id: this._id,
    },
    process.env.REFRESH_TOKEN_SECRET,
    {
      expiresIn: process.env.REFRESH_TOKEN_EXP,
    }
  );
};

export const User = mongoose.model("user", userSchema);
