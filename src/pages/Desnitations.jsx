import destinationHead from "../assets/images/blog-title-img-2.jpg"
import React from "react";
import "../assets/styles/destination.css"
import DestinationContain from "../components/DestinationContain";
import Person1 from "../assets/images/person1.jpg";
import DesttinationImage1 from "../assets/images/blog-img-20.jpg"
import DesttinationImage2 from "../assets/images/desHill.jpg"
import DesttinationImage3 from "../assets/images/city.jpg"
import DesttinationImage4 from "../assets/images/blog-img-21.jpg"


import Card from "../components/Card";
import Footer from "../components/Footer";
import {Route} from "react-router-dom";
import SeaDestination from "./SeaDestination";
function Desnitations(props){

    const DestinationData = [
        {
            imageSrc: DesttinationImage1,
            heading:"SeaBase Destination",
            details:"The Maldives, Bora Bora in French Polynesia, Santorini in Greece, the" +
                " Amalfi Coast in Italy, the Great Barrier Reef in Australia, Maui in Hawaii, Phuket in Thailand, the Seychelles, Cinque Terre in Italy, and Fiji are some of the most sought-after sea-based destinations worldwide. These destinations boast stunning beaches, crystal-clear waters, vibrant marine life, and breathtaking landscapes. Whether you're seeking luxury resorts, adventurous water sports, or simply relaxation on the beach, these destinations offer unforgettable experiences for travelers of all interests.",
             // path: <Route path="/seadestination" element={<SeaDestination />} />
            path: "/seadestination"
        },
        {
            imageSrc: DesttinationImage2,
            heading:"Hill Based Destination",
            details:"Embark on an adventure to discover the beauty of hill and mountain-based" +
                " destinations around the globe. From the snow-capped peaks of the Swiss Alps to" +
                " the lush forests of Canada's Banff National Park, each destination offers a unique blend of natural wonders and outdoor activities. Whether you're hiking through Nepal's Himalayas or skiing in the Italian Dolomites, these destinations promise unforgettable experiences for every traveler. So pack your bags and get ready to explore the world's most breathtaking landscapes, one mountain at a time.",
            path: "/hilldestination"
        },
        {
            imageSrc: DesttinationImage3,
            heading:"City Based Destination",
            details:
                "Dive into the energy of city life in some of the world's most exciting" +
                " destinations. From the iconic skyline of New York City to the historic charm of Paris, each city offers a unique blend of culture, cuisine, and experiences. Explore the bustling markets of Marrakech, marvel at Dubai's futuristic architecture, or wander through the ancient streets of Rome. Whether it's sampling street food in Bangkok or sipping espresso in Rome's piazzas, city-based adventures promise excitement and endless possibilities. So, get ready to immerse yourself in the vibrant rhythm of urban exploration.",
            path: "/citydestination"
        },
        {
            imageSrc: DesttinationImage4,
            heading:"Forest Roam",
            details:"Immerse yourself in the tranquility and adventure of forest-based" +
                " destinations. From the towering redwoods of California to the vibrant jungles" +
                " of Costa Rica, each forest offers a unique escape into nature's embrace. Explore the mystical beauty of Japan's bamboo forests or discover the diverse wildlife of the Amazon Rainforest. Whether it's hiking, camping, or simply connecting with the natural world, forest destinations promise unforgettable experiences and the chance to rejuvenate amidst the beauty of the great outdoors. ",
            path: "/forestDestination"
        },


    ];
    return (
        <div>
            <h1>preaparing this page</h1>
            <header className="destinationHeadImage ">
                <img className="desHead" src={destinationHead}  />
            </header>
            <main className="desPage ">

                {DestinationData.map((data, index) => (
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