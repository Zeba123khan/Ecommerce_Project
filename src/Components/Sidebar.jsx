import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { IoMdArrowForward } from "react-icons/io";
import { FiTrash2 } from "react-icons/fi";
import CartItem from "./CartItem";
import { SidebarContext } from "../contexts/SidebarContext";
import { CartContext } from "../contexts/CartContext";

const Sidebar = () => {
  const { isOpen, handleClose } = useContext(SidebarContext);
  const { cart, clearCart, total, itemAmount } = useContext(CartContext);

  return (
    <div
      className={`${
        isOpen ? "right-0" : "-right-full"
      } w-full md:w-[45vw] lg:w-[40vw] xl:w-[35vw] bg-white fixed top-0 h-full shadow-lg transition-all duration-300 ease-in-out z-50`} // Increased width by 5%
    >
      {/* Header */}
      <div className="flex items-center justify-between py-6 px-6 border-b shadow-sm">
        <h2 className="uppercase text-sm font-semibold">
          Shopping Bag ({itemAmount})
        </h2>
        <button onClick={handleClose} className="text-gray-600 hover:text-gray-900 transition">
          <IoMdArrowForward className="text-2xl" />
        </button>
      </div>

      {/* Cart Items */}
      <div className="h-[400px] md:h-[50vh] lg:h-[55vh] xl:h-[60vh] overflow-y-auto px-4 border-b">
        {cart.length > 0 ? (
          cart.map((item) => <CartItem item={item} key={item.id} />)
        ) : (
          <div className="text-center py-10 text-gray-500">Your cart is empty.</div>
        )}
      </div>

      {/* Footer */}
      <div className="px-6 py-6">
        {/* Total and Clear Cart Button */}
        <div className="flex justify-between items-center mb-0">
          <span className="font-semibold text-lg">Total: $ {total.toFixed(2)}</span>
          <button
            onClick={clearCart}
            className="bg-red-500 hover:bg-red-600 text-white p-3 rounded-full shadow-md transition"
          >
            <FiTrash2 className="text-xl" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
