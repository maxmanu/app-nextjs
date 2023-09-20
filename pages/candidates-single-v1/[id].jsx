import dynamic from "next/dynamic";
import candidates from "../../data/candidates";
import candidateResume from "../../data/candidateResume";
import LoginPopup from "../../components/common/form/login/LoginPopup";
import FooterDefault from "../../components/footer/common-footer";
import MobileMenu from "../../components/header/MobileMenu";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Seo from "../../components/common/Seo";
import Contact from "../../components/candidates-single-pages/shared-components/Contact";
import GalleryBox from "../../components/candidates-single-pages/shared-components/GalleryBox";
import DefaulHeader2 from "../../components/header/DefaulHeader2";
import Slider from "react-slick";
import Link from "next/link";
import testimonilaContent from "../../data/testimonial";
import Stars from "../../components/Stars";

const CandidateSingleDynamicV1 = () => {
    const router = useRouter();
    const [candidate, setCandidates] = useState({});
    const id = router.query.id;
    const settings = {
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        // autoplay: true,
        // autoplaySpeed: 3500,
        arrows: true,
    };
    const settings2 = {
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
    // custom navigation
    function Arrow(props) {
        let className = props.type === "next" ? "slick-arrow slick-next" : "slick-arrow slick-prev";
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
    useEffect(() => {
        if (!id) <h1>Loading...</h1>;
        else setCandidates(candidates.find((item) => item.id == id));

        return () => {};
    }, [id]);

    return (
        <>
            <Seo pageTitle="Candidate Single Dyanmic V1" />

            <span className="header-span"></span>

            <LoginPopup />

            <DefaulHeader2 />

            <MobileMenu />

            <section className="candidate-detail-section">
                <div className="auto-container btn-back ps-lg-0 mb-3">
                    <Link href={"/oficios"}>
                        <i className="fas fa-chevron-left me-2"></i>Atrás
                    </Link>
                </div>
                <div className="upper-box">
                    <div className="row auto-container">
                        <div className="col-lg-4">
                            <div className="row justify-content-center sidebar-widget mx-3">
                                <div className="col-auto">
                                    <figure className="image">
                                        <img className="profesional-single-img" src={candidate?.avatar} alt="avatar" />
                                    </figure>
                                </div>
                                <div className="col-md-10 text-center">
                                    <div className="profesional-single-title">
                                        <h4 className="name d-inline">{candidate?.name}</h4>
                                    </div>

                                    <div className="row candidate-block-four mt-2">
                                        <div className="job-info justify-content-center">
                                            <div className="d-flex align-items-center">
                                                <div className="flex-shrink-0">
                                                    <img src="../../images/icons/icon-estrellas.png" alt="..." />
                                                </div>
                                                <div className="flex-grow-1 ms-3">
                                                    <span>3 reseñas</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="job-info justify-content-center">
                                            <div className="d-flex align-items-center">
                                                <div className="flex-shrink-0">
                                                    <img src="../../images/icons/icon-experiencia-chambita.png" alt="..." />
                                                </div>
                                                <div className="flex-grow-1 ms-3">
                                                    <span>8 años de experiencia</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="widget-content text-center">
                                    <div className="job-overview">
                                        <li>
                                            <h5>Edad:</h5>
                                            <span>35 Años</span>
                                        </li>
                                        <li>
                                            <h5>Nacionalidad:</h5>
                                            <span>Peruana</span>
                                        </li>
                                        <li>
                                            <h5>Disponibilidad:</h5>
                                            <span>Lunes, Martes, Miércoles, Jueves, Viernes</span>
                                        </li>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8 candidate-block-four">
                            <div className="row sidebar-widget justify-content-between">
                                <div className="col-lg-7">
                                    <small className="number-oficios">2 oficios</small>
                                    <Slider {...settings} nextArrow={<Arrow type="next" />} prevArrow={<Arrow type="prev" />}>
                                        <div>
                                            <div className="title-oficio-card">
                                                <img src="../../images/icons/icon-trabajos-chambita.png" className="me-3 d-inline" alt="..." />
                                                <h4 className="cat d-inline-flex">{candidate.designation}</h4>
                                            </div>
                                            <div className="title-servicio-card mt-2">
                                                <span>Servicios:</span>
                                                <ul className="post-tags">
                                                    {candidate?.tags?.map((val, i) => (
                                                        <li key={i}>
                                                            <a href="#">{val}</a>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="title-oficio-card">
                                                <img src="../../images/icons/icon-trabajos-chambita.png" className="me-3 d-inline" alt="..." />
                                                <h4 className="cat d-inline-flex">{candidate.designation}</h4>
                                            </div>
                                            <div className="title-servicio-card mt-2">
                                                <span>Servicios:</span>
                                                <ul className="post-tags">
                                                    {candidate?.tags?.map((val, i) => (
                                                        <li key={i}>
                                                            <a href="#">{val}</a>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </Slider>
                                </div>
                                <div className="col-lg-4">
                                    <div className="btn-box">
                                        <a className="theme-btn btn-style-one" href="#">
                                            Agregar a favoritos
                                            <i className="flaticon-heart"></i>
                                        </a>
                                    </div>
                                    <a
                                        target="_blank"
                                        haria-label="Chat on WhatsApp"
                                        href="https://wa.me/51990378205"
                                        rel="noreferrer"
                                        className="number-whatsapp mt-4"
                                    >
                                        <img className="img-fluid" src="../images/resource/icon-whatsapp.png" alt="" />
                                        <span className="cel-number">989898556</span>
                                    </a>
                                </div>
                            </div>
                            <div className="row">
                                <div className="job-detail">
                                    <p>
                                        Far much that one rank beheld bluebird after outside ignobly allegedly more when oh arrogantly vehement
                                        irresistibly fussy penguin insect additionally wow absolutely crud meretriciously hastily dalmatian a glowered
                                        inset one echidna cassowary some parrot and much as goodness some froze the sullen much connected bat
                                        wonderfully on instantaneously eel valiantly petted this along across highhandedly much.
                                    </p>

                                    <div className="portfolio-outer">
                                        <div className="row">
                                            <GalleryBox />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="candidate-detail-outer">
                    <div className="auto-container">
                        <div className="row">
                            <div className="col">
                                <div className="row my-5 pb-3">
                                    <div className="col-12">
                                        <div className="profesional-title-info">
                                            <div className="d-flex align-items-center">
                                                <div className="flex-shrink-0">
                                                    <img src="../../images/icons/icon-mapa-chambita.png" alt="..." />
                                                </div>
                                                <div className="flex-grow-1 ms-3">
                                                    <span>
                                                        <b>Suele trabajar en:</b>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="row pt-3">
                                            <div className="col-md-3">
                                                <b>Departamento</b>
                                                <br />
                                                <p>Lima</p>
                                            </div>
                                            <div className="col-md-3">
                                                <b>Provincia</b>
                                                <br />
                                                <p>Lima</p>
                                            </div>
                                            <div className="col-md-6">
                                                <b>Distrito</b>
                                                <br />
                                                <p>Surco, Breña, Lince, Jesús María</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {candidateResume.map((resume) => (
                                    <div className={`resume-outer my-5 ${resume.themeColor}`} key={resume.id}>
                                        <div className="profesional-title-info">
                                            <div className="d-flex align-items-center">
                                                <div className="flex-shrink-0">
                                                    <img src={resume?.icon} alt="..." />
                                                </div>
                                                <div className="flex-grow-1 ms-3">
                                                    <span>
                                                        <b>{resume?.title}</b>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        {resume?.blockList?.map((item) => (
                                            <div className="resume-block pt-3" key={item.id}>
                                                <div className="inner">
                                                    <span className="name">{item.meta}</span>
                                                    <div className="title-box">
                                                        <div className="info-box">
                                                            <h3>{item.name}</h3>
                                                            <span>{item.industry}</span>
                                                        </div>
                                                        <div className="edit-box">
                                                            <span className="year">{item.year}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="row">
                            <h5 className="mb-5">
                                <b>Reseñas</b>
                            </h5>
                            <div className="testimonial-carousel mb-5">
                                <Slider {...settings2} arrows={false}>
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
                            </div>
                            <div className="col-lg-8">
                                <div className="sidebar-widget contact-widget pb-2">
                                    <div className="widget-content">
                                        <div className="default-form">
                                            <Contact />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <FooterDefault footerStyle="-type-13 alternate3" />
        </>
    );
};

export default dynamic(() => Promise.resolve(CandidateSingleDynamicV1), {
    ssr: false,
});
