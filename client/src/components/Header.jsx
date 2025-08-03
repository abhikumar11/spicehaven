import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../redux/action';

const Header = () => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <header className="bg-white shadow-md p-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-red-500 text-2xl font-bold">
          🍽️ Spice Heaven
        </Link>

        <nav className="space-x-6 hidden md:flex items-center">
          <Link to="/cart" className="text-gray-700 hover:text-red-500 transition">
            Cart
          </Link>

          {user ? (
            <>
              <span className="text-gray-700">👤 {user.name}</span>
              <button
                onClick={handleLogout}
                className="text-gray-700 hover:text-red-500 transition"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="text-gray-700 hover:text-red-500 transition">
                Login
              </Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
