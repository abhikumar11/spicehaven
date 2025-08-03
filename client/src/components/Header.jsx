import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-white shadow-md p-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-red-500 text-2xl font-bold">
          🍽️ Spice Heaven
        </Link>
        <nav className="space-x-6 hidden md:block">
          <Link to="/login" className="text-gray-700 hover:text-red-500 transition">
            Login
          </Link>
           <Link to="/cart" className="text-gray-700 hover:text-red-500 transition">
            Cart
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
