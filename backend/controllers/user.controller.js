import user from "../models/user.model.js";


//get Profile
export const getProfile = async (req,res)=>{
    try{
        const user =await User.findById(req.user._id).select("-password");
        res.status(200).json({
            success:true,
            user
        });
    }

    catch(err){
        res.status(500).json({
            success: false,
            message: err.message
        });
    }
}

//to get public profile

export const getPublicProfile=async(req,res)=>{
    try {
        const user =await User.findById(req.params.id).select("name profilePic role createAt");
        if(!user){
            return res.status(404).json({
                success: false,
                message: "User not found"
            });
        }
        res.status(200).json({
            success:true,
            user
        });
    } 
    catch(err){
        res.status(500).json({
            success: false,
            message: err.message
        });
    }
}


//update a profile

export const updateProfile =async(req,res)=>{
    try{
        const {name,phone, address, removeProfilePic}=req.body;
        const user= await User.findById(req.user._id);

        if(!user){
            return res.status(404).json({
                success: false,
                message: "User not found"
            });
        }

        //image handling
    }
    catch(err){

    }
}



 



