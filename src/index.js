
// require('dotenv').config({path:'./env'})

import dotenv from "dotenv"
import connectDB from './db/index.js';

dotenv.config({path:'./env'})

connectDB()



















/** 

import express from 'express';
const app = express();


function connectDB(){

}

//iife ()() immediately invoked function expression  start with ; is option to separate from previous line


;( async()=>{
    
    try{
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)

 
        app.on("error",(error)=>{
            console.log("app not able to communicate")
            throw error
        })
        app.listen(process.env.PORT,()=>{
            console.log(`APP is listening on port ${process.env.PORT}`)
        })


    }catch(error){
        console.error("ERROR:",error);
        throw error;
    }

})()

connectDB();

*/