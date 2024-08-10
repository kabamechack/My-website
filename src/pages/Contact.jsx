import React from 'react';
import './Contact.css';
import contactImage from '../assets/contactImage.png'; 
import Footer from '../components/Footer'; 

const Contact = () => {
  return (
    <div className="page-container">
      <div className="contact-container">
        <h1 className="contact-title">Visit us or call us today</h1>
        <div className="contact-content">
          <div className="contact-details">
            <h2>Opening Hours</h2>
            <p>Monday - Friday: 9:00 AM - 9:00 PM</p>
            <p>Saturday: 10:00 AM - 8:00 PM</p>
            <p>Sunday: Closed</p>
            <p><a href="mailto:kabamechack@gmail.com">kabamechack@gmail.com</a></p>
            
            <form className="contact-form">
              <input type="text" placeholder="Name" required />
              <input type="email" placeholder="Email" required />
              <textarea placeholder="Message" required></textarea>
              <button type="submit">Submit</button>
            </form>
          </div>
          <div className="contact-image">
            <img src={contactImage} alt="Contact Us" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
