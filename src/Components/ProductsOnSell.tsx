import React from "react";
import "../Styles/ProductsOnSell.css";

import picRight from "../Assets/women.webp";
import picLeft from "../Assets/men.webp";

const ProductsOnSell = () => {
  return (
    <div className="container-pos">
      <div className="box-pos left-pos">
        <img src={picLeft} alt="Left" className="box-image-pos" />
        <div className="button-pos bottom-right-pos">#انحصاری مردانه</div>
      </div>
      <div className="box-pos right-pos">
        <img src={picRight} alt="Right" className="box-image-pos" />
        <div className="button-pos bottom-left-pos">#انحصاری زنانه</div>
      </div>
    </div>
  );
};

export default ProductsOnSell;
