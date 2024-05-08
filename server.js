import express from 'express'
import mongoose from 'mongoose';
import userRouter from './routes/user.js'
import cookieParser from 'cookie-parser';
import blogRouter from './routes/blog.js';
import {config}  from 'dotenv';
import cors from 'cors';


const app=express();

app.use(express.json())

app.use(cookieParser());

app.use(cors({
    origin:process.env.FRONTEND_URL,
    method:["GET","POST","PUT","DELETE"],
    credentials:true
}))

const corsOptions = {
    origin: 'http://localhost:5174'
    // Only allow requests from this origin
  };
  
  app.use(cors(corsOptions));  

config({
    path:'./data/config.env'
})

mongoose.connect(process.env.MONGO_URL,
    {
        dbName:"Mern_2024"
    }
).then(()=>console.log("MongoDB is Connected!"))

//user Router
app.use('/api/users',userRouter);

//blog Router
app.use('/api/blogs',blogRouter);


app.listen(process.env.PORT,()=>console.log(`The Server is a Running on port ${process.env.PORT}`))