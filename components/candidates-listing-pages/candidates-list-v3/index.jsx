import FooterDefault from "../../footer/common-footer";
import LoginPopup from "../../common/form/login/LoginPopup";
import DefaulHeader2 from "../../header/DefaulHeader2";
import MobileMenu from "../../header/MobileMenu";
import FilterTopBox from "./FilterTopBox";
import JobSearchForm from "./JobSearchForm";

const Index = () => {
    return (
        <>
            <span className="header-span"></span>

            <LoginPopup />

            <DefaulHeader2 />

            <MobileMenu />

            <section className="layout-pt-60">
                <div className="auto-container">
                    <div className="row">
                        <div className="col position-relative">
                            <img src="../../images/resource/banner-oficios-chambita.jpg" className="banner-section-chamb" alt="" />
                            <h1 className="title-section-chamb">
                                Buscamos <br className="resp-break" />
                                soluciones
                            </h1>
                        </div>
                    </div>
                </div>
            </section>

            <section className="layout-pt-60">
                <div className="auto-container wow fadeInUp">
                    <div className="sec-title -type-2 text-center">
                        <h2>Candidatos</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing </p>
                    </div>
                </div>
            </section>

            <section className="style-two">
                <div className="auto-container">
                    <JobSearchForm />
                </div>
            </section>

            <section className="ls-section">
                <div className="auto-container">
                    <div className="row">
                        <div className="content-column col-lg-12 col-md-12 col-sm-12">
                            <div className="ls-outer">
                                <FilterTopBox />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <FooterDefault footerStyle="-type-13 alternate3" />
        </>
    );
};

export default Index;
