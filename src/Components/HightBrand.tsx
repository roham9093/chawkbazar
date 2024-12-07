import React from 'react';
import "../Styles/HightBrand.css";
import br1 from "../Assets/br1.jpg"
import br2 from "../Assets/br2.jpg"

import l1 from "../Assets/blaze-fashion.png"
import l2 from "../Assets/clothingegy.png"
import l3 from "../Assets/clothingtastic.png"
import l4 from "../Assets/club-shoes.png"
import l5 from "../Assets/elegance.png"
import l6 from "../Assets/fashadil.png"
import l7 from "../Assets/fashnetic.png"
import l8 from "../Assets/fusion.png"
import l9 from "../Assets/hoppister.png"
import l10 from "../Assets/hunter-shoes.png"
import l11 from "../Assets/pop-clothing.png"
import l12 from "../Assets/sholy.png"
import l13 from "../Assets/shoozly.png"
import l14 from "../Assets/shosio.png"
import l15 from "../Assets/shovia.png"
import l16 from "../Assets/tyrant.png"

const brands = [
  { id: 1, bgImage: br1, logo: l1 },
  { id: 2, bgImage: br2, logo: l2 },
  { id: 3, bgImage: br1, logo: l3 },
  { id: 4, bgImage: br2, logo: l4 },
  { id: 5, bgImage: br1, logo: l5 },
  { id: 6, bgImage: br2, logo: l6 },
  { id: 7, bgImage: br1, logo: l7 },
  { id: 8, bgImage: br2, logo: l8 },
  { id: 9, bgImage: br1, logo: l9 },
  { id: 10, bgImage: br2, logo: l10 },
  { id: 11, bgImage: br1, logo: l11 },
  { id: 12, bgImage: br2, logo: l12 },
  { id: 13, bgImage: br1, logo: l13 },
  { id: 14, bgImage: br2, logo: l14 },
  { id: 15, bgImage: br1, logo: l15 },
  { id: 16, bgImage: br2, logo: l16 },
];

const HightBrand = () => {
  return (
    <div className="hightbrand-container">
      <h2 className="hightbrand-title">برندهای برتر</h2>
      <div className="hightbrand-grid">
        {brands.map((brand) => (
          <div className="hightbrand-box" key={brand.id}>
            <img src={brand.bgImage} alt={`Background ${brand.id}`} className="background-img" />
            <img src={brand.logo} alt={`Logo ${brand.id}`} className="center-logo" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HightBrand;
