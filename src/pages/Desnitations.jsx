import destinationHead from "../assets/images/blog-title-img-2.jpg"
import React,{Routes} from "react";
import "../assets/styles/destination.css"
import DestinationContain from "../components/DestinationContain";
import Person1 from "../assets/images/person1.jpg";
import DesttinationImage1 from "../assets/images/blog-img-20.jpg"
import DesttinationImage2 from "../assets/images/desHill.jpg"
import DesttinationImage3 from "../assets/images/city.jpg"
import DesttinationImage4 from "../assets/images/blog-img-21.jpg"

import HillDestination from "./HillDestination";
import CityDestinations from "./CityDestinations";
import ForestDestination from "./ForestDestination";

import Footer from "../components/Footer";
import {Link, Route} from "react-router-dom";
import SeaDestination from "./SeaDestination";
import {destinationData} from "../utils/data";
function Desnitations(props){
    return (
        <div>
            <h1>preaparing this page</h1>
            <header className="destinationHeadImage ">
                <img className="desHead" src={destinationHead}  />
            </header>
            <main className="desPage ">



                {destinationData.map((data, index) => (
                    <React.Fragment key={index}>
                        <DestinationContain data={data}/>
                    </React.Fragment>
                ))}
                < Footer/>

            </main>
        </div>
    )
}
export default Desnitations;