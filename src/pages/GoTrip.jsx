import Carousel from "../components/Carousel";
import SliderContainer from "../components/SliderContainer";
import Gotripmid from "../components/Gotripmid";
import Footer from "../components/Footer";
import GotripLogo from "../components/GotripLogo";
import Modals from "../components/Modals";
function GoTrip(){
    return(
        <div>
            <h3>Welcome to Go trip ...</h3>
            <Carousel />
            <SliderContainer />
            <Gotripmid />
            <GotripLogo />
            <Footer />
            {/*<Modals />*/}

        </div>
    )
}

export default GoTrip;
