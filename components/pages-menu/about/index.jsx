import LoginPopup from "../../common/form/login/LoginPopup";
import Partner from "../../common/partner/Partner";
import FooterDefault from "../../footer/common-footer";
import DefaulHeader2 from "../../header/DefaulHeader2";
import MobileMenu from "../../header/MobileMenu";
import ImgBox from "./ImgBox";
import IntroDescriptions from "./IntroDescriptions";
import Breadcrumb from "../../common/Breadcrumb";
import FaqChild from "../faq/FaqChild";
import ContactForm from "../contact/ContactForm";

const index = () => {
    return (
        <>
            <span className="header-span"></span>

            <LoginPopup />

            <DefaulHeader2 />

            <MobileMenu />

            <section className="about-section-three">
                <div className="auto-container">
                    <ImgBox />
                    <IntroDescriptions />
                </div>
            </section>

            <section className="layout-pt-150 layout-pb-120 style-two sect-ond-chamb">
                <div className="auto-container container-us">
                    <div className="sec-title text-center">
                        <h2>¿Cómo funciona?</h2>
                        <div className="text">Lorem Ipsum is simply dummy text of the printing </div>
                    </div>
                    <div className="row" data-aos="fade-up">
                        <div className="work-block col-lg-4 col-md-6 col-sm-12">
                            <div className="inner-box">
                                <figure className="image">
                                    <img src="images/resource/uno.png" alt="how it works" />
                                </figure>
                                <p>
                                    Crea una <b>cuenta personal</b> y valida tu información
                                </p>
                            </div>
                        </div>
                        <div className="work-block col-lg-4 col-md-6 col-sm-12">
                            <div className="inner-box">
                                <figure className="image">
                                    <img src="images/resource/dos.png" alt="how it works" />
                                </figure>
                                <p>
                                    Publica tu <b>anuncio</b>
                                </p>
                            </div>
                        </div>
                        <div className="work-block col-lg-4 col-md-6 col-sm-12">
                            <div className="inner-box">
                                <figure className="image">
                                    <img src="images/resource/tres.png" alt="how it works" />
                                </figure>
                                <p>
                                    <b>Recibe las llamadas</b> de tus futuros clientes
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="faqs-section">
                <div className="auto-container container-us">
                    <div className="sec-title text-center">
                        <h2>Preguntas frecuentes</h2>
                        <div className="text">Lorem Ipsum is simply dummy text of the printing </div>
                    </div>

                    <ul className="accordion-box">
                        <FaqChild />
                    </ul>
                </div>
            </section>

            <section className="contact-section">
                <div className="auto-container">
                    <div className="sec-title text-center">
                        <h2>Contáctanos</h2>
                        <div className="text">Lorem Ipsum is simply dummy text of the printing </div>
                    </div>
                    <div className="contact-form default-form">
                        <ContactForm />
                    </div>
                </div>
            </section>
            <FooterDefault footerStyle="-type-13 alternate3" />
        </>
    );
};

export default index;
