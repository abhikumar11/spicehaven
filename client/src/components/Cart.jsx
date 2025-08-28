import { useSelector, useDispatch } from "react-redux";
import { INCREASE_QTY, DECREASE_QTY, REMOVE_FROM_CART, CLEAR_CART } from "../redux/constant";
import { decreaseQty, increaseQty } from "../redux/action/cartAction";

const Cart = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();


  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  if (cartItems.length === 0) {
    return (
      <div className="p-10 text-center text-gray-600 text-xl">
        🛒 Your cart is empty
      </div>
    );
  }

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Your Cart</h1>

      <div className="space-y-6">
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between bg-white shadow-md rounded-lg p-4"
          >
           
            <img
              src={item.image}
              alt={item.name}
              className="w-20 h-20 object-contain rounded-md"
            />

            <div className="flex-1 ml-4">
              <h2 className="font-semibold text-lg">{item.name}</h2>
              <p className="text-gray-600">₹{item.price}</p>
            </div>

            <div className="flex items-center space-x-2">
              <button
                onClick={() => dispatch(decreaseQty(item._id))}
                className="px-3 py-1 border rounded-md hover:bg-gray-200"
              >
                -
              </button>
              <span className="px-3 font-semibold">{item.quantity}</span>
              <button
                onClick={() => dispatch(increaseQty(item._id))}
                className="px-3 py-1 border rounded-md hover:bg-gray-200"
              >
                +
              </button>
            </div>

            <button
              onClick={() => dispatch({ type: REMOVE_FROM_CART, payload: item.id })}
              className="text-red-500 hover:text-red-700 font-medium ml-4"
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      <div className="mt-8 flex justify-between items-center border-t pt-6">
        <h2 className="text-xl font-bold">Total: ₹{totalPrice}</h2>
        <div className="space-x-4">
          <button
            onClick={() => dispatch({ type: CLEAR_CART })}
            className="px-6 py-2 border border-red-500 text-red-500 rounded-lg hover:bg-red-500 hover:text-white transition"
          >
            Clear Cart
          </button>
          <button className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
