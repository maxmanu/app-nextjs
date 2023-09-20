import LoginPopup from "../../common/form/login/LoginPopup";
import FooterDefault from "../../footer/common-footer";
import DefaulHeader2 from "../../header/DefaulHeader2";
import MobileMenu from "../../header/MobileMenu";
import TermsText from "./TermsText";

const index = () => {
    return (
        <>
            {/* <!-- Header Span --> */}
            <span className="header-span"></span>

            <LoginPopup />
            {/* End Login Popup Modal */}

            <DefaulHeader2 />
            {/* <!--End Main Header --> */}

            <MobileMenu />
            {/* End MobileMenu */}

            <section className="tnc-section">
                <div className="auto-container">
                    <div className="sec-title text-center">
                        <h2>Términos y Condiciones</h2>
                        <div className="text">Home / Términos y Condiciones</div>
                    </div>
                    {/* End sec-title */}
                    <TermsText />
                </div>
            </section>
            {/* <!-- End TNC Section --> */}

            <FooterDefault footerStyle="-type-13 alternate3" />
            {/* <!-- End Main Footer --> */}
        </>
    );
};

export default index;
