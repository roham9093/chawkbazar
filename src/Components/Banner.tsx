import React from 'react';
import '../Styles/Banner.css';
import BannerImg3 from '../Assets/banner-3.webp';
import BannerImg2 from '../Assets/banner-2.webp';
import BannerImg1 from '../Assets/banner-1.webp';
import BannerImg4 from '../Assets/banner-4.webp';
import BannerImg5 from '../Assets/banner-5.webp';
import BannerImg6 from '../Assets/banner-6.webp';

const Banner = () => {
  return (
    <div className="banner-container">
      <div className="row  row1">
        <div className="box half">
          <img src={BannerImg1} alt="Image 1" />
        </div>
        <div className="box">
          <img src={BannerImg2} alt="Image 2" />
        </div>
        <div className="box">
          <img src={BannerImg3} alt="Image 3" />
        </div>
      </div>
      <div className="row row1">
        <div className="box ">
          <img src={BannerImg4} alt="Image 4" />
        </div>
        <div className="box">
          <img src={BannerImg5} alt="Image 5" />
        </div>
        <div className="box half">
          <img src={BannerImg6} alt="Image 6" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
