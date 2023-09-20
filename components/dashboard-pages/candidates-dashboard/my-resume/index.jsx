import { useRouter } from "next/router";
import MobileMenu from "../../../header/MobileMenu";
import LoginPopup from "../../../common/form/login/LoginPopup";
import DashboardCandidatesSidebar from "../../../header/DashboardCandidatesSidebar";
import BreadCrumb from "../../BreadCrumb";
import CopyrightFooter from "../../CopyrightFooter";
import Resume from "./components";
import DefaulHeader2 from "../../../header/DefaulHeader2";
import MenuToggler from "../../MenuToggler";
import Link from "next/link";

const Index = () => {
    const router = useRouter();  

    let username = localStorage.getItem("username");
    
    if (username === "" || username === null) {
        router.push('/');
    } 

    return (
        <div className="page-wrapper dashboard">
            <span className="header-span"></span>

            <LoginPopup />

            <DefaulHeader2 />

            <MobileMenu />

            <DashboardCandidatesSidebar />

            <section className="user-dashboard">
                <div className="dashboard-outer">
                    <div className="row">
                        <div className="col-md-6">
                            <BreadCrumb title="Datos Profesionales" />
                        </div>
                        <div className="col-md-6 text-end">
                            <Link href="/" className="theme-btn btn-style-one">
                                Ver Perfil
                            </Link>
                        </div>
                    </div>

                    <MenuToggler />

                    <div className="row">
                        <div className="col-lg-12">
                            <div className="ls-widget">
                                <div className="tabs-box pt-5">
                                    <div className="widget-content">
                                        <Resume />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <CopyrightFooter />
        </div>
    );
};

export default Index;
