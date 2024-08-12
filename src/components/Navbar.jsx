import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaSearch, FaShoppingCart, FaBars } from 'react-icons/fa';
import './Navbar.css';

const Navbar = ({ cartItems, removeFromCart }) => {
  const [searchVisible, setSearchVisible] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartVisible, setCartVisible] = useState(false);

  const toggleSearch = () => {
    setSearchVisible(!searchVisible);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleCart = () => {
    setCartVisible(!cartVisible);
  };

  return (
    <nav className='navbar'>
      <div className='navbar-logo'>
        <Link to="/">M-Food's</Link>
      </div>
      <div className='navbar-center'>
        <ul className={`navbar-links ${menuOpen ? 'show' : ''}`}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/menu">Menu</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>
      <div className="navbar-icons">
        {searchVisible && (
          <form onSubmit={(e) => e.preventDefault()} className="search-form">
            <input
              type="text"
              className="search-input"
              placeholder="Search..."
              autoFocus
            />
          </form>
        )}
        <FaSearch className="navbar-icon" onClick={toggleSearch} />
        <div className="cart-container">
          <FaShoppingCart className="navbar-icon cart-icon" onClick={toggleCart} />
          {cartVisible && (
            <div className="cart-dropdown">
              {cartItems.length === 0 ? (
                <p>Your cart is empty</p>
              ) : (
                <ul>
                  {cartItems.map((item, index) => (
                    <li key={index}>
                      {item.name} - ${item.price}
                      <button onClick={() => removeFromCart(index)}>Remove</button>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )}
        </div>
        <Link to="/login" className="login-button">Login</Link>
        <FaBars className="navbar-icon hamburger-icon" onClick={toggleMenu} />
      </div>
    </nav>
  );
}

export default Navbar;
