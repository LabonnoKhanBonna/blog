import React from "react";
import Card from "../components/Card";
import CardImage1 from "../assets/images/img1.jpg";
import CardImage2 from "../assets/images/img2.jpg";
import CardImage3 from "../assets/images/img3.jpg";
import CardImage4 from "../assets/images/img4.jpg";
import CardImage5 from "../assets/images/img5.jpg";


function Home() {
    const dataList = [
        {
            imageSrc: CardImage1,
            title: "Cheerful Loving Couple Bakers Drinking Coffee",
            description:"It’s no secret that the digital industry is booming. From exciting startups to global brands, companies are reaching out to digital agencies, responding to the new possibilities available. However, the industry is fast becoming overcrowded, heaving with agencies offering similar services — on the surface, at least. Producing creative, fresh projects is the key to standing out. Unique side projects are the best place to innovate, but balancing commercially and creatively lucrative work is tricky. So, this article looks at "

        },
        {
            imageSrc: CardImage2,
            title: "Loft Office With Vintage Decor For Creative Working",
            description: "It’s no secret that the digital industry is booming. From exciting startups to global brands, companies are reaching out to digital agencies, responding to the new possibilities available. However, the industry is fast becoming overcrowded, heaving with agencies offering similar services — on the surface, at least. Producing creative, fresh projects is the key to standing out. Unique side projects are the best place to innovate, but balancing commercially and creatively lucrative work is tricky. So, this article looks at "
        },
        {
            imageSrc: CardImage3,
            title: "Cosy Bright Office In Yellow And Grey Colors",
            description: "It’s no secret that the digital industry is booming. From exciting startups to global brands, companies are reaching out to digital agencies, responding to the new possibilities available. However, the industry is fast becoming overcrowded, heaving with agencies offering similar services — on the surface, at least. Producing creative, fresh projects is the key to standing out. Unique side projects are the best place to innovate, but balancing commercially and creatively lucrative work is tricky. So, this article looks at "

        },

        {
            imageSrc: CardImage4,
            title: "Traveller Visiting Ice Cave With Amazing Eye-catching Scenes",
            description: "It’s no secret that the digital industry is booming. From exciting startups to global brands, companies are reaching out to digital agencies, responding to the new possibilities available. However, the industry is fast becoming overcrowded, heaving with agencies offering similar services — on the surface, at least. Producing creative, fresh projects is the key to standing out. Unique side projects are the best place to innovate, but balancing commercially and creatively lucrative work is tricky. So, this article looks at "

        },
        {
            imageSrc: CardImage5,
            title: "Stylish Kitchen And Dining Room With Functional Ideas",
            description: "It’s no secret that the digital industry is booming. From exciting startups to global brands, companies are reaching out to digital agencies, responding to the new possibilities available. However, the industry is fast becoming overcrowded, heaving with agencies offering similar services — on the surface, at least. Producing creative, fresh projects is the key to standing out. Unique side projects are the best place to innovate, but balancing commercially and creatively lucrative work is tricky. So, this article looks at "

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
        </div>
    )
}

export default Home;