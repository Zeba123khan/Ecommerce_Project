import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from './Components/Footer'
import Sidebar from "./Components/Sidebar";
import Home from "./Pages/Home";
import ProductDetails from "./Pages/ProductDetails";
import CartProvider from "./contexts/CartContext";
import SidebarProvider from "./contexts/SidebarContext";
import ProductProvider from "./contexts/ProductContext";
import AllProducts from "./Pages/AllProducts";
import Contact from "./Pages/Contact";

const App = () => {
  return (
    <ProductProvider>
      <CartProvider>
        <SidebarProvider>
          <Router>
            <Header />
            <Sidebar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/product/:id" element={<ProductDetails />} />
              <Route path="/allproducts" element={<AllProducts/>} />
              <Route path="/contact" element={<Contact/>} />
            </Routes>
            <Footer />
          </Router>
        </SidebarProvider>
      </CartProvider>
    </ProductProvider>
  );
};

export default App;
