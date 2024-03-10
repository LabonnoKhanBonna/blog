import logo1 from "../assets/images/h1-custom-icon-img-1.png"
import logo2 from "../assets/images/h1-custom-icon-img-2.png"
import logo3 from "../assets/images/h1-custom-icon-img-3.png"
import logo4 from "../assets/images/h1-custom-icon-img-4.png"
import "../assets/styles/goTripLogo.css"
function GotripLogo(){
    return (
        <div className="logos m-5">
            <div className="logo">
                <img src={logo1} alt="logo"/>
                <h6>Photoshots</h6>
                <p>Aenean commodo ligula eget dolor. Lorem ipsum</p>
            </div>

            <div className="logo">
                <img src={logo2} alt="logo"/>
                <h6>Shops and Restaurants</h6>
                <p>Aenean commodo ligula eget dolor. Lorem ipsum</p>
            </div>

            <div className="logo">
                <img src={logo3} alt="logo"/>
                <h6>Hotels & Resorts</h6>
                <p>Aenean commodo ligula eget dolor. Lorem ipsum</p>
            </div>

            <div className="logo">
                <img src={logo4} alt="logo"/>
                <h6>Online Booking</h6>
                <p>Aenean commodo ligula eget dolor. Lorem ipsum</p>
            </div>


        </div>
    )
}

export default GotripLogo;