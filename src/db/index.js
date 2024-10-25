import mongoose from 'mongoose';
import { Mongo_Name } from '../contacts.js';

const connectDB=async ()=>{
    try{
        const connection=await mongoose.connect(`${process.env.MONGO_URI}/${Mongo_Name}}`);
        console.log(`MONGODB is hosteted in HOST: ${process.env.MONGO_URI}`);
    }
    catch(error){
        console.error(`ERROR: IN SOMENTHING ${error}`);
        process.exit(1);
    }
}

export default connectDB;