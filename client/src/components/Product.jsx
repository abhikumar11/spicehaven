import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/action/cartAction";

const Product = ({ product }) => {
     const dispatch=useDispatch();

     return (
          <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 p-4 flex flex-col items-center text-center">
               <img
                    src={product.image}
                    alt={product.name}
                    className="w-40 h-40 object-contain mb-4"
               />
               <h2 className="text-lg font-semibold text-gray-800">
                    {product.name}
               </h2>
               <p className="text-gray-600 font-medium mt-1">
                    ₹{product.price}
               </p>
               <button onClick={()=>dispatch(addToCart(product))} className="mt-4 border-2 border-green-600 text-green-600 px-6 py-2 rounded-xl hover:bg-green-600 hover:text-white transition-colors duration-300">
                    ADD
               </button>
          </div>
     );
};

export default Product;
