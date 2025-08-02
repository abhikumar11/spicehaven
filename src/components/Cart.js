import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { clearCart, removeFromCart } from '../redux/action';

const Cart = () => {
const {items} = useSelector((state) => state.cart);
const dispatch = useDispatch();
console.log("cart:",items)
const total = items.reduce(
  (acc, item) => acc + item.price * item.quantity,
  0
);
  return (
    <div>
      <h2>Cart</h2>
      {items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {items.map((item) => (
            <div key={item.id} style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
              <img src={item.image} alt={item.name} width="60" />
              <div>
                <h4>{item.name}</h4>
                <p>&#8377;{item.price} × {item.quantity}</p>
              </div>
              <button onClick={() => dispatch(removeFromCart(item.id))}>Remove</button>
            </div>
          ))}

          <h3>Total: &#8377;{total.toFixed(2)}</h3>
          <button onClick={() => dispatch(clearCart())}>Clear Cart</button>
        </div>
      )}
    </div>
  );
};

export default Cart;