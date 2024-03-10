import "../assets/styles/gotripmid.css"

import round3 from "../assets/images/roundimg1.jpg"
import card2 from "../assets/images/card2.jpg"
import card3 from "../assets/images/card3.jpg"
import card4 from "../assets/images/card4.jpg"
import card5 from "../assets/images/card5.jpg"
import round1 from "../assets/images/roundimg2.jpg"
import round2 from "../assets/images/roundimg3.jpg"
import card6 from "../assets/images/card6.jpg"
import card7 from "../assets/images/card7.jpg"
import card8 from "../assets/images/card8.jpg"
import card9 from "../assets/images/card9.jpg"
import round4 from "../assets/images/card10.jpg"
import lastimg from "../assets/images/h1-img-1.png"

import Card from "./Card";
import React from "react";
function Gotripmid(){
    const GotripCardList = [
        {
            imageSrc: round3,
            description:"hlw ervery one , hope you are doing good. thank you.",
            rounded: true
        },
        {
            imageSrc: card2,
            description:"hlw ervery one , hope you are doing good. thank you."

        },
        {
            imageSrc: card3,
        },

        {
            imageSrc: card4,
            description:"hlw ervery one , hope you are doing good. thank you."

        },
        {
            imageSrc: card5,
            description:"hlw ervery one , hope you are doing good. thank you."

        },
        {
            imageSrc: round1,
            description:"hlw ervery one , hope you are doing good. thank you.",
            rounded: true
        },
        {
            imageSrc: round2,
            description:"hlw ervery one , hope you are doing good. thank you.",
            rounded: true
        },
        {
            imageSrc: card6,
            description:"hlw ervery one , hope you are doing good. thank you."

        },
        {
            imageSrc: card7,
            description:"hlw ervery one , hope you are doing good. thank you."

        },
        {
            imageSrc: card8,
            description:"hlw ervery one , hope you are doing good. thank you."

        },
        {
            imageSrc: card9,
            description:"hlw ervery one , hope you are doing good. thank you."

        },
        {
            imageSrc: round4,
            description:"hlw ervery one , hope you are doing good. thank you.",
            rounded: true

        },

    ];
    return(
        <div className="header">
            <div>
                <h3>Choose your</h3>
                <h1>Perfect Holiday</h1>
                <p>
                    "Embark on a Journey: Exploring the World's Wonders. Discover hidden gems,
                    vibrant cultures, and unforgettable adventures.<br/> Let's wander together and
                    create memories that last a lifetime!"</p>

            </div>


            <div className="gotripCard ">

                {GotripCardList.map((data, index) => (
                    <React.Fragment key={index}>
                        <Card data={data}/>
                    </React.Fragment>
                ))}
            </div>
            <div className="gotripmidLast mt-5 mb-5 pb-5 pt-5">
                <img src={lastimg} alt="image here"/>
            </div>


        </div>
    )
}

export default Gotripmid;

