import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("DB Connected");
    } catch (error) {
        console.error("DB Connection Failed:", error.message);
        process.exit(1);
    }
};


// import mongoose from "mongoose";

// export const connectDB = async () => {
//     try {
//         await mongoose.connect("mongodb+srv://amankumarmdp88_db_user:wJFFR7tMaPweYJZt@cluster0.ec6rwiq.mongodb.net/YourSpace")
//         .then(()=>{
//             console.log("DB Connected");
//         })
        
//     } catch (error) {
//         console.error("DB Connection Failed:", error.message);
//         process.exit(1);
//     }
// };



//amankumarmdp88_db_user
//wJFFR7tMaPweYJZt