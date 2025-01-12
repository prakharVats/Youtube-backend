// env variable
// require("dotenv").config({path: "./env"}); one way
import dotenv from "dotenv" // another way
import connectDB from "./DB/connect.js";
import app from "./app.js";

dotenv.config({
    path : "./env"
})

connectDB().then(() =>{
    app.listen(process.env.PORT || 8000 , ()=>{
        console.log(`listening at PORT : ${process.env.PORT}`);
    })
}).catch(err => {
    console.log("connection failed! " , err)
});








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

