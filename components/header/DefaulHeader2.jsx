import Link from "next/link";
import { useEffect, useState } from "react";
import HeaderNavContent from "./HeaderNavContent";
import LoginPopup from "../common/form/login/LoginPopup";
import { useRouter } from "next/router";
import Image from "next/image";
import { isActiveLink } from "../../utils/linkActiveChecker";

const DefaulHeader2 = () => {
    const [navbar, setNavbar] = useState(false);

    const changeBackground = () => {
        if (window.scrollY >= 10) {
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", changeBackground);
    }, []);

    const [LoginModal, setLoginModal] = useState(false);
    const handleLoginClose = () => setLoginModal(false);
    const handleLoginShow = () => setLoginModal(true);

    const [RegisterModal, setRegisterModal] = useState(false);
    const handleRegisterClose = () => setRegisterModal(false);
    const handleRegisterShow = () => setRegisterModal(true);

    const LoginRegister = ()=> {
        setLoginModal(false);
        setRegisterModal(true);
    }
    
    const[displayusername, displayusernameupdate]=useState('');
    
    const username = localStorage.getItem("name");
    
    useEffect(() => {
        displayusernameupdate(username);
        //eslint-disable-next-line
    },[username])
    const router = useRouter();
    const logOut = () => { 
        displayusernameupdate('');
        localStorage.clear(); 
        router.push('/');
    }

    return (
        // <!-- Main Header-->
        <header className={`main-header ${navbar ? "fixed-header animated slideInDown" : ""}`}>
            <div className="main-box">
                <div className="nav-outer">
                    <div className="logo-box">
                        <div className="logo">
                            <Link href="/">
                                {/* <img src="/images/logo.svg" alt="brand" /> */}
                                <h2>CHAMBITA</h2>
                            </Link>
                        </div>
                    </div>
                    {/* End .logo-box */}

                    <HeaderNavContent />
                    {/* <!-- Main Menu End--> */}
                </div>
                <div className="outer-box">
                    {displayusername ? (
                        <div className="dropdown dashboard-option">
                            <a className="dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <Image alt="avatar" className="thumb" src="/images/resource/candidate-1.png" width={50} height={50} />
                                <span className="name">Hola, {displayusername}</span>
                            </a>

                            <ul className="dropdown-menu">
                                {/* {candidatesMenuData.map((item) => (
                                    <li className={`${isActiveLink(item.routePath, router.asPath) ? "active" : ""} mb-1`} key={item.id}>
                                        <Link href={item.routePath}>
                                            <i className={`la ${item.icon}`}></i> {item.name}
                                        </Link>
                                    </li>
                                ))} */}
                                <li className={`mb-1`}>
                                    <Link href="candidates-dashboard/my-profile">
                                        <i className="la la-user-tie"></i> Mi Perfil
                                    </Link>
                                </li>
                                <li className={`mb-1`}>
                                    <a onClick={logOut}>
                                        <i className="la la-sign-out"></i> Cerrar sesión
                                    </a>
                                </li>
                            </ul>
                        </div>
                    ):(
                        <div className="btn-box">
                        <button className="theme-btn btn-style-three" onClick={()=>{setLoginModal(!LoginModal)}}>
                            Inicio / Registro
                        </button>
                        <LoginPopup 
                            showLogin={LoginModal}
                            openLogin={handleLoginShow} 
                            closeLogin={handleLoginClose} 
                            showRegister={RegisterModal} 
                            closeRegister={handleRegisterClose}
                            LoginRegister={LoginRegister} 
                        />
                    </div>
                    )}
                </div>
            </div>
        </header>
    );
};

export default DefaulHeader2;
