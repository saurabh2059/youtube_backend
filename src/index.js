
// require('dotenv').config({path:'./env'})

import dotenv from "dotenv"
import connectDB from './db/index.js'
import {app} from "./app.js"

dotenv.config({path:'./env'})

connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000, ()=>{
        console.log(` ⚙️ server is running at port : ${process.env.PORT}`)
    })
})
.catch((err)=>{
    console.log(`Mongo DB connection failed index !! `,err)
})



















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