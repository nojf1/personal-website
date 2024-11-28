import React from "react";
import "../App.css";

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-500 to-gray-700 text-white py-8">
      <div className="container mx-auto text-center">
        {/* Footer Text */}
        <p className="text-sm md:text-base lg:text-lg font-medium">
          &copy; {new Date().getFullYear()} Nicole.OJF
        </p>

        {/* Footer Navigation */}
        <nav className="mt-6">
          <ul className="flex justify-center space-x-6">
            <li>
              <a
                href="/personal-website"
                className="text-xs md:text-sm lg:text-base font-medium hover:text-gray-200 transition-colors"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/about"
                className="text-xs md:text-sm lg:text-base font-medium hover:text-gray-200 transition-colors"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="text-xs md:text-sm lg:text-base font-medium hover:text-gray-200 transition-colors"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
