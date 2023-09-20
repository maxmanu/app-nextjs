import testimonilaContent from "../../data/testimonial";
import Slider from "react-slick";
import Stars from "../Stars";

const Testimonial4 = () => {
    const settings = {
        dots: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 2,
        autoplay: false,
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    return (
        <>
            <Slider {...settings} arrows={false}>
                {testimonilaContent.slice(0, 6).map((item) => (
                    <div className="testimonial -type-1" key={item.id}>
                        <div className="cardtest">
                            <div className="thumb">
                                <img src={item.avatar} alt="testimonial" />
                                <span className="name-testimonial">John Doe</span>
                            </div>
                            <div className="content">
                                <p>{item.feedbackText}</p>
                            </div>
                            <div className="author">
                                <Stars score={item.stars} />
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </>
    );
};

export default Testimonial4;
