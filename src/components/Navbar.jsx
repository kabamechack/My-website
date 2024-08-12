import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaSearch, FaShoppingCart, FaBars } from 'react-icons/fa';
import './Navbar.css';

const Navbar = ({ cartCount }) => {
  const [searchVisible, setSearchVisible] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleSearch = () => {
    setSearchVisible(!searchVisible);
  };

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    console.log('Search query:', searchQuery);
    setSearchVisible(false);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
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
          <form onSubmit={handleSearchSubmit} className="search-form">
            <input
              type="text"
              className="search-input"
              value={searchQuery}
              onChange={handleSearchInputChange}
              placeholder="Search..."
              autoFocus
            />
          </form>
        )}
        <FaSearch className="navbar-icon" onClick={toggleSearch} />
        <Link to="/cart" className="cart-link">
          <FaShoppingCart className="navbar-icon cart-icon" />
          <span className="cart-count">{cartCount}</span>
        </Link>
        <Link to="/login" className="login-button">Login</Link>
        <FaBars className="navbar-icon hamburger-icon" onClick={toggleMenu} />
      </div>
    </nav>
  );
}

export default Navbar;
