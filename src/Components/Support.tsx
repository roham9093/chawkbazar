import React from "react";
import "../Styles/Support.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import support from "../Assets/support.webp"
import { faComment } from "@fortawesome/free-solid-svg-icons";

const Support = () => {
    return (
        <div className="support-container">
            <h1 className="support-header">با یک انسان واقعی صحبت کنید</h1>
            <p className="support-description">
                تردید دارید؟ سوالی دارید؟ به توصیه نیاز دارید؟ خدمات اعضا همیشه آماده کمک هستند. به ما پیام دهید.
            </p>
            <img
                className="support-image"
                src={support}
                alt="پشتیبانی"
            />
            <button className="support-button">
                <FontAwesomeIcon className="support-icon" icon={faComment} />
                چت با خدمات اعضا
            </button>
        </div>
    );
};

export default Support;
