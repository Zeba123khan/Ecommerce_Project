import React, { useContext, useState } from "react";
import { ProductContext } from "../contexts/ProductContext";
import { CartContext } from "../contexts/CartContext";
import Product from "../Components/Product";

const AllProducts = () => {
  const { products } = useContext(ProductContext);
  const { addToCart } = useContext(CartContext);

  // State for filtering products based on category
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Function to filter products based on the selected category
  const filteredProducts = products.filter((product) => {
    if (selectedCategory === "all") return true;
    return product.category === selectedCategory;
  });

  // Unique categories extracted from products
  const categories = [...new Set(products.map((product) => product.category))];

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Category Filter */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-semibold mb-4">Browse All Products</h1>
        <div className="inline-block">
          <label htmlFor="category" className="font-medium mr-4">
            Filter by Category:
          </label>
          <select
            id="category"
            className="border px-3 py-2 rounded-md"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="all">All</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProducts.map((product) => (
          <Product product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
