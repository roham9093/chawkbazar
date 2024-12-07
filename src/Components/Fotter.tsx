import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faPhone, faEnvelope, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import "../Styles/Fotter.css";

const Fotter = () => {
  return (
    <footer className="footer-container">
      <div className="footer-column">
        <h3>شبکه‌های اجتماعی</h3>
        <ul>
          <li>
            <FontAwesomeIcon icon={faFacebook} /> فیسبوک
          </li>
          <li>
            <FontAwesomeIcon icon={faTwitter} /> توییتر
          </li>
          <li>
            <FontAwesomeIcon icon={faInstagram} /> اینستاگرام
          </li>
          <li>
            <FontAwesomeIcon icon={faYoutube} /> یوتیوب
          </li>
        </ul>
      </div>
      <div className="footer-column">
        <h3>تماس با ما</h3>
        <ul>
          <li>
            <FontAwesomeIcon icon={faPhone} /> 021-12345678
          </li>
          <li>
            <FontAwesomeIcon icon={faEnvelope} /> email@example.com
          </li>
          <li>
            <FontAwesomeIcon icon={faMapMarkerAlt} /> آدرس: تهران، خیابان مثال
          </li>
        </ul>
      </div>
      <div className="footer-column">
        <h3>درباره ما</h3>
        <ul>
          <li>تاریخچه</li>
          <li>تیم ما</li>
          <li>فرهنگ سازمانی</li>
        </ul>
      </div>
      <div className="footer-column">
        <h3>خدمات مشتریان</h3>
        <ul>
          <li>پشتیبانی</li>
          <li>سوالات متداول</li>
          <li>بازگشت کالا</li>
        </ul>
      </div>
      <div className="footer-column">
        <h3>اطلاعات ما</h3>
        <ul>
          <li>قوانین و مقررات</li>
          <li>حریم خصوصی</li>
          <li>شرایط استفاده</li>
        </ul>
      </div>
      <div className="footer-column">
        <h3>دسته‌بندی‌های برتر</h3>
        <ul>
          <li>الکترونیک</li>
          <li>لباس</li>
          <li>کتاب</li>
        </ul>
      </div>
    </footer>
  );
};

export default Fotter;
