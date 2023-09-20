import { useEffect } from "react";
import { useRouter } from "next/router";
import MobileMenu from "../../../header/MobileMenu";
import LoginPopup from "../../../common/form/login/LoginPopup";
import DashboardCandidatesSidebar from "../../../header/DashboardCandidatesSidebar";
import BreadCrumb from "../../BreadCrumb";
import CopyrightFooter from "../../CopyrightFooter";
import DefaulHeader2 from "../../../header/DefaulHeader2";
import MenuToggler from "../../MenuToggler";
import Swal from "sweetalert2";

const Index = () => {
    const router = useRouter();

    let username = localStorage.getItem("username");
    
    if (username === "" || username === null) {
        router.push('/');
    } 

    const handleSubmit = (event) => {
        event.preventDefault();
    };

    const handleClick = () => {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Algo salió mal!",
        });
    };
    
    return (
        <div className="page-wrapper dashboard">
            <span className="header-span"></span>

            <LoginPopup />

            <DefaulHeader2 />

            <MobileMenu />

            <DashboardCandidatesSidebar />

            <section className="user-dashboard">
                <div className="dashboard-outer">
                    <BreadCrumb title="Documentación" />

                    <MenuToggler />

                    <div className="row">
                        <div className="col-lg-12">
                            <div className="ls-widget">
                                <div className="widget-title">
                                    <h4>Adjunta la documentación solicitada</h4>
                                </div>
                                <div className="widget-content">
                                    <form onSubmit={handleSubmit} className="default-form">
                                        <div className="cv-manager-widget">
                                            <div className="row">
                                                <div className="form-group col-lg-6 col-offset-6 col-md-12">
                                                    <label>Certificado antecedentes policiales</label>
                                                    <input className="form-control" type="file" id="formFile1" />
                                                </div>

                                                <div className="form-group col-lg-6 col-offset-6 col-md-12">
                                                    <label>Certificado antecedentes penales</label>
                                                    <input className="form-control" type="file" id="formFile2" />
                                                </div>

                                                <div className="form-group col-lg-6 col-offset-6 col-md-12">
                                                    <label>DNI, Pasaporte o Carnet de extranjería</label>
                                                    <input className="form-control" type="file" id="formFile3" />
                                                    <small>En formato PDF o JPG peso máx. 25 mb</small>
                                                </div>

                                                <div className="form-group col-lg-6 col-offset-6 col-md-12">
                                                    <label>Otros</label>
                                                    <input className="form-control" type="file" id="formFile4" />
                                                    <small>En formato PDF o JPG peso máx. 25 mb</small>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group col-lg-12 col-md-12">
                                            <button onClick={handleClick} type="submit" className="theme-btn btn-style-one">
                                                Guardar
                                            </button>
                                        </div>
                                    </form>
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
