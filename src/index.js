import dotenv from 'dotenv'
import connectDB from './db/index.js';
dotenv.config({path:'./env'});


connectDB();










/*
const app=express();

(async ()=>{
    try {
        await mongoose.connect(`${process.env.MONGO_URI}/${Mongo_Name}`);

        app.on("errror",(error)=>{
            console.error(`ERROR IN CONNECTION WITH BACKEND: ${error}`);
            throw error;
        })
        app.listen(process.env.PORT,()=>{
            console.log(`App is listening on port ${process.env.PORT}`);            
        })
    } catch (error) {
        console.error(`ERROR in DB CONNECTION: ${error}`);
        throw error;
    }
})()
*/





















/*
import { Mongo_Name } from "./contacts";
import express from 'express';

const app = express();
;(async()=>{
    try {
        await mongoose.connect(`${process.env.MONGO_URI}/${Mongo_Name}`);
        app.on("error",(errror)=>{
            console.log("ERROR",errror);
            throw error;
        })

        app.listen(process.env.PORT,()=>{
            console.log(`App is listening on port ${process.env.PORT}`);            
        })
    } catch (error) {
        console.error("ERROR: ",error);
        throw error;
    }
})()
*/
