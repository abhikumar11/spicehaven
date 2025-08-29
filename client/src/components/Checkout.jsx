// src/pages/Checkout.js
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createOrder } from "../redux/action/orderAction";

const Checkout = () => {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);
  const { loading, error, success } = useSelector((state) => state.order);

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const [address, setAddress] = useState({
    street: "",
    city: "",
    state: "",
    zip: "",
  });

  const handleChange = (e) => {
    setAddress({ ...address, [e.target.name]: e.target.value });
  };

  const handlePlaceOrder = () => {
    dispatch(createOrder(cartItems, address, totalPrice));
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Checkout</h1>

      <div className="bg-gray-100 p-4 rounded-lg mb-6">
        <h2 className="text-lg font-semibold mb-2">Order Summary</h2>
        {cartItems.map((item) => (
          <div
            key={item._id}
            className="flex justify-between text-gray-700 mb-2"
          >
            <span>
              {item.name} × {item.quantity}
            </span>
            <span>₹{item.price * item.quantity}</span>
          </div>
        ))}
        <div className="border-t mt-2 pt-2 font-bold flex justify-between">
          <span>Total:</span>
          <span>₹{totalPrice}</span>
        </div>
      </div>

      <div className="bg-white shadow p-4 rounded-lg mb-6">
        <h2 className="text-lg font-semibold mb-4">Delivery Address</h2>
        <input
          type="text"
          name="street"
          placeholder="Street Address"
          value={address.street}
          onChange={handleChange}
          className="w-full border p-2 mb-3 rounded"
        />
        <input
          type="text"
          name="city"
          placeholder="City"
          value={address.city}
          onChange={handleChange}
          className="w-full border p-2 mb-3 rounded"
        />
        <input
          type="text"
          name="state"
          placeholder="State"
          value={address.state}
          onChange={handleChange}
          className="w-full border p-2 mb-3 rounded"
        />
        <input
          type="text"
          name="zip"
          placeholder="ZIP Code"
          value={address.zip}
          onChange={handleChange}
          className="w-full border p-2 mb-3 rounded"
        />
      </div>

    
      <button
        onClick={handlePlaceOrder}
        disabled={loading}
        className="w-full py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
      >
        {loading ? "Placing Order..." : "Place Order"}
      </button>

      {/* Order Status */}
      {error && <p className="text-red-500 mt-4">{error}</p>}
      {success && (
        <p className="text-green-600 mt-4">✅ Order placed successfully!</p>
      )}
    </div>
  );
};

export default Checkout;
