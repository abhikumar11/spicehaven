const Order = require("../models/OrderModel");
const Dish = require("../models/DishModel");
module.exports.createOrder = async (req, res) => {
  try {
    const user=req.user._id;

    const {items,deliveryAddress}=req.body;

    if (!Array.isArray(items) || items.length === 0 || !deliveryAddress) {
      return res.status(400).json({ message: "Missing required order fields" });
    }
    let total=0;
    const itemDetails=[];

    for (const item of items) {
      const dish = await Dish.findById(item.dish);
      if (!dish) {
        return res.status(404).json({ message: `Dish with ID ${item.dish} not found` });
      }
      total+=dish.price*item.quantity;
      itemDetails.push({
        dish: dish._id,
        name: dish.name,
        price: dish.price,
        quantity: item.quantity,
      });
      
    }
    const newOrder=new Order({
      user,
      items:itemDetails,
      total,
      deliveryAddress
    });
    await newOrder.save();
    res.status(200).json({ message: "Order created successfully!", order: newOrder });

  } catch (err) {
    console.error("Order creation error:", err);
    res.status(500).json({ message: "Something went wrong while creating the order" });
  }
};
