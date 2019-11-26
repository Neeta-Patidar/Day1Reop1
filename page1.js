var express=require("express");
var app=express();
var user=require("./route/user");


app.use(express.json());
app.use("/",user);

app.listen("9999",()=>{
     console.log("server started..");
});