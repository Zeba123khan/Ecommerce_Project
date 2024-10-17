import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { IoMdAdd, IoMdRemove, IoMdClose } from "react-icons/io";
import { CartContext } from "../contexts/CartContext";

const CartItem = ({ item }) => {
  const { removeFromCart, increaseAmount, decreaseAmount } = useContext(CartContext);
  const { id, title, image, price, amount } = item;

  return (
    <div className="flex gap-x-4 py-2 lg:px-6 border-b border-gray-200 w-full">
      <div className="w-full min-h-[150px] flex items-center gap-x-4">
        <Link to={`/product/${id}`}>
          <img className="max-w-[80px]" src={image} alt={title} />
        </Link>
        <div className="w-full flex flex-col">
          <div className="flex justify-between mb-2">
            <Link to={`/product/${id}`} className="text-sm font-medium text-primary">
              {title}
            </Link>
            <button
              onClick={() => removeFromCart(id)}
              className="text-xl text-gray-500 hover:text-red-500 transition"
            >
              <IoMdClose />
            </button>
          </div>
          <div className="flex gap-x-2 h-[36px] text-sm">
            <div className="flex items-center border text-primary font-medium">
              <button onClick={() => decreaseAmount(id)}>
                <IoMdRemove />
              </button>
              <span className="px-2">{amount}</span>
              <button onClick={() => increaseAmount(id)}>
                <IoMdAdd />
              </button>
            </div>
            <div className="flex items-center">$ {price}</div>
            <div className="flex justify-end items-center text-primary font-medium">
              {`$ ${(price * amount).toFixed(2)}`}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
