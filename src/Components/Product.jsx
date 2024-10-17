import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { BsPlus, BsEyeFill } from "react-icons/bs";
import { CartContext } from "../contexts/CartContext";

const Product = ({ product }) => {
  const { addToCart } = useContext(CartContext);
  const { id, image, category, title, price } = product;

  return (
    <div className="rounded-lg h-[400px] md:h-[440px] p-4 mb-6 relative overflow-hidden group transition">
      {/* Image container with border */}
      <div className="w-full h-[60%] flex justify-center items-center overflow-hidden mb-4 border border-gray-200 rounded-md shadow-sm">
        <img
          className="max-h-[180px] md:max-h-[200px] group-hover:scale-105 transition duration-300 ease-in-out rounded-md" // Added rounded-md for image border
          src={image}
          alt={title}
        />
      </div>

      {/* Buttons on hover */}
      <div className="absolute top-6 right-5 p-2 flex flex-col items-center gap-y-2 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out">
        <button
          onClick={() => addToCart(product, id)}
          className="bg-black  text-white w-12 h-12 rounded-full flex justify-center items-center transition"
        >
          <BsPlus className="text-2xl" />
        </button>
        <Link
          to={`/product/${id}`}
          className="bg-black text-primary w-12 h-12 rounded-full flex justify-center items-center transition"
        >
          <BsEyeFill className="text-xl text-white" />
        </Link>
      </div>

      {/* Product details */}
      <div className="text-center">
        <p className="text-sm text-gray-500 mb-1">{category}</p>
        <Link to={`/product/${id}`}>
          <h2 className="font-semibold text-lg mb-2 hover:text-primary transition">
            {title}
          </h2>
        </Link>
        <p className="font-bold text-lg text-primary">$ {price.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default Product;
