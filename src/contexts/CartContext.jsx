import React, { createContext, useState, useEffect, useMemo } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    // Initialize cart from localStorage if available
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // Calculate total price using useMemo for performance optimization
  const total = useMemo(() => {
    return cart.reduce((acc, item) => acc + item.price * item.amount, 0);
  }, [cart]);

  // Calculate total item amount using useMemo
  const itemAmount = useMemo(() => {
    return cart.reduce((acc, item) => acc + item.amount, 0);
  }, [cart]);

  // Update localStorage whenever cart changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product, id) => {
    const itemInCart = cart.find((item) => item.id === id);

    if (itemInCart) {
      // Update the existing item quantity
      const updatedCart = cart.map((item) =>
        item.id === id ? { ...item, amount: item.amount + 1 } : item
      );
      setCart(updatedCart);
    } else {
      // Add new item to the cart
      const newItem = { ...product, amount: 1 };
      setCart([...cart, newItem]);
    }
  };

  const removeFromCart = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
  };

  const increaseAmount = (id) => {
    const updatedCart = cart.map((item) =>
      item.id === id ? { ...item, amount: item.amount + 1 } : item
    );
    setCart(updatedCart);
  };

  const decreaseAmount = (id) => {
    const item = cart.find((item) => item.id === id);

    if (item.amount > 1) {
      const updatedCart = cart.map((item) =>
        item.id === id ? { ...item, amount: item.amount - 1 } : item
      );
      setCart(updatedCart);
    } else {
      // Remove the item if the amount is 1
      removeFromCart(id);
    }
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        increaseAmount,
        decreaseAmount,
        clearCart,
        total,
        itemAmount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
