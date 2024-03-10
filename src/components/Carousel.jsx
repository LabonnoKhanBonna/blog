
import slider1 from "/home/labonno/projects/blog/src/assets/images/slider-1.jpg"
import slider2 from "/home/labonno/projects/blog/src/assets/images/slider-2.jpg"
import slider3 from "/home/labonno/projects/blog/src/assets/images/slider3.jpg"

function Carousel (){
    return (
        <div>
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions"
                            data-bs-slide-to="0" className="active" aria-current="true"
                            aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions"
                            data-bs-slide-to="1" aria-label="Slide 2"></button>

                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={slider1} className="d-block w-100" alt="..."/>
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Let's go now </h5>
                            <p>You can book your trip with gotrip. We offer exiciting tour and travel packages</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={slider2} className="d-block w-100" alt="..."/>
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Don't miss the offer!</h5>
                            <p>your dram destination will be true with reasonable price... </p>
                        </div>
                    </div>

                </div>
                <button className="carousel-control-prev" type="button"
                        data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button"
                        data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

        </div>
    )
}
export default Carousel;