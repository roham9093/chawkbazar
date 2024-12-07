import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faShoppingCart, faBars, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import "../Styles/Header.css";
import Logo from "../Assets/logo.svg";

const Header = () => {
  return (
    <header className="header container-fluid p-3">
      {/* لوگو */}
      <div className="logo">
        <img src={Logo} alt="Logo" />
      </div>

      {/* دکمه همبرگر برای موبایل */}
      <button
        className="hamburger d-lg-none btn btn-outline-secondary"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#mobileMenu"
        aria-controls="mobileMenu"
      >
        <FontAwesomeIcon icon={faBars} />
      </button>

      {/* منو */}
      <nav className="navbar d-none d-lg-flex">
        <ul className="menu">
          <li>خانه</li>

          <li className="menu-item">
            محصولات <FontAwesomeIcon className='rotateIcon' icon={faChevronDown} />
            {/* زیرمنو */}
            <ul className="submenu">

              {/* محصولات مربوط به هر کتگوری */}
              <div className="submenu-products">
                {/* محصولات زنانه */}
                <div className="submenu-category-products">
                  <h5 className="category-title">زنانه</h5>
                  <div className="submenu-product">
                    <p>پیراهن زنانه</p>
                  </div>
                  <div className="submenu-product">
                    <p>دامن زنانه</p>
                  </div>
                  <div className="submenu-product">
                    <p>کفش زنانه</p>
                  </div>
                  <div className="submenu-product">
                    <p>عینک زنانه</p>
                  </div>
                  <div className="submenu-product">
                    <p>کیف زنانه</p>
                  </div>
                </div>

                {/* محصولات مردانه */}
                <div className="submenu-category-products">
                  <h5 className="category-title">مردانه</h5>
                  <div className="submenu-product">
                    <p>پیراهن مردانه</p>
                  </div>
                  <div className="submenu-product">
                    <p>شلوار مردانه</p>
                  </div>
                  <div className="submenu-product">
                    <p>کفش مردانه</p>
                  </div>
                </div>

                {/* محصولات کودکانه */}
                <div className="submenu-category-products">
                  <h5 className="category-title">کودکانه</h5>
                  <div className="submenu-product">
                    <p>پیراهن کودکانه</p>
                  </div>
                  <div className="submenu-product">
                    <p>پلیور کودکانه</p>
                  </div>
                  <div className="submenu-product">
                    <p>شلوار کودکانه</p>
                  </div>
                </div>

                {/* محصولات لباس خواب */}
                <div className="submenu-category-products">
                  <h5 className="category-title">لباس خواب</h5>
                  <div className="submenu-product">
                    <p>پیراهن خواب زنانه</p>
                  </div>
                  <div className="submenu-product">
                    <p>پوشش خواب مردانه</p>
                  </div>
                  <div className="submenu-product">
                    <p>لباس خواب کودکانه</p>
                  </div>
                  <div className="submenu-product">
                    <p>لباس خواب ساتن</p>
                  </div>
                  <div className="submenu-product">
                    <p>لباس خواب ابریشمی</p>
                  </div>
                </div>

                {/* محصولات ورزشی */}
                <div className="submenu-category-products">
                  <h5 className="category-title">ورزشی</h5>
                  <div className="submenu-product">
                    <p>لباس ورزشی زنانه</p>
                  </div>
                  <div className="submenu-product">
                    <p>لباس ورزشی مردانه</p>
                  </div>
                  <div className="submenu-product">
                    <p>کفش ورزشی زنانه</p>
                  </div>
                  <div className="submenu-product">
                    <p>کفش ورزشی مردانه</p>
                  </div>
                  <div className="submenu-product">
                    <p>لباس ورزشی کودکانه</p>
                  </div>
                  <div className="submenu-product">
                    <p>دستکش ورزشی</p>
                  </div>
                  <div className="submenu-product">
                    <p>جوراب ورزشی</p>
                  </div>
                  <div className="submenu-product">
                    <p>کلاه ورزشی</p>
                  </div>
                  <div className="submenu-product">
                    <p>کمربند ورزشی</p>
                  </div>
                  <div className="submenu-product">
                    <p>شلوار ورزشی مردانه</p>
                  </div>
                </div>
              </div>
            </ul>
          </li>




          <li>درباره ما</li>
          <li>تماس با ما</li>

          <li className="menu-item">
            خدمات ما <FontAwesomeIcon className='rotateIcon' icon={faChevronDown} />
            {/* زیرمنو */}
            <ul className="submenu">

              {/* خدمات مربوط به هر کتگوری */}
              <div className="submenu-products">
                {/* خدمات مشاوره */}
                <div className="submenu-category-products">
                  <h5 className="category-title">مشاوره</h5>
                  <div className="submenu-product">
                    <p>مشاوره خرید محصولات</p>
                  </div>
                  <div className="submenu-product">
                    <p>مشاوره تغذیه</p>
                  </div>
                  <div className="submenu-product">
                    <p>مشاوره مد و استایل</p>
                  </div>
                </div>

                {/* خدمات ارسال */}
                <div className="submenu-category-products">
                  <h5 className="category-title">ارسال</h5>
                  <div className="submenu-product">
                    <p>ارسال رایگان برای خریدهای بالای 500 هزار تومان</p>
                  </div>
                  <div className="submenu-product">
                    <p>ارسال سریع در سراسر کشور</p>
                  </div>
                  <div className="submenu-product">
                    <p>پیگیری آنلاین وضعیت ارسال</p>
                  </div>
                </div>

                {/* خدمات پرداخت */}
                <div className="submenu-category-products">
                  <h5 className="category-title">پرداخت</h5>
                  <div className="submenu-product">
                    <p>پرداخت آنلاین و امن</p>
                  </div>
                  <div className="submenu-product">
                    <p>پرداخت در محل</p>
                  </div>
                  <div className="submenu-product">
                    <p>تسویه اقساطی</p>
                  </div>
                </div>

                {/* خدمات پشتیبانی */}
                <div className="submenu-category-products">
                  <h5 className="category-title">پشتیبانی</h5>
                  <div className="submenu-product">
                    <p>پشتیبانی 24 ساعته</p>
                  </div>
                  <div className="submenu-product">
                    <p>گارانتی بازگشت وجه</p>
                  </div>
                  <div className="submenu-product">
                    <p>پاسخگویی سریع به سوالات</p>
                  </div>
                </div>

                {/* خدمات اختصاصی */}
                <div className="submenu-category-products">
                  <h5 className="category-title">خدمات اختصاصی</h5>
                  <div className="submenu-product">
                    <p>خدمات طراحی شخصی</p>
                  </div>
                  <div className="submenu-product">
                    <p>سرویس VIP</p>
                  </div>
                </div>
              </div>
            </ul>
          </li>



        </ul>
      </nav>


      {/* بخش ورود، جستجو و سبد خرید */}
      <div className="actions d-none d-lg-flex">
        <FontAwesomeIcon icon={faSearch} className="icon" />
        <FontAwesomeIcon icon={faShoppingCart} className="icon" />
        <span className="login">ورود</span>
      </div>

      {/* Offcanvas Menu برای موبایل */}
      <div
        className="offcanvas custom-offcanvas offcanvas-end"
        tabIndex="-1"
        id="mobileMenu"
        aria-labelledby="mobileMenuLabel"
      >
        <div className="offcanvas-header">
          <h5 id="mobileMenuLabel"> </h5>
          <button
            type="button"
            className="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <ul className="menu-mobile">
            <li>خانه</li>
            <li>
              محصولات <FontAwesomeIcon icon={faChevronDown} />
            </li>
            <li>درباره ما</li>
            <li>تماس با ما</li>
          </ul>
          <div className="mt-4 d-flex flex-column align-items-start">
            <div className="search-box d-flex align-items-center w-100">
              <input type="text" placeholder="جستجو..." className="form-control" />
              <FontAwesomeIcon icon={faSearch} className="icon ms-2" />
            </div>
            <button className="btn btn-primary w-100 my-2">سبد خرید</button>
            <button className="btn btn-secondary w-100">ورود</button>
          </div>
        </div>
      </div>

    </header>
  );
};

export default Header;
