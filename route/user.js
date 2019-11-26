var express=require("express");
var app=express();

app.get("/",(req,res)=>{
    console.log("selected....");
})


module.exports=app;