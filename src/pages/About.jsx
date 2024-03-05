import Person1 from "/home/labonno/projects/blog/src/assets/images/person1.jpg";
import Person2 from "/home/labonno/projects/blog/src/assets/images/person2.jpg";
import Person3 from "/home/labonno/projects/blog/src/assets/images/person3.jpg";
import Person4 from "/home/labonno/projects/blog/src/assets/images/person4.jpg";
import '../assets/styles/about.css';
import React, {useEffect, useState} from 'react';
import Card from "../components/Card";
function About() {
    // useEffect(() => {
    //     setTest('test again')
    // }, []);o  const [test, setTest] = useState('test');

    const AboutList = [
        {
            imageSrc: Person1,
            description:"hlw ervery one , hope you are doing good. thank you."
        },
        {
            imageSrc: Person2,
            description:"hlw ervery one , hope you are doing good. thank you."

        },
        {
            imageSrc: Person3,
            description:"hlw ervery one , hope you are doing good. thank you."
        },

        {
            imageSrc: Person4,
            description:"hlw ervery one , hope you are doing good. thank you."

        },

    ];
    return(
        <div>
            <h3 className="header">About</h3>
            <div>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, alias amet animi architecto assumenda atque aut culpa dolore eius eum ex inventore ipsam laboriosam magni maiores maxime nostrum pariatur porro quis ratione soluta unde veniam voluptates! A amet aspernatur deserunt doloremque eligendi harum labore, molestiae, omnis pariatur placeat quo veritatis.</p>
            </div>
            <div className="AboutCard">
            {AboutList.map((data, index) => (
                <React.Fragment key={index}>
                    <Card data={data}/>
                </React.Fragment>
            ))}
            </div>

        </div>
    )
}

export default About;