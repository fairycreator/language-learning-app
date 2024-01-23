import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="text-xl font-bold text-gray-800">
                LanguageApp
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link
                to="/teachers"
                className="text-gray-900 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium"
              >
                Teachers
              </Link>
              {/* Add more navigation links if needed */}
            </div>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <Link
              to="/login"
              className="text-gray-800 hover:text-gray-600 px-3 py-2 rounded-md text-sm"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="text-gray-800 hover:text-gray-600 px-3 py-2 rounded-md text-sm"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
