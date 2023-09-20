import About9 from "../about/About9";
import LoginPopup from "../common/form/login/LoginPopup";
import FooterDefault from "../footer/common-footer";
import MobileMenu from "../header/MobileMenu";
import Hero13 from "../hero/hero-13";
import Pricing3 from "../pricing/Pricing3";
import JobFeatured12 from "../job-featured/JobFeatured12";
import DefaulHeader2 from "../header/DefaulHeader2";
import Testimonial6 from "../testimonial/Testimonial6";
const index = () => {
    return (
        <>
            <LoginPopup />
            {/* End Login Popup Modal */}

            <DefaulHeader2 />
            {/* <!--End Main Header --> */}

            <MobileMenu />
            {/* End MobileMenu */}

            <Hero13 />
            {/* End Hero Section */}

            <About9 />
            {/* <!-- End About Section --> */}
            <section className="job-section">
                <div className="auto-container wow fadeInUp">
                    <div className="sec-title -type-2 text-center">
                        <h2>Oficios</h2>
                        <div className="text">Lorem impsut impsutimpsut impsutimpsut</div>
                    </div>
                    <div className="job-carousel gap-x25" data-aos="fade-up">
                        <JobFeatured12 />
                    </div>
                </div>
            </section>

            <section className="layout-pt-150 layout-pb-120 sect-ond-chamb">
                <div className="auto-container">
                    <div className="row justify-content-center">
                        <div className="col-lg-6">
                            <div className="sec-title -type-2 text-center">
                                <h2>Oficios más populares</h2>
                                <div className="text">Ranking de los oficios más buscados por nuestros clientes</div>
                            </div>
                        </div>
                    </div>
                    <div className="row grid-base pricing3_hover" data-aos="fade-up">
                        <Pricing3 />
                    </div>
                </div>
            </section>

            <section className="layout-pt-60 layout-pb-120">
                <div className="auto-container">
                    <div className="row justify-content-center text-center">
                        <div className="col-auto">
                            <div className="sec-title -type-2 text-center">
                                <h2>Testimonios de nuestros clientes</h2>
                                <div className="text">Lorem ipsum dolor sit amet elit, sed do eiusmod tempor</div>
                            </div>
                        </div>
                    </div>
                    {/* End .row */}

                    <div className="job-carousel testimonial-carousel pt-50" data-aos="fade-up">
                        <Testimonial6 />
                    </div>
                </div>
            </section>
            <FooterDefault footerStyle="-type-13 alternate3" />
        </>
    );
};

export default index;
