const express=require('express');
const app=express();
const cors=require("cors");

app.use(cors())
app.use(express.json());
// app.use("/api/v1,");

app.listen(3000,function(){
    console.log("server started at port 3000")
})