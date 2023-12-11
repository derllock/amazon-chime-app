// import  express  from 'express';
// import cors from 'cors';
// import * as dotenv from 'dotenv';
// import createHttpError from 'http-errors';
// import connectDB from './mongodb/connect.js'; // @aws-sdk/util-hex-encoding@3.374.0: This package has moved to @smithy/util-hex-encoding
// import userRouter from './routes/user.route.js';
const express=require('express');
const cors=require('cors');
const dotenv=require('dotenv');
const createHttpError=require('http-errors');
const connectDB=require('./mongodb/connect.js');
const userRouter=require('./routes/user.route.js');

const app=express();     
           
app.use(express.json({limit:'50mb'}));  
app.use(cors()); 
dotenv.config();
connectDB();
const PORT=process.env.PORT;





app.use('/api/v1/users',userRouter);

app.use((req,res,next)=>{
    next(createHttpError(404,"not found"))
});

app.listen(PORT,()=>{
    console.log("Server started on Port "+ PORT+'...');
});

//error handler wherever u use next(...) this funt, will be called
app.use((err,req,res,next)=>{
    res.status(err.status || 500)
    res.send({
        error:{
            status:err.status || 500,
            message:err.message
        }
    })
});