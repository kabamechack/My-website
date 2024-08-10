import React from 'react';
import './Home.css';
import taste from '../assets/taste.avif';
import { FaArrowRight } from 'react-icons/fa';
import Footer from '../components/Footer'; 

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-content-wrapper">
        <div className="home-content">
          <h1>The Taste of Traditions's with a Modern Twist</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Donec ac metus nec lacus consequat aliquam non non est. Suspendisse potenti
          Donec ac metus nec lacus consequat aliquam non non est. Suspendisse potenti
          Donec ac metus nec lacus consequat aliquam non non est. Suspendisse potenti.</p>
          <div className="home-buttons">
            <button className="btn get-started">Get Started</button>
            <button className="btn see-menu">
              See Our Menu <FaArrowRight className="arrow-icon" />
            </button>
          </div>
        </div>
        <div className="home-image">
          <img src={taste} alt="Foodie's Delight" />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
