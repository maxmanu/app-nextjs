import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import MobileMenu from "../../../header/MobileMenu";
import DashboardCandidatesSidebar from "../../../header/DashboardCandidatesSidebar";
import BreadCrumb from "../../BreadCrumb";
import MyProfile from "./components/my-profile";
import CopyrightFooter from "../../CopyrightFooter";
import DefaulHeader2 from "../../../header/DefaulHeader2";
import MenuToggler from "../../MenuToggler";
import Link from "next/link";
import { toast } from "react-toastify";

const Index = () => {
    const router = useRouter();

    // if (username === "" || username === null) {
    //     router.push('/');
    // }    
    const[displayusername, displayusernameupdate]=useState('');

    useEffect(() => {
        let username = localStorage.getItem("username");
        displayusernameupdate(username);
        if (username === "" || username === null) {
            displayusernameupdate("");
            router.push('/');
        }
        //eslint-disable-next-line
    }, [displayusername]);
    
    return (
        <div className="page-wrapper dashboard">
            <span className="header-span"></span>

            {/* <LoginPopup /> */}
        	
            <DefaulHeader2 />

            <MobileMenu />

            <DashboardCandidatesSidebar />

            <section className="user-dashboard">
                <div className="dashboard-outer">
                    <div className="row">
                        <div className="col-md-6">
                            <BreadCrumb title="Datos Personales" />
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
                                    <MyProfile />
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
