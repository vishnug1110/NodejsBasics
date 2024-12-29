//const helpers=require('./helpers.js')
// const {sum}=require('./helpers.js')
// const http=require('http')
// const total = sum(1000,200);
// console.log(total)

// const server =http.createServer(function(req,res){
//     res.writeHead(200,{"content-type":"text/html"});
//     res.end("hello from node");
// })
// server.listen(8000)
// const fs = require('fs');
// const fileName = "target.txt"
// fs.watch("target.txt",()=>console.log("file changed"));
// console.log("hello");

// fs.readFile(fileName,(err,data)=>{
//     if(err){
//         throw err;
//     }
//     console.log(data.toString());
// });

// console.log("Now watching for file changess")
// import express from "express"
const express = require("express")
const cors = require('cors')
const morgan = require("morgan")
const authRoutes = require("./routes/auth")
const mongoose = require("mongoose")
require("dotenv").config();



const app = express()


// const myMiddleware = (req,res, next) =>{
//     console.log("!!MIDDLEWARE APPLIED!!");
//     next(); //callback required
// }

//app.use(myMiddleware)

mongoose.connect(process.env.DATABASE,{
    useNewUrlParser:true,
})
.then(()=>console.log("DB Connected"))
.catch((err)=>console.log("DB CONNECTION ERROR " , err));


app.use(cors())
app.use(morgan("dev"))


//routes middleware
app.use("/api", authRoutes)


//get post put delete

// app.get('/api/users',function(req,res){
//     res.json({
//         users:[
//             {
//                 name:"vishnu",
//                 age:22
//             },
//             {
//                 name:"valli",
//                 age:19
//             }
//         ],
//     })
// })

app.listen(8000,() => console.log("server is runnihng on port 8000"))