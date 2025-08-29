import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { CLEAR_CART } from "../redux/constant";

const Checkout = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [payment, setPayment] = useState("COD");
  const [orderPlaced, setOrderPlaced] = useState(false);

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const handleOrder = () => {
    if (!name || !address || !phone) {
      alert("Please fill all the details!");
      return;
    }
   
    setOrderPlaced(true);
    dispatch({ type: CLEAR_CART });
  };

  if (cartItems.length === 0 && !orderPlaced) {
    return (
      <div className="p-10 text-center text-gray-600 text-xl">
        🛒 Your cart is empty
      </div>
    );
  }

  if (orderPlaced) {
    return (
      <div className="p-10 text-center">
        <h1 className="text-3xl font-bold text-green-600 mb-4">
          ✅ Order Placed Successfully!
        </h1>
        <p className="text-gray-700 mb-4">
          Thank you, {name}. Your order of ₹{totalPrice} is on the way.
        </p>
        <p className="text-gray-500">Payment Method: {payment}</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Checkout</h1>

      <div className="bg-white shadow-md rounded-lg p-4 mb-6">
        <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
        <ul className="space-y-2">
          {cartItems.map((item) => (
            <li
              key={item.id}
              className="flex justify-between border-b pb-2"
            >
              <span>{item.name} x {item.quantity}</span>
              <span>₹{item.price * item.quantity}</span>
            </li>
          ))}
        </ul>
        <div className="mt-4 font-bold text-right">
          Total: ₹{totalPrice}
        </div>
      </div>

      <div className="bg-white shadow-md rounded-lg p-4">
        <h2 className="text-xl font-semibold mb-4">Delivery Details</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleOrder();
          }}
          className="space-y-4"
        >
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
          />
          <input
            type="text"
            placeholder="Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
          />
          <input
            type="tel"
            placeholder="Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
          />

          <div className="mt-2">
            <label className="block font-medium mb-1">Payment Method:</label>
            <select
              value={payment}
              onChange={(e) => setPayment(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
            >
              <option value="COD">Cash on Delivery</option>
              <option value="Online">Online Payment</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition"
          >
            Place Order
          </button>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
