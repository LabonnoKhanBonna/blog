import React from "react";
import Card from "../components/Card";
import CardImage1 from "../assets/images/img1.jpg";
import CardImage2 from "../assets/images/img2.jpg";
import CardImage3 from "../assets/images/img3.jpg";
import CardImage4 from "../assets/images/img4.jpg";
import CardImage5 from "../assets/images/img5.jpg";
import pagination from "../components/Pagination";
import Pagination from "../components/Pagination";

function Home() {

    const dataList = [
        {
            imageSrc: CardImage1,
            title: "Cheerful Loving Couple Bakers Drinking Coffee",
            description:"It’s no secret that the digital industry is booming. From exciting" +
                " startups to global brands, companies are reaching out to digital agencies, responding to the new possibilities available. However, the industry is fast becoming overcrowded, heaving with agencies offering similar services — on the surface, at least. Producing creative, fresh projects is the key to standing out. Unique side projects are the best place to innovate, but balancing commercially and creatively lucrative work is tricky. So, this article looks at ",
            details:"there show be some meaningful information. I am just writting whatever I" +
                " want for now"
        },
        {
            imageSrc: CardImage2,
            title: "Loft Office With Vintage Decor For Creative Working",
            description: "It’s no secret that the digital industry is booming. From exciting" +
                " startups to global brands, companies are reaching out to digital agencies, responding to the new possibilities available. However, the industry is fast becoming overcrowded, heaving with agencies offering similar services — on the surface, at least. Producing creative, fresh projects is the key to standing out. Unique side projects are the best place to innovate, but balancing commercially and creatively lucrative work is tricky. So, this article looks at ",
            details:"club isn't best place for love so the bar is where is used to go"
        },
        {
            imageSrc: CardImage3,
            title: "Cosy Bright Office In Yellow And Grey Colors",
            description: "It’s no secret that the digital industry is booming. From exciting" +
                " startups to global brands, companies are reaching out to digital agencies, responding to the new possibilities available. However, the industry is fast becoming overcrowded, heaving with agencies offering similar services — on the surface, at least. Producing creative, fresh projects is the key to standing out. Unique side projects are the best place to innovate, but balancing commercially and creatively lucrative work is tricky. So, this article looks at ",
            details:"Its me hi I am the problem its me at tea time everyone aggred"

        },

        {
            imageSrc: CardImage4,
            title: "Traveller Visiting Ice Cave With Amazing Eye-catching Scenes",
            description: "It’s no secret that the digital industry is booming. From exciting" +
                " startups to global brands, companies are reaching out to digital agencies, responding to the new possibilities available. However, the industry is fast becoming overcrowded, heaving with agencies offering similar services — on the surface, at least. Producing creative, fresh projects is the key to standing out. Unique side projects are the best place to innovate, but balancing commercially and creatively lucrative work is tricky. So, this article looks at ",
            details:"only gatting older baby. I was thinking about you lately.. I am just" +
                " writting whatever" +
                " I" +
                " want for now"
        },
        {
            imageSrc: CardImage5,
            title: "Stylish Kitchen And Dining Room With Functional Ideas",
            description: "It’s no secret that the digital industry is booming. From exciting" +
                " startups to global brands, companies are reaching out to digital agencies, responding to the new possibilities available. However, the industry is fast becoming overcrowded, heaving with agencies offering similar services — on the surface, at least. Producing creative, fresh projects is the key to standing out. Unique side projects are the best place to innovate, but balancing commercially and creatively lucrative work is tricky. So, this article looks at ",
            details: "every thing you ever dream of.. dissapare when you wake up , but therer is" +
                " nothing to afraid of , even when the night changes.... It will never change" +
                " you and me"

        },
    ];

    return (
        <div>
            <h3>Writing.</h3>
            {dataList.map((data, index) => (
                <React.Fragment key={index}>
                    <Card data={data}/>
                </React.Fragment>
            ))}
           <Pagination />
        </div>
    )
}

export default Home;