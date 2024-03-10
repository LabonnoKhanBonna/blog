import React, { useState } from "react";
import "../assets/styles/card.css"

function Card(props) {
    const { imageSrc, title, description, details, rounded } = props.data;
    const [showDetails, setShowDetails] = useState(false);
    const [expandedDetails, setExpandedDetails] = useState('');

    const toggleDetails = () => {
        setShowDetails(!showDetails);
        if (!showDetails) {
            setExpandedDetails(description + details);
        }
    };

    return (
        <div className={`shadow-none }`}>
            <div className="card shadow-none">
                <img src={imageSrc} className= {`card-img-top ${rounded=== true ? 'rounded' : ''}`} alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">
                        {showDetails ? expandedDetails : description}
                    </p>
                    <button type="button" className="Cardbtn btn btn-outline-warning" onClick={toggleDetails}>
                        {showDetails ? 'Show Less' : 'Read More'}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Card;
