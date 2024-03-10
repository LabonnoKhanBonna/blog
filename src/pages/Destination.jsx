import React,{Routes} from "react";
import "../assets/styles/destination.css"
import DestinationContain from "../components/DestinationContain";
import Footer from "../components/Footer";
import headimg from "../assets/images/blog-title-img-2.jpg"
import {destinationData} from "../utils/data";
function Destnitation(){
    return (
        <div>
            <h1>Preparing this page</h1>
            <header className="destinationHeadImage ">
                <img className="desHead" src={headimg}  />
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
export default Destnitation;