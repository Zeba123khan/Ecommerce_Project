import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../contexts/CartContext";
import { SidebarContext } from "../contexts/SidebarContext";
import { IoMdCart } from "react-icons/io";
import { FaShoppingBag, FaHome, FaTshirt, FaPhoneAlt } from "react-icons/fa"; // Importing icons for navs

const Header = () => {
  const { itemAmount } = useContext(CartContext);
  const { setIsOpen } = useContext(SidebarContext);

  return (
    <header className="bg-white shadow-md py-4 sticky top-0 z-40">
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <FaShoppingBag className="text-3xl text-primary" /> {/* Logo Icon */}
          <h1 className="text-2xl font-bold text-primary">E-Shop</h1>
        </Link>

        {/* Home Link */}
        <Link to="/" className="flex items-center space-x-1 text-gray-800 hover:text-primary transition-colors duration-200">
          <FaHome className="text-2xl" /> {/* Home Icon */}
          <span className="hidden md:block text-lg">Home</span> {/* Text label */}
        </Link>

        {/* All Products Link */}
        <Link to="/allproducts" className="flex items-center space-x-1 text-gray-800 hover:text-primary transition-colors duration-200">
          <FaTshirt className="text-2xl" /> {/* All Products Icon */}
          <span className="hidden md:block text-lg">All Products</span> {/* Text label */}
        </Link>

        {/* Contact Link */}
        <Link to="/contact" className="flex items-center space-x-1 text-gray-800 hover:text-primary transition-colors duration-200">
          <FaPhoneAlt className="text-2xl" /> {/* Contact Icon */}
          <span className="hidden md:block text-lg">Contact</span> {/* Text label */}
        </Link>

        {/* Cart Icon */}
        <div className="relative cursor-pointer flex items-center space-x-4">
          <div
            className="relative cursor-pointer"
            onClick={() => setIsOpen(true)}
          >
            <IoMdCart className="text-3xl text-gray-800 hover:text-primary transition-colors duration-200" />
            {itemAmount > 0 && (
              <span className="absolute -top-2 -right-3 bg-red-500 text-white rounded-full px-2 text-xs font-semibold">
                {itemAmount}
              </span>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
