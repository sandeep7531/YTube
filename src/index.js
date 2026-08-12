import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js";
import { v2 as cloudinary } from "cloudinary";
dotenv.config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
});

const port = process.env.PORT || 8000;

connectDB()
  .then(() => {
    app.listen(port, () => {
      console.log(`listening on port ${port}`);
    });
    app.on("error", (error) => {
      console.log(error);
      throw error;
    });
  })
  .catch((err) => {
    console.log("Mongo DB Connection Error", err);
  });
