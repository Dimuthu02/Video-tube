import mongoose, { Schema } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";
const tweetSchema = new Schema(
  {
    owner: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true,
    },
    content: {
      type: String,
      required: true,
      trim: true,
      maxlength: [280, "Tweet content cannot exceed 280 characters"],
    },
  },
  {
    timestamps: true,
  }
);
tweetSchema.plugin(mongooseAggregatePaginate)
export const Tweet = mongoose.model("Tweet", tweetSchema);
