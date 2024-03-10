import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot,faCalendar, faCompass,faSearch } from '@fortawesome/free-solid-svg-icons';


import "../assets/styles/slidercontainer.css";
function SliderContainer(){
    return (
        <div className="sliderCont">
            <div className="smallBox">
                <p className="inputP">
                    <FontAwesomeIcon icon={faLocationDot}/> <input className="input" type="text" placeholder="where to? " />
                </p>
            </div>
            <div className="smallBox">
                <p>
                    <FontAwesomeIcon icon={faCalendar}/> <select
                    className="select">
                    <option selected>Month</option>
                    <option value="1">January</option>
                    <option value="2">February</option>
                    <option value="3">March</option>
                    <option value="1">April</option>
                    <option value="2">June</option>
                    <option value="3">July</option>
                    <option value="1">August</option>
                    <option value="2">September</option>
                    <option value="3">October</option>
                    <option value="1">November</option>
                    <option value="2">December</option>
                </select>
                </p>
            </div>
            <div className="smallBox">
                <p>
                    <FontAwesomeIcon icon={faCompass}/> Travel Type
                </p>
                <div className="line"></div>
            </div>
            <div className="smallBox">
                <p>
                    <FontAwesomeIcon icon={faSearch}/> Where to?
                </p>
                <div className="line"></div>
            </div>
        </div>
    )
}

export default SliderContainer;