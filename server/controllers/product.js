const Dish = require("../models/DishModel");

module.exports.createProduct = async (req, res) => {
     try {
          const { name, description, price, image } = req.body;
          const exist = await Dish.findOne({ name });
          if (exist) {
               return res.status(400).json({ msg: "Product already exists" });
          }
          const pro = new Dish({ name, description, price, image });
          await pro.save();

          res.status(200).json({ msg: "Product added successfully" });
     } catch (err) {
          console.error("Product Error:", err);
          res.status(500).json({ msg: "Error while adding product" });
     }
};

module.exports.getProduct=async(req,res)=>{
    try {
        const pro=await Dish.find({});
        res.status(200).json({pro});
    } catch (err) {
        console.error("Product Error:", err);
          res.status(500).json({ msg: "Error while fetching product" });
    }
}