import React from 'react';
import { Link } from 'react-router-dom';
import { FaSearch, FaShoppingCart } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='navbar-logo'>
        <Link to="/">Foodie's</Link>
      </div>
      <ul className='navbar-links'>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/menu">Menu</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        {/* <li><Link to="/facility">Facility</Link></li> */}

      </ul>
      <div className='navbar-icons'>
        <FaSearch className="navbar-icon" />
        <FaShoppingCart className="navbar-icon" />
        <Link to="/login" className="login-button">Login</Link>
      </div>
    </nav>
  );
}

export default Navbar;
