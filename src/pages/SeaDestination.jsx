import Footer from "../components/Footer";
import DestinationContain from "../components/DestinationContain";
import React from "react";
import sea1 from "../assets/images/card2.jpg"
import sea2 from "../assets/images/blog-img-20.jpg"
import sea3 from "../assets/images/h1-postmark-1.jpg"
import sea4 from "../assets/images/card8.jpg"
import DesttinationImage4 from "../assets/images/blog-img-21.jpg";

function SeaDestination(){
    const SeaDes = [
        {
            imageSrc: sea1,
            heading:"Maldives",
            details:"The Maldives, Bora Bora in French Polynesia, Santorini in Greece, the" +
                " Amalfi Coast in Italy, the Great Barrier Reef in Australia, Maui in Hawaii, Phuket in Thailand, the Seychelles, Cinque Terre in Italy, and Fiji are some of the most sought-after sea-based destinations worldwide. These destinations boast stunning beaches, crystal-clear waters, vibrant marine life, and breathtaking landscapes. Whether you're seeking luxury resorts, adventurous water sports, or simply relaxation on the beach, these destinations offer unforgettable experiences for travelers of all interests.",
            // path: <Route path="/seadestination" element={<SeaDestination />} />
            path: "/seadestination"
        },
        {
            imageSrc: sea2,
            heading:"Indonesia",
            details:"Embark on an adventure to discover the beauty of hill and mountain-based" +
                " destinations around the globe. From the snow-capped peaks of the Swiss Alps to" +
                " the lush forests of Canada's Banff National Park, each destination offers a unique blend of natural wonders and outdoor activities. Whether you're hiking through Nepal's Himalayas or skiing in the Italian Dolomites, these destinations promise unforgettable experiences for every traveler. So pack your bags and get ready to explore the world's most breathtaking landscapes, one mountain at a time.",
            path: "/hilldestination"
        },
        {
            imageSrc: sea3,
            heading:"Thailand",
            details:
                "Dive into the energy of city life in some of the world's most exciting" +
                " destinations. From the iconic skyline of New York City to the historic charm of Paris, each city offers a unique blend of culture, cuisine, and experiences. Explore the bustling markets of Marrakech, marvel at Dubai's futuristic architecture, or wander through the ancient streets of Rome. Whether it's sampling street food in Bangkok or sipping espresso in Rome's piazzas, city-based adventures promise excitement and endless possibilities. So, get ready to immerse yourself in the vibrant rhythm of urban exploration.",
            path: "/citydestination"
        },
        {
            imageSrc: sea4,
            heading:"saint martin",
            details:"Immerse yourself in the tranquility and adventure of forest-based" +
                " destinations. From the towering redwoods of California to the vibrant jungles" +
                " of Costa Rica, each forest offers a unique escape into nature's embrace. Explore the mystical beauty of Japan's bamboo forests or discover the diverse wildlife of the Amazon Rainforest. Whether it's hiking, camping, or simply connecting with the natural world, forest destinations promise unforgettable experiences and the chance to rejuvenate amidst the beauty of the great outdoors. ",
            path: "/forestDestination"
        },


    ];
    return (
        <div>

            <main className="seaDesMain d-flex p-5" >
                <div className="seaDesMainCont col-9">
                 <div>
                     {SeaDes.map((data, index) => (
                         <React.Fragment key={index}>
                             <DestinationContain data={data}/>
                         </React.Fragment>
                     ))}
                 </div>
                </div>
                <div className="seaDesSideContain col-3 bg-info">
                    <div className="footer">
                        <h6>Subcribe to our newstaller</h6> <br/>
                        <p>Embark on unforgettable journeys with our travel website. Discover hidden
                            gems, vibrant cultures, and plan your next adventure. Your gateway to
                            wanderlust awaits."
                        </p>
                        Name : <input className="w-100" type="text" placeholder="your name here "/><br/> <br/>
                        Email : <input className="w-100" type="email" placeholder="your email@.com"/>
                        <br/> <br/>
                        <button type="button" className="btnJoin">Book Trip
                        </button>
                    </div>

                </div>

            </main>

            <Footer/>
        </div>
    )
}

export default SeaDestination;