const express=require("express");
const { getProduct, createProduct } = require("../controllers/product");

const router=express.Router();
router.get("/getall",getProduct);
router.post("/create",createProduct);
module.exports=router;