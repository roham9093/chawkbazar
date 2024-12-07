
import { createContext } from 'react';
import './App.css';
import Banner from './Components/Banner.tsx';
import Header from './Components/Header.tsx';
import HightBrand from './Components/HightBrand.tsx';
import NesSell from './Components/NesSell.tsx';
import OffBanner from './Components/OffBanner.tsx';
import Slider from './Components/Slider.tsx';
import SpecialProducts from './Components/SpecialProducts.tsx';
import BannerOff2 from "./Assets/banner-4-1.webp"
import BannerOff1 from "./Assets/banner-3-2.webp"
import ProductsOnSell from './Components/ProductsOnSell.tsx';
import Support from './Components/Support.tsx';
import Instagram from './Components/Instagram.tsx';
import Fotter from './Components/Fotter.tsx';

function App() {
  return (
    <div>
      {/* بخش سرصفحه */}
      <header className="sticky-top">
        <Header />
      </header>

      {/* محتوای اصلی */}
      <main className="container-fluid">
        <section id="banner" className="mb-5">
          <Banner />
        </section>

        <section id="nes-sell" className="mb-5">
          <NesSell />
        </section>

        <section id="slider" className="mb-5">
          <Slider />
        </section>

        <section id="special-products" className="mb-5">
          <SpecialProducts />
        </section>

        <section id="off-banner" className="mb-5">
          <OffBanner BannerOff={BannerOff1} />
        </section>
        
        <section id="hight-brand" className="mb-5">
          <HightBrand/>
        </section>

        <section id="off-banner" className="mb-5">
          <OffBanner BannerOff={BannerOff2}/>
        </section>

        <section id="products-on-sell" className="mb-5">
          <ProductsOnSell/>
        </section>

        <section id="support" className="mb-5">
          <Support/>
        </section>

        <section id="instagram" className="mb-5">
          <Instagram/>
        </section>

      </main>

      {/* بخش پایین صفحه */}
      <footer className="text-center  py-3 mt-6">
        <Fotter/>
        <p className='text-muted'>&copy; 2024 تمامی حقوق محفوظ است.</p>
      </footer>
    </div>

  );
}

export default App;
