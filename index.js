const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Router = require("./Router");
const cors = require("cors");
const port = 5000;



//middleware

app.use(express.json());

app.use(cors());




//db connection

mongoose.connect('mongodb://localhost:27017/demo',{useNewUrlParser:true,useUnifiedTopology:true},()=>{
       console.log("database start")
});



//route

app.use("/auth",Router);



//port

app.listen(port,() =>console.log("port running"));
