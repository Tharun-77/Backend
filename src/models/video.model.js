import mongoose,{Schema} from "mongoose";

const videoSchema = new Schema(
    {
        videoFile:{
            type:String,        //cloudinary url
            required:true
        },
        thumbnail:{
            type:String,        //clodinary url
            required:true,
        },
        title:{
            type:String,        
            required:true,
        },
        discription:{
            type:String,
            required:true,
        },
        duriation:{
            type:Number,          //cloudinary URL
            required:true
        },
        view:{
            type:Number,
            default:0
        },
        isPublished:{
            type:Boolean,
            default:true
        },
        owner:{
            type:Schema.Types.ObjectId,
            ref:"User"
        }

},{timestamps:true});




export const Video = mongoose.model("Video",videoSchema);