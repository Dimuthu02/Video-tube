import {ApiResponse} from "../utils/ApiResponse.js"
import { asyncHandler } from "../utils/aysncHandler.js";

const helthchek=asyncHandler(async(req , res)=>
{
    return res
    .status(200)
    .json(new ApiResponse(200 ,"ok","Helth check passed"))

})

export{helthchek}