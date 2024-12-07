import React from "react";
import "../Styles/SpecialProducts.css";
import pic1 from "../Assets/1.webp";
import pic2 from "../Assets/2.webp";
import pic3 from "../Assets/3.webp";
import pic4 from "../Assets/4.webp";
import pic5 from "../Assets/5.webp";

const SpecialProducts = () => {
    const products = [
        {
          id: 1,
          image: pic1,
          name: "کیف چرم طبیعی",
          description: "کیف دستی ساخته شده از چرم طبیعی با کیفیت بالا",
          originalPrice: "1,200,000 تومان",
          discountedPrice: "900,000 تومان",
          discount: 25,
        },
        {
          id: 2,
          image: pic5,
          name: "ساعت مچی کلاسیک",
          description: "ساعت مچی لوکس با طراحی کلاسیک و بند چرمی",
          originalPrice: "1,800,000 تومان",
          discountedPrice: "1,350,000 تومان",
          discount: 25,
        },
        {
          id: 3,
          image: pic4,
          name: "عینک آفتابی مدرن",
          description: "عینک آفتابی با فریم فلزی و شیشه ضد UV",
          originalPrice: "600,000 تومان",
          discountedPrice: "450,000 تومان",
          discount: 25,
        },
        {
          id: 4,
          image: pic2,
          name: "کلاه بافتنی زمستانی",
          description: "کلاه بافتنی گرم و نرم برای فصول سرد سال",
          originalPrice: "200,000 تومان",
          discountedPrice: "150,000 تومان",
          discount: 25,
        },
        {
          id: 5,
          image: pic3,
          name: "کتانی اسپرت راحتی",
          description: "کتانی مناسب پیاده‌روی و ورزش با طراحی ارگونومیک",
          originalPrice: "850,000 تومان",
          discountedPrice: "600,000 تومان",
          discount: 30,
        },
      ];
      

  return (
    <div className="special-products">
      <h2 className="section-title">محصولات ویژه</h2>
      <div className="products-container">
        <div className="large-box">
          <img src={products[0].image} alt={products[0].name} />
          <div className="product-info">
            <h3>{products[0].name}</h3>
            <p>{products[0].description}</p>
            <div className="prices">
              <span className="original-price">{products[0].originalPrice}</span>
              <span className="discounted-price">{products[0].discountedPrice}</span>
            </div>
          </div>
          <span className="discount-badge">{products[0].discount}% تخفیف</span>
        </div>
        <div className="small-boxes">
          {products.slice(1).map((product) => (
            <div key={product.id} className="small-box">
              <img src={product.image} alt={product.name} />
              <div className="product-info">
                <h4>{product.name}</h4>
                <p>{product.description}</p>
                <div className="prices">
                  <span className="original-price">{product.originalPrice}</span>
                  <span className="discounted-price">{product.discountedPrice}</span>
                </div>
              </div>
              <span className="discount-badge">{product.discount}%</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SpecialProducts;
