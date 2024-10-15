import React, { useState } from 'react';
import './Testimonials.css'; 
import custom1 from '../assets/custom1.png'; 
import custom2 from '../assets/custom2.png'; 
import custom3 from '../assets/custom3.png'; 
import { FaStar } from 'react-icons/fa';

const Testimonials = () => {
  const [userRatings, setUserRatings] = useState([
    { id: 1, stars: 0 },
    { id: 2, stars: 0 },
    { id: 3, stars: 0 },
  ]);

  const handleRating = (testimonialId, rating) => {
    setUserRatings(prevRatings =>
      prevRatings.map(r =>
        r.id === testimonialId ? { ...r, stars: rating } : r
      )
    );
  };

  return (
    <div className="testimonials-container">
      <h2>What Our Customer Say</h2>
      <div className="testimonials">
        <div className="testimonial">
          <img src={custom1} alt="Customer 1" className="customer-image" />
          <p className="customer-review">Amazing food and great service. The ambiance is just perfect. Highly recommended!</p>
          <div className="star-rating">
            {[...Array(5)].map((_, index) => (
              <FaStar
                key={index}
                className={index < userRatings[0].stars ? "star selected" : "star"}
                onClick={() => handleRating(1, index + 1)}
              />
            ))}
          </div>
          <p className="customer-name">John Doe</p>
        </div>
        <div className="testimonial">
          <img src={custom2} alt="Customer 2" className="customer-image" />
          <p className="customer-review">The best dining experience I've ever had. The flavors were exquisite!</p>
          <div className="star-rating">
            {[...Array(5)].map((_, index) => (
              <FaStar
                key={index}
                className={index < userRatings[1].stars ? "star selected" : "star"}
                onClick={() => handleRating(2, index + 1)}
              />
            ))}
          </div>
          <p className="customer-name">Jane Smith</p>
        </div>
        <div className="testimonial">
          <img src={custom3} alt="Customer 3" className="customer-image" />
          <p className="customer-review">A perfect blend of traditional and modern tastes. The desserts were a highlight!</p>
          <div className="star-rating">
            {[...Array(5)].map((_, index) => (
              <FaStar
                key={index}
                className={index < userRatings[2].stars ? "star selected" : "star"}
                onClick={() => handleRating(3, index + 1)}
              />
            ))}
          </div>
          <p className="customer-name">Emily Johnson</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
