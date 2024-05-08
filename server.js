import express from 'express'
import mongoose from 'mongoose';
import userRouter from './routes/user.js'
import cookieParser from 'cookie-parser';
import blogRouter from './routes/blog.js';
import {config}  from 'dotenv';
import cors from 'cors';

config({
    path:'./data/config.env'
})

const app=express();

app.use(express.json())

app.use(cookieParser());

app.use(cors({
    origin: ['http://localhost:5173', 'http://localhost:5174'], // Allows requests from any origin
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true, // If using authentication, this should be adjusted
}));


// const corsOptions = {
//     origin: 'http://localhost:5174'
//     // Only allow requests from this origin
//   };
  
//   app.use(cors(corsOptions));  


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