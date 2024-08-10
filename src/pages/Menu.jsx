import React, { useState } from 'react';
import './Menu.css';
import item1 from '../assets/item1.jpg';
import item2 from '../assets/item2.jpeg';
import item3 from '../assets/item3.jpeg';
import item4 from '../assets/item4.jpg';
import item5 from '../assets/item5.webp';
import item6 from '../assets/item6.webp';
import Footer from '../components/Footer'; 

const Menu = () => {
  const [showMore, setShowMore] = useState(false);

  const handleToggle = () => {
    setShowMore(prevShowMore => !prevShowMore);
  };

  return (
    <div className="page-container">
      <div className="menu-container">
        <h1>Our Menu</h1>
        <div className="menu-items">
          {!showMore && (
            <>
              <div className="menu-item visible">
                <img src={item1} alt="Item 1" className="menu-item-image" />
                <h2>Item 1</h2>
                <p>Description of Item 1</p>
                <p>Price: $10</p>
              </div>

              <div className="menu-item visible">
                <img src={item2} alt="Item 2" className="menu-item-image" />
                <h2>Item 2</h2>
                <p>Description of Item 2</p>
                <p>Price: $15</p>
              </div>

              <div className="menu-item visible">
                <img src={item3} alt="Item 3" className="menu-item-image" />
                <h2>Item 3</h2>
                <p>Description of Item 3</p>
                <p>Price: $20</p>
              </div>

              <div className="menu-item visible">
                <img src={item4} alt="Item 4" className="menu-item-image" />
                <h2>Item 4</h2>
                <p>Description of Item 4</p>
                <p>Price: $20</p>
              </div>
            </>
          )}
          {showMore && (
            <>
              <div className="menu-item visible fade-in">
                <img src={item5} alt="Item 5" className="menu-item-image" />
                <h2>Item 5</h2>
                <p>Description of Item 5</p>
                <p>Price: $25</p>
              </div>

              <div className="menu-item visible fade-in">
                <img src={item6} alt="Item 6" className="menu-item-image" />
                <h2>Item 6</h2>
                <p>Description of Item 6</p>
                <p>Price: $30</p>
              </div>

              <div className="menu-item visible fade-in">
                <img src={item5} alt="Item 5" className="menu-item-image" />
                <h2>Item 5</h2>
                <p>Description of Item 5</p>
                <p>Price: $25</p>
              </div>

              <div className="menu-item visible fade-in">
                <img src={item6} alt="Item 6" className="menu-item-image" />
                <h2>Item 6</h2>
                <p>Description of Item 6</p>
                <p>Price: $30</p>
              </div>
            </>
          )}
        </div>

        <div className="see-more-button-container">
          <button onClick={handleToggle} className="see-more-button">
            {showMore ? 'Previous' : 'See More'}
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Menu;
