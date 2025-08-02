const User=require("../models/UserModel");
const bcrypt=require("bcrypt");
const jwt = require("jsonwebtoken");
module.exports.registerUser=async(req,res)=>{
    try {
        const {name,email,password}=req.body;
        const exist=await User.findOne({email});
        if(exist){
            return res.status(400).json({msg:"User already exists"});
        }
        else{
            const hash=await bcrypt.hash(password,10);
            const user=new User({name,email,password:hash});
            await user.save();
             res.status(201).json({ msg: "Registered successfully" });
        }
    } catch (err) {
         res.status(500).json({ msg: "Error registering user" });
    }
}

module.exports.loginUser=async(req,res)=>{
    const {email,password}=req.body;
    try {
        const user=await User.findOne({email});
        if(!user){
            return res.status(400).json({msg: "Invalid credentials"});
        }
        const match=await bcrypt.compare(password,user.password);
        if(!match){
            return res.status(400).json({msg:"Invalid credentials"});
        }
        const token=jwt.sign({userId:user._id},"secretkey",{expiresIn: "1h"});
        res.json({ token, user: {id: user._id, name: user.name, email: user.email} });
    } catch (err) {
         res.status(500).json({ msg: "Login failed" });
    }
}