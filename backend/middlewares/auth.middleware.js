import jwt from 'jsonwebtoken';
import User from '../models/user.model.js';

//protect
export const protect = async(req, res, next) => {
    try {
        let token;
        if (
            req.headers.authorization
            &&
            req.headers.authorization.startsWith("Bearer")
        ){
            token=req.headers.authorization.split(" ")[1];
        }

        if(!token){
            return res.status(401).json({
                success: false,
                message: "Not authorized, token missing"
            });
        }
        const decode =jwt.verify(token,process.env.JWT_SECRET);
        req.user=await User.findById(decode.id).select("-password");

        if(req.user && req.user.isBlocked){
            return res.status(403).json({
                success: false,
                message: "Your account has been blocked by an admin"
            })
        }
        next();

    } 
    catch (err) {
        res.status(401).json({
            success:false,
            message:"Token Invalid"
        });
    }
};


//role based authentication
export const authorize = (...roles) => {
    return (req,res,next)=>{
        if(!roles.includes(req.user.role)){
            return res.status(403).json({
                success: false,
                message: "Access Denied. you don't have permission."
            });
        }
        next();
    }
}


