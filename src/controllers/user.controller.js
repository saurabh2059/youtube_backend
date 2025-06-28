import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import {User} from "../models/user.model.js";

const registerUser = asyncHandler(async(req, res)=>{

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


    // res.status(200).json({
    //     message:"chai aur code"
    // })
})

export {registerUser}