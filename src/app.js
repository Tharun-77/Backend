import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';

const app = express();

app.use(cors({
    origin : process.env.CROS_ORIGIN,
    Credential:true
}))

app.use(express.json({limit:"16kb"}));

app.use(express.urlencoded({extended:true,limit:"16kb"}));

app.use(express.static("public"));

app.use(cookieParser());

//declaring of Routes 
import userRoutes from "./routes/user.routes.js"

//middle ware using in routes 
app.use('/api/v1/user',userRoutes);

export {app};