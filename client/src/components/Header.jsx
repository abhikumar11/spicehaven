import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import { logout } from "../redux/action/userAction";

const Header = () => {
  const { user } = useSelector((state) => state.auth);
  const { cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <header className="bg-white shadow-md p-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
     
        <Link to="/" className="text-red-500 text-2xl font-bold">
          🍽️ Spice Heaven
        </Link>

        <nav className="space-x-6 hidden md:flex items-center">
       
          <Link to="/cart" className="relative text-gray-700 hover:text-red-500 transition font-medium">
            Cart
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-4 bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                {cartCount}
              </span>
            )}
          </Link>

          {user ? (
            <>
              <span className="text-gray-700">👤 {user.name}</span>
              <button
                onClick={handleLogout}
                className="text-gray-700 hover:text-red-500 transition font-medium"
              >
                Logout
              </button>
            </>
          ) : (
            <Link to="/login" className="text-gray-700 hover:text-red-500 transition font-medium">
              Login
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
