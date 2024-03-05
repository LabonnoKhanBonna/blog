
import React from "react";
import '/home/labonno/projects/blog/src/assets/styles/card.css';
function Card(props) {
    const { imageSrc, title, description  } = props.data;

    return (
        <div className="fullCard">
            <div className="card">
                <img src={imageSrc} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">
                        {description}
                    </p>
                    <button type="button" className="Cardbtn btn btn-outline-warning">Read More</button>

                </div>
            </div>
        </div>
    );
}

export default Card;