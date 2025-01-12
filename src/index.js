// env variable
// require("dotenv").config({path: "./env"}); one way
import dotenv from "dotenv" // another way
import connectDB from "./DB/connect.js";

dotenv.config({
    path : "./env"
})

connectDB();








// import express from "express"
// const app = express();

// // IIFE --- WOW
// ;(async () =>{
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//         app.on("error" , (error)=>{
//             console.log("ERROR: " , error);
//             throw error;
//         });

//         app.listen(process.env.PORT , ()=>{
//             console.log(`App listening at port : ${process.env.PORT}`);
//         })
//     }catch(error){
//         console.error("ERROR: ",error);
//     }
// })()

