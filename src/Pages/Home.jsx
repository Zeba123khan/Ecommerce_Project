import React, { useContext } from "react";
import { ProductContext } from "../contexts/ProductContext";
import Product from '../Components/Product';
import { Link } from "react-router-dom";

const Home = () => {
  const { products } = useContext(ProductContext);
  const filteredProducts = products.filter(
    (product) => product.category === "men's clothing" || product.category === "women's clothing"
  );

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-white dark:bg-gray-900">
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-3xl font-extrabold tracking-tight leading-tight sm:text-4xl md:text-5xl xl:text-6xl dark:text-white">
              Payments tool for software companies
            </h1>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
              From checkout to global sales tax compliance, companies around the world use Flowbite to simplify their payment stack.
            </p>
            <a href="#" className="inline-flex items-center justify-center px-5 py-3 mr-3 text-sm font-medium text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900 sm:text-base">
              Get started
              <svg className="w-4 h-4 ml-2 -mr-1 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
              </svg>
            </a>
            <Link to="/allproducts" className="inline-flex items-center justify-center px-5 py-3 text-sm font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800 sm:text-base">
              Speak to Sales
            </Link>
          </div>
          <div className="hidden lg:flex lg:col-span-5 lg:items-center lg:h-auto">
            <img
              src="/Images/Hero.png"
              alt="Clothing Mockup"
              className="w-full h-full object-cover max-h-[500px] rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-10 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl font-semibold mb-8 text-center sm:text-3xl lg:text-4xl">Explore Our Products</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
            {filteredProducts.map((product) => (
              <Product product={product} key={product.id} />
            ))}
          </div>
        </div>
      </section>

      {/* All Products Button */}
      <section className="py-8 text-center">
        <Link to="/allproducts">
          <button className="px-6 py-3 bg-black text-white rounded-lg transition duration-300 hover:bg-gray-800 hover:scale-105">
            View All Products
          </button>
        </Link>
      </section>
    </div>
  );
};

export default Home;
