import mongoose, { Schema } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";
const subscriberSchema = new Schema(
  {
    channel: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true,
    },
    subscriber: {
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

subscriberSchema.index({ channel: 1, subscriber: 1 }, { unique: true });

subscriberSchema.plugin(mongooseAggregatePaginate)
export const Subscriber = mongoose.model("Subscriber", subscriberSchema);
