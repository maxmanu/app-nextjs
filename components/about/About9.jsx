import Link from "next/link";

const About9 = () => {
    return (
        <>
            {/* <!-- About Section --> */}
            <section className="about-section-two style-two layout-pt-120 layout-pb-60">
                <div className="auto-container">
                    <div className="row justify-content-between align-items-center">
                        {/* <!-- Image Column --> */}
                        <div className="image-column -no-margin col-xl-6 col-lg-6 col-md-12 col-sm-12 wow fadeInRight">
                            <div className="image-box -type-1 text-center">
                                <figure className="main-image" data-aos-delay="500" data-aos="fade-in">
                                    <img className="rounded-3" src="images/index-13/images/electricista-index.jpg" alt="resource" />
                                </figure>
                            </div>
                        </div>
                        {/* End img-column */}

                        {/* <!-- Content Column --> */}
                        <div className="content-column mb-0 col-xl-6 col-lg-6 col-md-12 col-sm-12">
                            <div data-aos="fade-right">
                                <div className="sec-title">
                                    <h2 className="fw-700">¿Que es Chambita?</h2>
                                    <div className="text mt-30">
                                        Lorem impsut impsutimpsut impsutimpsut impsut impsut Lorem impsut impsutimpsut impsutimpsut impsut impsut
                                        Lorem impsut impsut.
                                    </div>
                                    <br />
                                    <h2 className="fw-700">Beneficios:</h2>
                                    <div className="text mt-30">
                                        <ul>
                                            <li>Simplemente el texto de relleno de las imprentas y archivos de texto. Lorem .</li>
                                            <li>Implemente el texto de relleno de las imprentas y archivos de texto. Lorem .</li>
                                        </ul>
                                    </div>
                                </div>
                                <Link href="/nosotros" className="theme-btn btn-style-one">
                                    Ver más
                                    <i className="fa fa-arrow-right" aria-hidden="true"></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- End About Section -->  */}
        </>
    );
};

export default About9;
