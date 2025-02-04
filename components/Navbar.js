import React from "react";
import "@/components/Navbar.css";

const Navbar = () => {
  return (
    <nav
      id="navbar"
      className="fixed w-full bg-neutral-900/90 backdrop-blur-sm z-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <a href="#" className="text-white font-raleway text-xl font-bold">
              <div className="raleway">Future</div>
              <div className="raleway">Culture.</div>
            </a>
          </div>

          {/* <!-- Mobile menu button --> */}
          <div className="flex md:hidden">
            <button
              id="mobile-menu-button"
              className="text-gray-300 hover:text-white focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              <div className="w-6 h-6 flex flex-col justify-between">
                <span className="block w-full h-0.5 bg-white transform transition duration-300"></span>
                <span className="block w-full h-0.5 bg-white transform transition duration-300"></span>
                <span className="block w-full h-0.5 bg-white transform transition duration-300"></span>
              </div>
            </button>
          </div>

          {/* <!-- Desktop menu --> */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <a
              href="#hero"
              className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors duration-300"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors duration-300"
            >
              About
            </a>
            <a
              href="#collections"
              className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors duration-300"
            >
              Collections
            </a>
            <a
              href="#featured"
              className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors duration-300"
            >
              Featured
            </a>
            <a
              href="#process"
              className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors duration-300"
            >
              Process
            </a>
            <a
              href="#testimonials"
              className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors duration-300"
            >
              Testimonials
            </a>
            <a
              href="#contact"
              className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors duration-300"
            >
              Contact
            </a>
          </div>
        </div>
      </div>

      {/* <!-- Mobile menu --> */}
      <div
        id="mobile-menu"
        className="hidden md:hidden bg-neutral-900/90 backdrop-blur-sm"
      >
        <div className="px-2 pt-2 pb-3 space-y-1">
          <a
            href="#hero"
            className="block text-gray-300 hover:text-white px-3 py-2 text-base font-medium"
          >
            Home
          </a>
          <a
            href="#about"
            className="block text-gray-300 hover:text-white px-3 py-2 text-base font-medium"
          >
            About
          </a>
          <a
            href="#collections"
            className="block text-gray-300 hover:text-white px-3 py-2 text-base font-medium"
          >
            Collections
          </a>
          <a
            href="#featured"
            className="block text-gray-300 hover:text-white px-3 py-2 text-base font-medium"
          >
            Featured
          </a>
          <a
            href="#process"
            className="block text-gray-300 hover:text-white px-3 py-2 text-base font-medium"
          >
            Process
          </a>
          <a
            href="#testimonials"
            className="block text-gray-300 hover:text-white px-3 py-2 text-base font-medium"
          >
            Testimonials
          </a>
          <a
            href="#contact"
            className="block text-gray-300 hover:text-white px-3 py-2 text-base font-medium"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
