import React from 'react';
import './About.css';
import chicken from '../assets/BlackChicken.png'; 
import Footer from '../components/Footer'; 

const About = () => {
  return (
    <div className="page-container">
      <div className="about-container">
        <div className="about-image">
          <img src={chicken} alt="About Us" />
        </div>
        <div className="about-content">
          <h1>OVERVIEW</h1>
          <h2>A Little Information for Our Guest</h2>
          <p>We welcome our guests with open arms and provide the best service possible. Here we attach a brief data about our Wistara Coffee, known for its exceptional taste and quality.</p>
          <div className="about-stats">
            <div className="stat">
              <h3>15k+</h3>
              <p>Happy Customers</p>
            </div>
            <div className="stat">
              <h3>10+</h3>
              <p>Award Wins</p>
            </div>
            <div className="stat">
              <h3>30+</h3> {/* Corrected closing tag */}
              <p>Food Menu Items</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About;
