import React, { useState, useEffect } from 'react';
import '../Styles/Slider.css';
import Slide1 from '../Assets/banner-1-1.webp';
import Slide2 from '../Assets/banner-1.webp';
import Slide3 from '../Assets/banner-2-1.webp';

const images = [
  Slide1,
  Slide2,
  Slide3,
];

const Slider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // تغییر اسلاید هر 3 ثانیه
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slider-container">
      <div className="slider-wrapper" style={{ transform: `translateX(-${activeIndex * 85}%)` }}>
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index}`}
            className="slide"
          />
        ))}
      </div>
      <div className="indicators">
        {images.map((_, index) => (
          <span
            key={index}
            className={`indicator ${index === activeIndex ? 'active' : ''}`}
            onClick={() => setActiveIndex(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Slider;
