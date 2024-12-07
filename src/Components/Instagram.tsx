import React from "react";
import "../Styles/Instagram.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

import model1 from "../Assets/model.jpg";
import model2 from "../Assets/model2.jpg";

const images = [
    model1,
    model2,
    model1,
    model2,
    model1,
    model2,
];

const Instagram = () => {
    return (
        <div className="instagram-grid">
            {images.map((image, index) => (
                <div key={index} className="instagram-box">
                    <img src={image} alt={`Instagram ${index + 1}`} className="instagram-image" />
                    <FontAwesomeIcon className="instagram-icon" icon={faInstagram} />
                </div>
            ))}
        </div>
    );
};

export default Instagram;
