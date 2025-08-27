const express=require("express");
const router=express.Router();

router.use("/user",require("./user"));
router.use("/order",require("./order"));
router.use("/product",require("./product"));
module.exports = router;