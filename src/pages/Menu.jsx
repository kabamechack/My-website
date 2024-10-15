import React, { useState } from 'react';
import './Menu.css';
import item1 from '../assets/item1.jpg';
import item2 from '../assets/item2.jpeg';
import item3 from '../assets/item3.jpeg';
import item4 from '../assets/item4.jpg';
import item5 from '../assets/item5.webp';
import item6 from '../assets/item6.webp';

const Menu = ({ addToCart }) => {
  const [showMore, setShowMore] = useState(false);

  const handleToggle = () => {
    setShowMore(prevShowMore => !prevShowMore);
  };

  const menuItems = [
    { id: 1, name: 'Item 1', description: 'Description of Item 1', price: 10, image: item1 },
    { id: 2, name: 'Item 2', description: 'Description of Item 2', price: 15, image: item2 },
    { id: 3, name: 'Item 3', description: 'Description of Item 3', price: 20, image: item3 },
    { id: 4, name: 'Item 4', description: 'Description of Item 4', price: 20, image: item4 },
    { id: 5, name: 'Item 5', description: 'Description of Item 5', price: 25, image: item5 },
    { id: 6, name: 'Item 6', description: 'Description of Item 6', price: 30, image: item6 },
  ];

  const initialItems = menuItems.slice(0, 4);
  const moreItems = menuItems.slice(4);

  return (
    <div className="page-container">
      <div className="menu-container">
        <h1>Our Menu</h1>
        <div className="menu-items">
          {!showMore && initialItems.map(item => (
            <div key={item.id} className="menu-item visible">
              <img src={item.image} alt={item.name} className="menu-item-image" />
              <h2>{item.name}</h2>
              <p>{item.description}</p>
              <p>Price: ${item.price}</p>
              <button className="add-to-cart-button" onClick={() => addToCart(item)}>Add to Cart</button>
            </div>
          ))}
          {showMore && moreItems.map(item => (
            <div key={item.id} className="menu-item visible fade-in">
              <img src={item.image} alt={item.name} className="menu-item-image" />
              <h2>{item.name}</h2>
              <p>{item.description}</p>
              <p>Price: ${item.price}</p>
              <button className="add-to-cart-button" onClick={() => addToCart(item)}>Add to Cart</button>
            </div>
          ))}
        </div>
        <div className="see-more-button-container">
          <button onClick={handleToggle} className="see-more-button">
            {showMore ? 'Previous' : 'See More'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Menu;
