import {Link, Route} from "react-router-dom";
import React, {useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faAngleDown, faDownload, faFaceAngry, faSearch} from '@fortawesome/free-solid-svg-icons';

import "../assets/styles/detinationContainer.css"
import Desnitations from "../pages/Desnitations";

function DestinationContain(props){
    const { imageSrc,heading ,  details, path } = props.data;


    return(
        <div className="desMainContainer ">
            <div className="desContain" >
                <div className="desCard">
                    <img className="desImage" src={imageSrc} /> </div>
                <Link to={path}>
                    <h1 className="desCardTitle py-3 text-info-emphasis">{heading}</h1>
                </Link>
                    <p className="desCardPara">{details}</p>
                    <h5 className="card-subtitle mb-2 text-black"><FontAwesomeIcon icon={faSearch}/> <FontAwesomeIcon icon={faFaceAngry} /> <FontAwesomeIcon icon={faDownload
                    } /> </h5>

            </div>
        </div>
    )
}

export default DestinationContain;