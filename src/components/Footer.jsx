import React from 'react';
import './Footer.css';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-columns">
        <div className="footer-column">
          <h3>Location</h3>
          <div className="footer-map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509377!2d144.95373631568056!3d-37.8162797420149!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf0727d6a4b4f9f6d!2s123+Main+Street%2C+Anytown%2C+USA!5e0!3m2!1sen!2sus!4v1614764533714!5m2!1sen!2sus"
              width="100%"
              height="150"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Location Map"
            ></iframe>
          </div>
        </div>

        <div className="footer-column">
          <h3>Address</h3>
          <p>50 Doris St Berea</p>
          <p>City of Johannesburg</p>
          <p>South Africa</p>


        </div>

        <div className="footer-column">
          <h3>Details</h3>
          <p>Menu</p>

        </div>

        <div className="footer-column">
          <h3>Contact Us</h3>
          <p>+1 (234) 567-8901</p>
          <p>info@foodiesdelight.com</p>

        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-copyright">
          <p>&copy; 2024 Foodie's Delight. All Rights Reserved.</p>
        </div>
        <div className="footer-social">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebookF />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedinIn />
          </a>
          <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
            <FaYoutube />
          </a>
          <a href="https://www.whatsapp.com" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
