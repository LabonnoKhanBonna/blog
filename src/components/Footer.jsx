import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faLocationDot,
    faPhone,
    faCalendar,
    faCompass,
    faSearch,
    faEnvelope
} from '@fortawesome/free-solid-svg-icons';

import "../assets/styles/footer.css"

import footerlogo from "../assets/images/logo-footer.png"
import Modals from "bootstrap/js/src/modal";
import {useNavigate} from "react-router-dom"
function Footer(){
    const navigate = useNavigate();
    const handleJoinNow=() =>{
        navigate("/contract");
    }
    return(
        <div>
            <div className="smallfooter">
                <h2>Book now and enjoy your trip</h2>
                <button onClick={handleJoinNow} type="button" className="btnJoin">Join Now</button>

            </div>
            <div className="mainfooter">
                <div className="fotter">
                    <img src={footerlogo}/>
                    <h6 >Explore the world with ease through our comprehensive travel platform.
                        Discover dream destinations, and personalized
                        itineraries for your next unforgettable journey."</h6>
                    <p><FontAwesomeIcon icon={faEnvelope}/> labonno@glascutr.com </p>
                    <p><FontAwesomeIcon icon={faPhone}/>01689763403 </p>
                    <p><FontAwesomeIcon icon={faLocationDot}/>Gulsan-1, Dhaka, Bangladesh</p>
                </div>

                <div className="footer">
                    <h6>Our Recent Posts</h6>
                    <div>
                        <p>Visit Thailand, Bali And China</p>
                        <p>March 6, 2024</p>
                    </div>
                    <div>
                        <p>The Sound Of Our Jungle</p>
                        <p>March 6, 2024</p>
                    </div>
                    <div>
                        <p>The Sound Of Our JungleVisit Thailand, Bali And China</p>
                        <p>March 6, 2024</p>
                    </div>
                </div>

                <div className="footer">
                    <h6>Subcribe to our newstaller</h6> <br/>
                    <p>Embark on unforgettable journeys with our travel website. Discover hidden gems, vibrant cultures, and plan your next adventure. Your gateway to wanderlust awaits."
                    </p>
                    Name : <input type="text" placeholder="your name here "  /><br/> <br/>
                   Email :  <input type="email" placeholder="your email@.com" />
                    <br/> <br/>
                    <button onClick={handleJoinNow} type="button" className="btnJoin">Join Now</button>
                </div>

                <div className="footer">
                    <h6>Our instragram</h6>
                    <p>Aliquam lorem ante, dapibus inviver raqui feugiat a, tellus. Phasellus null</p>
                </div>

            </div>


        </div>
    )
}

export default Footer;