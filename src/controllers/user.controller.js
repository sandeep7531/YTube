import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/apiError.js";
import { User } from "../models/users.models.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";
import { ApiResponse } from "../utils/apiResponse.js";

const registerUser = asyncHandler(async (req, res) => {
  //Get details from user
  //validation - not empty
  // check if user alredy exist: userName, email,
  // handles files: image and coverimage
  //uploade them to cloudnary
  // create && check user creation user object - create entry in db
  // remove refreshtoken and password
  //return res

  const { userName, fullName, email, password } = req.body;
  if ([userName, fullName, email, password].some((field) => !field?.trim()))
    throw new ApiError(400, "All fields are required");

  const existedUser = await User.findOne({
    $or: [{ userName }, { email }],
  });

  if (existedUser) throw new ApiError(400, "User already exist");

  const avatarLocalPath = req.files?.avatar[0].path;
  const coverImageLocalPath = req.files?.coverImage?.[0].path;

  if (!avatarLocalPath) throw new ApiError(400, "Avatar is required");

  const avatar = await uploadOnCloudinary(avatarLocalPath);
  const coverImage = coverImageLocalPath
    ? await uploadOnCloudinary(coverImageLocalPath)
    : null;

  const user = await User.create({
    userName,
    fullName,
    email,
    password,
    avatar: avatar?.url,
    coverImage: coverImage?.url || "",
  });

  const createdUser = await User.findById(user._id).select(
    "-password -refreshToken"
  );

  if (!createdUser)
    throw new ApiError(400, "Somthing went wrong while registering user");

  return res
    .status(201)
    .json(new ApiResponse(201, createdUser, "User created successfully"));
});

const loginUser = asyncHandler(async (req, res) => {
  // username/email from body
  // check username and password exist
  // generate refreshToken/accessToken
  //

  const { email, userName, password } = req?.body;

  const opEmail = email || "";

  if ((!userName?.trim() && !email?.trim()) || !password?.trim()) {
    throw new ApiError(400, "Username/email and password are required");
  }

  const user = await User.findOne({
    $or: [{ userName }, { email }],
  });

  if (!user) throw new ApiError(404, "User not exist");

  const isPasswordValid = await user.isPasswordCorrect(password);

  if (!isPasswordValid) throw new ApiError("401", "Wrong credentials");

  const refreshToken = await user.generateRefreshToken();
  const accessToken = await user.generateAccessToken();

  if (!refreshToken || !accessToken)
    throw new ApiError(
      "500",
      "Error while generating accessToken and refreshToken"
    );

  user.refreshToken = refreshToken;
  await user.save({ validateBeforeSave: false });

  const options = {
    httpOnly: true,
    secure: true,
  };

  return res
    .status(200)
    .cookie("accessToken", accessToken, options)
    .cookie("refreshToken", refreshToken, options)
    .json(
      new ApiResponse(
        200,
        {
          refreshToken,
          accessToken,
        },
        "User logged in seccessfully"
      )
    );
});

const logoutUser = asyncHandler(async (req, res) => {
  const user = req.user._id;
  await User.findByIdAndUpdate(user, {
    $set: { refreshToken: undefined },
  });

  const options = {
    httpOnly: true,
    secure: true,
  };

  res
    .status(200)
    .clearCookie("refreshToken", options)
    .clearCookie("accessToken", options)
    .json(new ApiResponse(200, {}, "User logout seccussfully"));
});

export { registerUser, loginUser, logoutUser };
