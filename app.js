const { application } = require("express");
const express = require("express");

const path=require("path");
require("./db/conn");




const app = express();
const port = process.env.PORT || 3000;

//setting the path
const staticpath=path.join(__dirname,"../public");

//middleware
application.use(express.static(staticpath))

//routing
//app.get(path, callback)
app.get("/",(req,res)=>{
    res.send("Hii I am awesome");
})

//server create
app.listen(port,()=>{
    console.log("server is running at port no ${port}");
})