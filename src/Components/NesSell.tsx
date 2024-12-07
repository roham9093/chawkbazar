import React from 'react';
import '../Styles/NesSell.css';
import pic1 from '../Assets/p-3.webp';
import pic2 from '../Assets/p-8-md.webp';
import pic3 from '../Assets/p-12-md.webp';
import pic4 from '../Assets/p-14-md.webp';
import pic5 from '../Assets/p-16-md.webp';
import pic6 from '../Assets/p-24-md.webp';
import pic7 from '../Assets/p-25-md.webp';
import pic8 from '../Assets/p-26-md.webp';
import pic9 from '../Assets/p-27-md.webp';
import pic10 from '../Assets/p-30-md.webp';

const NesSell = () => {
    const products = [
        { id: 1, name: 'پیراهن مردانه', description: 'پیراهن رسمی نخی، مناسب برای مهمانی‌ها', price: '۲۵۰,۰۰۰ تومان', image: pic1 },
        { id: 2, name: 'شلوار جین', description: 'شلوار جین کشی، مناسب برای استفاده روزمره', price: '۳۲۰,۰۰۰ تومان', image: pic2 },
        { id: 3, name: 'بلوز زنانه', description: 'بلوز نخی با طرح گلدار، مناسب برای تابستان', price: '۱۸۰,۰۰۰ تومان', image: pic3 },
        { id: 4, name: 'کت تک مردانه', description: 'کت رسمی با پارچه ضدچروک', price: '۴۵۰,۰۰۰ تومان', image: pic4 },
        { id: 5, name: 'کاپشن زنانه', description: 'کاپشن ضدآب و گرم برای زمستان', price: '۶۵۰,۰۰۰ تومان', image: pic5 },
        { id: 6, name: 'تی‌شرت بچگانه', description: 'تی‌شرت طرح دار، مناسب برای کودکان', price: '۱۰۰,۰۰۰ تومان', image: pic6 },
        { id: 7, name: 'مانتو زنانه', description: 'مانتو پاییزی شیک با طراحی ساده', price: '۳۸۰,۰۰۰ تومان', image: pic7 },
        { id: 8, name: 'شلوارک مردانه', description: 'شلوارک نخی خنک، مناسب برای تابستان', price: '۱۳۰,۰۰۰ تومان', image: pic8 },
        { id: 9, name: 'روسری ابریشمی', description: 'روسری سبک با طرح مدرن', price: '۱۵۰,۰۰۰ تومان', image: pic9 },
        { id: 10, name: 'کتانی اسپرت', description: 'کتانی سبک برای دویدن و ورزش', price: '۴۲۰,۰۰۰ تومان', image: pic10 },
    ];

    return (
        <>
            <div className="title">
                <p className="title-left">فروش فوری</p>
                <p className="title-right">وقت تمام شد !</p>
            </div>

            <div className="nes-sell-container">
                {products.map((product) => (
                    <div key={product.id} className="product-card">
                        <div className="frame-image">
                            <img src={product.image} alt={product.name} className="product-image" />
                        </div>
                        <h3 className="product-name">{product.name}</h3>
                        <p className="product-description">{product.description}</p>
                        <p className="product-price">{product.price}</p>
                    </div>
                ))}
            </div>
        </>

    );
};

export default NesSell;
