import CopyrightFooter from "./CopyrightFooter";
import FooterContent from "./FooterContent";

const index = ({ footerStyle = "" }) => {
    return (
        <footer className={`main-footer ${footerStyle}`}>
            <div className="auto-container">
                {/* <!--Widgets Section--> */}
                <div className="widgets-section" data-aos="fade-up">
                    <div className="row">
                        <div className="big-column col-xl-4 col-lg-3 col-md-12">
                            <div className="footer-column about-widget">
                                <div className="logo">
                                    <a href="#">
                                        {/* <img src="/images/logo.svg" alt="brand" /> */}
                                        <h2>CHAMBITA</h2>
                                    </a>
                                </div>
                                {/* <p className="phone-num">
                                    <span>Llámanos </span>
                                    <a href="thebeehost@support.com">123 456 7890</a>
                                </p> */}
                                <p className="address">
                                    <img src="../../images/icons/mapa-de-ubicacion.png" alt="" />
                                    Lorem imsupm Nª 2878- Surco
                                </p>
                                <p className="address">
                                    <img src="../../images/icons/telefono-inteligente.png" alt="" />
                                    <a href="tel:953067470">+51 953 067 470</a>
                                </p>
                                <p className="address">
                                    <img src="../../images/icons/email-icon.png" alt="" />
                                    <a href="mailto:hola@chambita.com" className="email">
                                        hola@chambita.com
                                    </a>
                                </p>
                            </div>
                        </div>
                        {/* End footer left widget */}

                        <div className="big-column col-xl-8 col-lg-9 col-md-12 pt-4">
                            <div className="row justify-content-end">
                                <FooterContent />
                            </div>
                        </div>
                        {/* End col-xl-8 */}
                    </div>
                </div>
            </div>
            {/* End auto-container */}

            <CopyrightFooter />
            {/* <!--Bottom--> */}
        </footer>
        //   {/* <!-- End Main Footer --> */}
    );
};

export default index;
