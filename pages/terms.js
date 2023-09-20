import dynamic from "next/dynamic";
import Seo from "../components/common/Seo";
import FooterDefault from "../components/footer/common-footer";
import DefaulHeader2 from "../components/header/DefaulHeader2";
import MobileMenu from "../components/header/MobileMenu";
import LoginPopup from "../components/common/form/login/LoginPopup";
import TermsText from "../components/pages-menu/terms/TermsText";

const index = () => {
    return (
        <>
            <Seo pageTitle="Terms" />
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

export default dynamic(() => Promise.resolve(index), { ssr: false });
