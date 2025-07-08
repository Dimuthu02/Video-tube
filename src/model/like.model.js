import mongoose, { Schema } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";
const likeSchema = new Schema(
  {

    video: {
      type: Schema.Types.ObjectId,
      ref: "Video",
    },
    comment: {
      type: Schema.Types.ObjectId,
      ref: "Comment", 
    },
    tweet: {
    
      type: Schema.Types.ObjectId,
      ref: "Tweet",
    },

  
    likedBy: {
      type: Schema.Types.ObjectId,
      ref: "User", // References the 'User' model
      required: true,
      index: true, 
    },
  },
  {
    timestamps: true, 
  }
);

likeSchema.plugin(mongooseAggregatePaginate)
// Export the Like Model
export const Like = mongoose.model("Like", likeSchema);
