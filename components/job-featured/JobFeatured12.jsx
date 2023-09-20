import Link from "next/link";
import Slider from "react-slick";
import jobFeatured from "../../data/job-featured";
import jobCatContent from "../../data/job-catergories";

const JobFeatured12 = () => {
    const settings = {
        arrows: true,
        speed: 1400,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };
    // custom navigation
    function Arrow(props) {
        let className = props.type === "next" ? "slick-arrow slick-next servicios-next" : "slick-arrow slick-prev servicios-prev";
        className += " arrow";
        const char =
            props.type === "next" ? (
                <>
                    <span className="flaticon-next"></span>
                </>
            ) : (
                <>
                    <span className="flaticon-back"></span>
                </>
            );
        return (
            <button className={className} onClick={props.onClick}>
                {char}
            </button>
        );
    }
    return (
        <>
            <Slider {...settings} nextArrow={<Arrow type="next" />} prevArrow={<Arrow type="prev" />}>
                {jobCatContent.map((item) => (
                    <div className="category-block col-lg-4 col-md-6 col-sm-12" key={item.id}>
                        <div className="inner-box">
                            <div className="content">
                                <span className={`icon ${item.icon}`}></span>
                                <h4>
                                    <Link href="">{item.catTitle}</Link>
                                </h4>
                                <p>({item.jobNumber} especialistas)</p>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </>
    );
};

export default JobFeatured12;
