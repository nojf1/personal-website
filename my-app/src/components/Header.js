import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";

const Header = () => {
  // State for mobile menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-gradient-to-r from-gray-500 to-gray-700 text-white py-8">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <div className="text-2xl md:text-3xl lg:text-4xl font-extrabold">
          <Link to="/" className="hover:opacity-80 transition-opacity">
            N.ojf
          </Link>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex space-x-6">
          <Link
            to="/personal-website"
            className="text-sm md:text-base lg:text-2xl font-medium hover:text-gray-200 transition-colors"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-sm md:text-base lg:text-2xl font-medium hover:text-gray-200 transition-colors"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="text-sm md:text-base lg:text-2xl font-medium hover:text-gray-200 transition-colors"
          >
            Contact
          </Link>
        </nav>

        {/* Call to Action Button */}
        <Link
          to="https://github.com/nojf1"
          rel="noopener noreferrer"
          target="_blank"
          className="hidden md:inline-block bg-white text-blue-600 font-semibold py-2 px-4 rounded-lg shadow hover:bg-gray-300 transition-all"
        >
          My Portfolio
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex items-center text-white focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <nav className="md:hidden bg-gray-700 text-white py-4">
          <ul className="flex flex-col items-center space-y-4">
            <li>
              <Link
                to="/personal-website"
                className="text-base font-medium hover:text-gray-200 transition-colors"
                onClick={toggleMenu}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="text-base font-medium hover:text-gray-200 transition-colors"
                onClick={toggleMenu}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="text-base font-medium hover:text-gray-200 transition-colors"
                onClick={toggleMenu}
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                to="https://github.com/nojf1"
                rel="noopener noreferrer"
                target="_blank"
                className="text-base font-medium bg-white text-blue-600 py-2 px-4 rounded-lg shadow hover:bg-gray-300 transition-all"
                onClick={toggleMenu}
              >
                My Portfolio
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
