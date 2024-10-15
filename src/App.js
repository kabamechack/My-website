import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Menu from './pages/Menu';
import About from './pages/About';
import Login from './pages/Login';
import Contact from './pages/Contact';
import Cart from './components/Cart';
import Testimonials from './components/Testimonials'; 
import Footer from './components/Footer'; 

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  const removeFromCart = (itemId) => {
    setCartItems(cartItems.filter(item => item.id !== itemId));
  };

  return (
    <Router>
      <Navbar cartCount={cartItems.length} />
      <Routes>
        <Route path="/" element={<><Home /><Testimonials /></>} />
        <Route path="/menu" element={<><Menu addToCart={addToCart} /><Testimonials /></>} />
        <Route path="/about" element={<><About /><Testimonials /></>} />
        <Route path="/contact" element={<><Contact /><Testimonials /></>} />
        <Route path="/login" element={<><Login /><Testimonials /></>} />
        <Route path="/cart" element={<><Cart cartItems={cartItems} removeFromCart={removeFromCart} /><Testimonials /></>} />
      </Routes>
      <Footer /> {/* Place Footer here at the bottom */}
    </Router>
  );
}

export default App;
