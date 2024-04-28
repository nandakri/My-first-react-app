// Cart.js
import React from 'react';

const Cart = ({ cart }) => {
  // Use nullish coalescing operator to ensure cart is always an array
  const cartItems = cart ?? [];

  return (
    <div>
      <h2>Cart</h2>
      {cartItems.length > 0 ? (
        <div>
          {cartItems.map((item, index) => (
            <div key={index}>
              <p>{item.title}: {item.quantity} x ${item.price}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  );
};

export default Cart;
