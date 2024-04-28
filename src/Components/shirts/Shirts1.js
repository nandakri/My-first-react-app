// Shirts1.js
import React from 'react';
import '../Styles.css';

const Shirts1 = ({ addToCart }) => {
  const shirts = [
    { id: 1, title: 'Blue Shirt', price: 20, img: 'blue_shirt.jpg' },
    { id: 2, title: 'Red Shirt', price: 25, img: 'red_shirt.jpg' },
    { id: 3, title: 'Green Shirt', price: 22, img: 'green_shirt.jpg' },
  ];

  const handleAddToCart = (item) => {
    const { title, price, img } = item;
    const newItem = { title, price, img };
    console.log('Item to be added to cart:', newItem); // Log the item
    addToCart(newItem); // Call the addToCart function
    console.log('Add to Cart button clicked!');
  };

  return (
    <div className='aggg'>
      <div className="shirts-container">
        <h2>Available Shirts</h2>
        <div className="shirt-list">
          {shirts.map((shirt) => (
            <div className="shirt" key={shirt.id}>
              <img src={shirt.img} alt={shirt.title} />
              <p>{shirt.title}</p>
              <p>Price: Rs - {shirt.price}</p>
              {/* Ensure that handleAddToCart is called onClick */}
              <button onClick={() => handleAddToCart(shirt)}>Add to Cart</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shirts1;
