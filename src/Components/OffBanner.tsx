import React from 'react';
import "../Styles/OffBanner.css"; 
// import Banner from "../Assets/banner-3-1.webp"

const OffBanner = ({BannerOff}) => {
  return (
    <div className="offbanner-container">
      <img 
        src={BannerOff}
        alt="بنر تخفیف" 
        className="offbanner-image" 
      />
    </div>
  );
};

export default OffBanner;
