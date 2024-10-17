import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { ProductContext } from "../contexts/ProductContext";
import { CartContext } from "../contexts/CartContext";
import { toast } from "react-toastify";

const ProductDetails = () => {
  const { id } = useParams();
  const { products } = useContext(ProductContext);
  const { addToCart } = useContext(CartContext);

  const product = products.find((product) => product.id === parseInt(id));

  if (!product) return <p className="text-center text-lg">Loading...</p>;

  const { title, price, description, image } = product;

  const handleAddToCart = () => {
    addToCart(product, product.id);
    toast.success(`${title} added to cart!`); // Notify
  };

  return (
    <div className="container mx-auto my-20 px-20">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Image section */}
        <div className="w-full lg:w-[40%] flex justify-center mb-4 lg:mb-0">
          <img className="rounded-lg max-h-[400px] object-cover" src={image} alt={title} />
        </div>

        {/* Details section */}
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl font-bold mb-4 text-gray-800">{title}</h1>
          <p className="text-2xl font-semibold text-primary mb-4">$ {price.toFixed(2)}</p>
          <p className="text-gray-600 mb-6">{description}</p>

          {/* Aligning button to the left and reducing width */}
          <button
            onClick={handleAddToCart}
            className="bg-black text-white hover:bg-gray-800 transition duration-300 ease-in-out w-32 py-2 rounded-lg shadow-md hover:shadow-lg self-start"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
