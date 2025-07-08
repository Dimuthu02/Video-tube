import mongoose, { Schema } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";
const commentSchema = new Schema(
  {
    
    content: {
      type: String,
      required: true,
      trim: true,  },
  
    video: {
      type: Schema.Types.ObjectId,
      ref: "Video",
      required: true, 
      index: true, 
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "User", 
      required: true,
      index: true, 
    },
  },
  {
    timestamps: true,
  }
);
commentSchema.plugin(mongooseAggregatePaginate)
// Export the Comment Model
export const Comment = mongoose.model("Comment", commentSchema);
