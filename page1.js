var express=require("express");
var app=express();

app.use(express.json());

app.listen("9999",()=>{
     console.log("server started..");
});