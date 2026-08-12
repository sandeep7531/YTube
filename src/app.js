import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();
app.use((req, res, next) => {
  console.log("🔥 REQUEST RECEIVED");
  console.log("Method:", req.method);
  console.log("URL:", req.originalUrl);

  next();
});

app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(cookieParser());

import userRouter from "./routes/user.routes.js";

app.use("/api/v1/user", userRouter);

export { app };
