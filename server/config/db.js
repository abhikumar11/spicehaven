const mongoose=require("mongoose");

const connectDb=async()=>{
        await mongoose.connect("mongodb+srv://abhi:abhi@cluster1.p6lnqsp.mongodb.net/spicehaven")
        .then(()=>console.log("Connected to Database"))
        .catch((err)=>console.log("error while connecting to database",err));
}



module.exports=connectDb;