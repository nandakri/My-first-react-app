// Shirts.js
import React, { useState } from 'react';
import Shirts1 from './Shirts1';
import Navbar from '../navbar/Navbar';
import Cart from '../cart/Cart';

const Shirts = () => {
  // Dummy cart data for testing
  const [cart, setCart] = useState([
    { id: 1, title: 'Blue Shirt', price: 20, quantity: 1 },
    { id: 2, title: 'Red Shirt', price: 25, quantity: 1 },
  ]);

  // Function to add items to the cart (can be removed later)
  const addToCartFunction = (item) => {
    setCart(prevCart => [...prevCart, item]);
    console.log('Item added to cart:', item);
  };

  return (
    <div>
      <Navbar />
      <Shirts1 addToCart={addToCartFunction} />
      {/* Pass cart state to Cart component */}
      <Cart cart={cart} />
    </div>
  );
}

export default Shirts;
  