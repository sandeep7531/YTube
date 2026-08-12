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

  const createdUser = User.findById(user._id).select("-password -refreshToken");
  if (!createdUser)
    throw new ApiError(400, "Somthing went wrong while registering user");

  return res
    .status(201)
    .json(new ApiResponse(201, createdUser, "User created successfully"));
});

export { registerUser };
