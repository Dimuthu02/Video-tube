import mongoose from "mongoose";
import {DB_NAME} from "../constance.js";
import dotenv from "dotenv"

const connectDB=async()=>
{
    try{

        const connectionInstance = await mongoose.connect(
          `${process.env.MONGODB_URL}/${DB_NAME}`
        );

        console.log(`
            mongodb is connected 
            DB host :${connectionInstance.connection.host}`);
        
    }
    catch(error)
    {
        console.log(`mongodb is not connected`);
        process.exit(1)
        
    }
}
export default connectDB;