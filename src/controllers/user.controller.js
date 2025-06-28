import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import {User} from "../models/user.model.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";
import { ApiResponse } from "../utils/ApiResponse.js";

const registerUser = asyncHandler( async(req, res)=>{

     // get user details from frontend
     // validation - not empty
     // check if user already exists : username , email
     // check for images, check for avtar
     // upload them to cloudinary , avtar
     // create user object - create entry in db
     // remove password and response token field from response
     // check for user creation
     // return response
    
     const {fullName, email, username, password} = req.body
     console.log("email: ", email)
    
     if(
        [fullName,email,username,password].some((field)=>field?.trim()==="")
    ){
       
        throw new ApiError(400, "All fields are is required")
     }

    const existedUser = User.findOne({
        $or:[{ username },{ email }]
     })

     if(existedUser){
        throw new ApiError(409,"User with email or username already exist")
     }

 //  [0] gives object for getting path
     const avtarLocalPath = req.files?.avatar[0]?.path;
     const coverImageLocalPath = req.files?.coverImage[0]?.path;
   
      if(!avtarLocalPath) {
        throw new ApiError(400,"Avatar file is reqquired")
      }

  const avatar =   await uploadOnCloudinary(avtarLocalPath)
  const coverImage = await uploadOnCloudinary(coverImageLocalPath)

  if(!avtar){
    throw new ApiError(400,"Avatar file is reqquired")
  }


  //entering db

 const user = await User.create({
    fullName,
    avatar:avatar.url,
    coverImage:coverImage?.url || "",
    email,
    password,
    username:username.toLowerCase()

  })

 const createdUser =  User.findById(user._id).select(
    "-password -refreshToken"
  )

  if(!createdUser){
    throw new ApiError(500,"something went wrong while registering user ")
  }

  return res.status(201).json(
    new ApiResponse(200,createdUser,"user registered successfully")
  )



  
}) 

export {registerUser}
