
import React from "react";
import { useParams } from "react-router-dom";
import Card from "../components/Card";
import sea1 from "../assets/images/card2.jpg";
import sea2 from "../assets/images/blog-img-20.jpg";
import sea3 from "../assets/images/h1-postmark-1.jpg";
import sea4 from "../assets/images/card8.jpg";
import hill1 from "../assets/images/hill11.jpg"
import hill2 from "../assets/images/hill12.jpg"
import hill3 from "../assets/images/hill13.jpg"


function AddDetail(data,id) {

    const detailList = [
        {
            id: 1,
            data: [
                {
                    imageSrc: sea1,
                    heading: "Maldives",
                    details: "The Maldives, Bora Bora in French Polynesia, Santorini in Greece, the" +
                        " Amalfi Coast in Italy, the Great Barrier Reef in Australia, Maui in Hawaii, Phuket in Thailand, the Seychelles, Cinque Terre in Italy, and Fiji are some of the most sought-after sea-based destinations worldwide. These destinations boast stunning beaches, crystal-clear waters, vibrant marine life, and breathtaking landscapes. Whether you're seeking luxury resorts, adventurous water sports, or simply relaxation on the beach, these destinations offer unforgettable experiences for travelers of all interests."
                },
                {
                    imageSrc: sea2,
                    heading: "Indonesia",
                    details: "Embark on an adventure to discover the beauty of hill and mountain-based" +
                        " destinations around the globe. From the snow-capped peaks of the Swiss Alps to" +
                        " the lush forests of Canada's Banff National Park, each destination offers a unique blend of natural wonders and outdoor activities. Whether you're hiking through Nepal's Himalayas or skiing in the Italian Dolomites, these destinations promise unforgettable experiences for every traveler. So pack your bags and get ready to explore the world's most breathtaking landscapes, one mountain at a time."
                },
                {
                    imageSrc: sea3,
                    heading: "Thailand",
                    details: "Dive into the energy of city life in some of the world's most exciting" +
                        " destinations. From the iconic skyline of New York City to the historic charm of Paris, each city offers a unique blend of culture, cuisine, and experiences. Explore the bustling markets of Marrakech, marvel at Dubai's futuristic architecture, or wander through the ancient streets of Rome. Whether it's sampling street food in Bangkok or sipping espresso in Rome's piazzas, city-based adventures promise excitement and endless possibilities. So, get ready to immerse yourself in the vibrant rhythm of urban exploration."
                },
                {
                    imageSrc: sea4,
                    heading: "saint martin",
                    details: "Immerse yourself in the tranquility and adventure of forest-based" +
                        " destinations. From the towering redwoods of California to the vibrant jungles" +
                        " of Costa Rica, each forest offers a unique escape into nature's embrace. Explore the mystical beauty of Japan's bamboo forests or discover the diverse wildlife of the Amazon Rainforest. Whether it's hiking, camping, or simply connecting with the natural world, forest destinations promise unforgettable experiences and the chance to rejuvenate amidst the beauty of the great outdoors."
                }
            ]
        },
        {
            id: 2,
            data: [
                {
                    imageSrc: hill1,
                    heading: "Maldives",
                    details: "The Maldives, Bora Bora in French Polynesia, Santorini in Greece, the"

                },
                {
                    imageSrc: hill2,
                    heading: "Indonesia",
                    details: "Embark on an adventure to discover the beauty of hill and mountain-based" +
                        " destinations around the globe. From the snow-capped peaks of the Swiss Alps to" +
                        " the lush forests of Canada's Banff National Park, each destination offers a unique blend of natural wonders and outdoor activities. Whether you're hiking through Nepal's Himalayas or skiing in the Italian Dolomites, these destinations promise unforgettable experiences for every traveler. So pack your bags and get ready to explore the world's most breathtaking landscapes, one mountain at a time."
                },
                {
                    imageSrc: hill3,
                    heading: "Thailand",
                    details: "Dive into the energy of city life in some of the world's most exciting" +
                        " destinations. From the iconic skyline of New York City to the historic charm of Paris, each city offers a unique blend of culture, cuisine, and experiences. Explore the bustling markets of Marrakech, marvel at Dubai's futuristic architecture, or wander through the ancient streets of Rome. Whether it's sampling street food in Bangkok or sipping espresso in Rome's piazzas, city-based adventures promise excitement and endless possibilities. So, get ready to immerse yourself in the vibrant rhythm of urban exploration."
                },
                {
                    imageSrc: hill1,
                    heading: "saint martin",
                    details: "Immerse yourself in the tranquility and adventure of forest-based" +
                        " destinations. From the towering redwoods of California to the vibrant jungles" +
                        " of Costa Rica, each forest offers a unique escape into nature's embrace. Explore the mystical beauty of Japan's bamboo forests or discover the diverse wildlife of the Amazon Rainforest. Whether it's hiking, camping, or simply connecting with the natural world, forest destinations promise unforgettable experiences and the chance to rejuvenate amidst the beauty of the great outdoors."
                },

            ]
        },
        {
            id: 3,
            data: [

                {
                    imageSrc: hill1,
                    heading: "Maldives",
                    details: "The Maldives, Bora Bora in French Polynesia, Santorini in Greece, the"

                },
                {
                    imageSrc: hill2,
                    heading: "Indonesia",
                    details: "Embark on an adventure to discover the beauty of hill and mountain-based" +
                        " destinations around the globe. From the snow-capped peaks of the Swiss Alps to" +
                        " the lush forests of Canada's Banff National Park, each destination offers a unique blend of natural wonders and outdoor activities. Whether you're hiking through Nepal's Himalayas or skiing in the Italian Dolomites, these destinations promise unforgettable experiences for every traveler. So pack your bags and get ready to explore the world's most breathtaking landscapes, one mountain at a time."
                },
                {
                    imageSrc: hill3,
                    heading: "Thailand",
                    details: "Dive into the energy of city life in some of the world's most exciting" +
                        " destinations. From the iconic skyline of New York City to the historic charm of Paris, each city offers a unique blend of culture, cuisine, and experiences. Explore the bustling markets of Marrakech, marvel at Dubai's futuristic architecture, or wander through the ancient streets of Rome. Whether it's sampling street food in Bangkok or sipping espresso in Rome's piazzas, city-based adventures promise excitement and endless possibilities. So, get ready to immerse yourself in the vibrant rhythm of urban exploration."
                },
                {
                    imageSrc: hill1,
                    heading: "saint martin",
                    details: "Immerse yourself in the tranquility and adventure of forest-based" +
                        " destinations. From the towering redwoods of California to the vibrant jungles" +
                        " of Costa Rica, each forest offers a unique escape into nature's embrace. Explore the mystical beauty of Japan's bamboo forests or discover the diverse wildlife of the Amazon Rainforest. Whether it's hiking, camping, or simply connecting with the natural world, forest destinations promise unforgettable experiences and the chance to rejuvenate amidst the beauty of the great outdoors."
                },
            ]
        },
        {
            id: 4,
            details: [
                // Details for ID 4
                {
                    imageSrc: hill1,
                    heading: "Maldives",
                    details: "The Maldives, Bora Bora in French Polynesia, Santorini in Greece, the"

                },
                {
                    imageSrc: hill2,
                    heading: "Indonesia",
                    details: "Embark on an adventure to discover the beauty of hill and mountain-based" +
                        " destinations around the globe. From the snow-capped peaks of the Swiss Alps to" +
                        " the lush forests of Canada's Banff National Park, each destination offers a unique blend of natural wonders and outdoor activities. Whether you're hiking through Nepal's Himalayas or skiing in the Italian Dolomites, these destinations promise unforgettable experiences for every traveler. So pack your bags and get ready to explore the world's most breathtaking landscapes, one mountain at a time."
                },
                {
                    imageSrc: hill3,
                    heading: "Thailand",
                    details: "Dive into the energy of city life in some of the world's most exciting" +
                        " destinations. From the iconic skyline of New York City to the historic charm of Paris, each city offers a unique blend of culture, cuisine, and experiences. Explore the bustling markets of Marrakech, marvel at Dubai's futuristic architecture, or wander through the ancient streets of Rome. Whether it's sampling street food in Bangkok or sipping espresso in Rome's piazzas, city-based adventures promise excitement and endless possibilities. So, get ready to immerse yourself in the vibrant rhythm of urban exploration."
                },
                {
                    imageSrc: hill1,
                    heading: "saint martin",
                    details: "Immerse yourself in the tranquility and adventure of forest-based" +
                        " destinations. From the towering redwoods of California to the vibrant jungles" +
                        " of Costa Rica, each forest offers a unique escape into nature's embrace. Explore the mystical beauty of Japan's bamboo forests or discover the diverse wildlife of the Amazon Rainforest. Whether it's hiking, camping, or simply connecting with the natural world, forest destinations promise unforgettable experiences and the chance to rejuvenate amidst the beauty of the great outdoors."
                },
            ]
        }
    ];

    return (
        <div>
            <div>
                {/* Map over filtered data to render cards */}
                {detailList.map((data, index) => (
                    <React.Fragment key={index}>
                        <Card  data={data}/>
                    </React.Fragment>
                ))}
            </div>
        </div>
    )
}

export default AddDetail;