//import express

var express=require("express")
require("./connection")
var empModel=require("./model/employee")
//initialize
var app=express()
//midd
app.use(express.json());
//api
//add employee  // async await is used for asynchronous operation of js
app.post("/add",async(req,res)=>{
    try{
        await empModel(req.body).save();
        res.send({message:"data added!!"});


    }
    catch(error){
        console.log(error)
    }
})





//port
app.listen(3004,()=>{
    console.log("port is up and running!!")
})