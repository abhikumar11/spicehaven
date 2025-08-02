const express=require("express");
const {createOrder} =require("../controllers/order");
const userAuth = require("../middleware/usermiddleware");
const router=express.Router();
router.post("/create",userAuth,createOrder)
module.exports=router;