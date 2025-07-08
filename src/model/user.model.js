import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
//used to encript password
import mongoose,{Schema} from "mongoose";
// 1. `mongoose` සහ `Schema` යන දෙකම එකම පේළියකින් import කර තිබෙන්නේ ඇයි? ඒවා වෙන වෙනම import කළ හැකිද? එසේ කළහොත්
// කෝඩ් එකේ සංක්ෂිප්තභාවය (Conciseness): මෙය කෝඩ් එක වඩාත් කෙටි හා කියවීමට පහසු කරයි. වෙන වෙනම පේළි දෙකක් ලිවීමෙන් වැළකී සිටිය හැක.

// පැහැදිලිකම (Clarity): Schema object එක mongoose පුස්තකාලයටම අයිති බවත්, එය mongoose හි කොටසක් බවත් මෙය පැහැදිලිව පෙන්වයි.

// පොදු සම්මතය (Common Practice): Mongoose වැනි පුස්තකාල භාවිතා කරන විට, මෙය සංවර්ධකයින් අතර බහුලව භාවිතා වන සහ පිළිගත් ක්‍රමයකි.


// වෙන වෙනම import කරන ආකාරය:

// JavaScript

// import mongoose from "mongoose"; // Mongoose library එක සම්පූර්ණයෙන් import කරයි
// const Schema = mongoose.Schema; 

// Schema එකක් නිර්මාණය නොකර Mongoose භාවිතයෙන් දත්ත ඇතුළත් කළහොත් ඇතිවන ගැටලු:
// දත්ත අනුකූලතාවක් නොමැති වීම (Lack of Data Consistency):
// දත්ත වලංගුකරණයක් නොමැති වීම (No Data Validation):
// කෝඩ් එකේ පැහැදිලිකම නොමැති වීම (Lack of Code Clarity and Maintainability):
const userScheama=new Scheama({
Name:{
    type:String,
    required:true,
    unique:true,
lowercase:true,
trim:true,
index:true
},
email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
   
},
fullName: { 
    type: String,
    required: true, // Full name is usually required
    trim: true,
    index: true 
},
avatar: {
    type: String, // Cloudinary URL or path to image
    required: true, 
},
coverImage: {
    type: String, // Cloudinary URL or path to image
 
},   
watchHistory: [ 
    {
        type: Schema.Types.ObjectId, // Each item in the array is an ObjectId
        ref: "Video" 
    }
],
password: {
    type: String,
    required: [true, "Password is required"],
    minlength: [8, "Password must be at least 8 characters long"] 
},
refreshToken: {
    type: String,

},
},
{
timestamps: true


})

userScheama.pre("save",async function (next) {

    if(!this.modified("password"))
        return next()

    this.password=bcrypt.hash(this.password,10)//encrypt password
    next()
    
})

userScheama.methods.isPasswordCorrect=async function(password)
{
   return await bcrypt.compare(password,this.password)
}

userScheama.methods.genetrateRefreshtokemen =  function () {
    return jwt.sign(
      {
        _id: this._id,
      },
      process.env.Refresh_TOKEEN_SECREAT,
      {
        expiresIn: process.env.Refresh_TOKEEN_SECREAT_Expiery,
      }
    );
    }
userScheama.methods.genetrateAccessToken =  function () {
   return jwt.sign(
      {
        _id: this._id,
        email: this.email,
        username: this.username,
        fullName: this.fullName,
      },
      process.env.ACCESS_TOKEEN_SECREAT,
      {
        expiresIn: process.env.ACCESS_TOKEEN_SECREAT_Expiery,
      }
    );
};




userScheama.plugin(mongooseAggregatePaginate)
export const user=mongoose.model("user",userScheama)

// සාරාංශයක් ලෙස, JWT යනු නවීන web application වලදී authentication සහ authorization සඳහා බහුලව භාවිතා වන, බලවත් සහ කාර්යක්ෂම ක්‍රමයකි.