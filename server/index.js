const express=require("express");
const app=express();
const cors=require("cors");
const bodyParser = require('body-parser');
const connectDb = require('./config/db');

app.use(cors());
app.use(bodyParser.json());
connectDb();

app.use("/api",require("./routes"));
app.listen(3001,()=>{
    console.log('listening on port: ',3001);
});