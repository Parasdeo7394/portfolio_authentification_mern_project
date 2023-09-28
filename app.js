require("dotenv").config();
const express = require("express");
const app = express();
require("./db/conn");
const router = require("./routes/router");
const cors = require("cors");
const cookiParser = require("cookie-parser")

const path = require('path')

const port = process.env.PORT || 8010;





// app.get('/',(req,res)=>{
//     res.status(201).json("server is created");
// });

app.use(express.json());
app.use(cookiParser());
app.use(cors());


// static files access
app.use(express.static(path.join(__dirname, '../client/build')));

app.use(router);

app.get('*',function(req,res){
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
})

app.listen(port,()=>{
    console.log(`server start at port no : ${port}`);
})