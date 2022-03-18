const mongoose=require("mongoose")

const postSchema=new mongoose.Schema(
    {
        title:{type:String,required:true},
        body:{type:String,required:true},
        user_id:{type:mongoose.Schema.Types.ObjectId,ref:"user"}
    },
    {
        timestamps:true,
        versionKey:false
    }
)
const Post=mongoose.model("post",postSchema)
module.exports=Post