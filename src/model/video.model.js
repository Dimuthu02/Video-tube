import mongoose,{Schema} from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const VideoSchema=new Schema({

    videoFile: {
        type: String, // URL to the video file
        required: true,
    },
    thumbnail: {
        type: String, // URL to the video thumbnail image
        required: true,
    },


title: {
    type: String,
    required: true,
    trim: true,
    index: true // For faster searches by video title
},
description: {
    type: String,
    required: true,
    trim: true
},
duration: {
    type: Number, // Duration in seconds or milliseconds
    required: true,
},
views: {
    type: Number,
    default: 0 // Videos start with 0 views
},
isPublished: {
    type: Boolean,
    default: true // Videos are not published by default
}
,owner:{
    type:Schema.Types.ObjectId,
    ref:"user"
}
},
{
timestamps: true // Automatically adds createdAt and updatedAt fields
}


)

VideoSchema.plugin(mongooseAggregatePaginate)
// //MongoDB හි දත්ත විශාල ප්‍රමාණයක් ඇති විට, එකවර සියලු දත්ත ලබා ගැනීම කාර්යක්ෂම නොවේ. ඒ වෙනුවට, දත්ත කොටස් වශයෙන් (පිටු වශයෙන් - pages) ලබා ගැනීම "pagination" ලෙස හැඳින්වේ.

// plugin() method එක භාවිතා කිරීමේ ප්‍රධාන අරමුණ කුමක්ද?
// කෝඩ් නැවත භාවිතය (Code Reusability)

// ව්‍යාපෘති සංවිධානය (Project Organization)

// (Video.plugin()) භාවිතා කරන්නේ ඇයි?
// Schema යනු Blueprint එකයි:
// Model එක Schema මත පදනම් වේ

export const video=mongoose.model("video",VideoSchema)