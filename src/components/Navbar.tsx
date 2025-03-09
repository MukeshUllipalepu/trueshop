import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Search, User, Store } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Store className="w-8 h-8" />
            <span className="text-xl font-bold">TrueShop</span>
          </Link>
          
          <div className="flex-1 max-w-2xl mx-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Search products..."
                className="w-full px-4 py-2 rounded-lg text-gray-900 focus:outline-none"
              />
              <Search className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
          </div>

          <div className="flex items-center space-x-6">
            <Link to="/cart" className="relative">
              <ShoppingCart className="w-6 h-6" />
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                0
              </span>
            </Link>
            <Link to="/login">
              <User className="w-6 h-6" />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;