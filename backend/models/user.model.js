import mongoose from "mongoose";

const userSchema=new mongoose.Schema({
    name :{
        type: String,
        required: true
    },
    email:{
        type: String,
        requires: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    },
    role:{
        type: String,
        enum: ["buyer", "seller", "admin"],
        default:"buyer"
    },
    phone:{
        type : String
    },
    isBlocked:{
        type: Boolean,
        default: false
    },
    profilePic:{
        type: String
    },
    address:{
        type:String
    },
    isApproved:{
        type:Boolean,
        default: true
    },
    isVerified:{
        type: Boolean,
        default: false
    },
    verficationToken:{
        type:String
    },
    resetPasswordToken:{
        type: String,
    },
    resetPasswordExpire:{
        type: Date
    }
    
},{
    timestamp:true
});

const user=mongoose.model("User",userSchema);

export default user;