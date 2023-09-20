import Link from "next/link";
import "react-circular-progressbar/dist/styles.css";
import { useDispatch, useSelector } from "react-redux";
import { menuToggle } from "../../features/toggle/toggleSlice";
import Stars from "../Stars";
import { Sidebar, Menu, MenuItem, SubMenu, ProSidebarProvider } from "react-pro-sidebar";
import { BsBriefcase, BsDoorOpen, BsFiles, BsLock, BsPencilSquare, BsPerson, BsPersonBoundingBox, BsWallet2 } from "react-icons/bs";
import { useEffect, useState } from "react";

const DashboardCandidatesSidebar = () => {
    const[displayusername,displayusernameupdate]=useState('');

    let username = localStorage.getItem("name");    
    useEffect(() => {
        displayusernameupdate(username);
        //eslint-disable-next-line
    }, [username]);

    const { menu } = useSelector((state) => state.toggle);
   
    const dispatch = useDispatch();
    // menu togggle handler
    const menuToggleHandler = () => {
        dispatch(menuToggle());
    };
    const [file, setFile] = useState();
    const onFileInputChange = (e) => {
        setFile(e.target.files[0]);
    };
    return (
        <div className={`user-sidebar ${menu ? "sidebar_open" : ""}`}>
            <div className="pro-header text-end pb-0 mb-0 show-1023">
                <div className="fix-icon" onClick={menuToggleHandler}>
                    <span className="flaticon-close"></span>
                </div>
            </div>

            <div className="sidebar-inner">
                <div className="user-details text-center">
                    {/* <figure className="image">
                        <img className="profesional-single-img" src="/images/resource/profesional-default-image.png" alt="avatar" />
                    </figure> */}
                    <div className="profile-pic mb-4">
                        <label className="-label" htmlFor="file">
                            <BsPersonBoundingBox />
                            <span className="ms-1">Cambiar</span>
                        </label>
                        <input id="file" type="file" onChange={onFileInputChange} accept="image/png,image/jpeg,image/gif" />
                        {file ? (
                            <img alt="Preview" width="200" src={URL.createObjectURL(file)} />
                        ) : (
                            <img src="/images/resource/profesional-default-image.png" width="200" />
                        )}
                    </div>
                    <h4 className="name d-inline">{displayusername}</h4><br/>
                    <img className="img-fluid" src="../images/resource/cuenta-verificada.png" alt="" />
                    <div>
                        {/* <Stars score={4} /> */}
                    </div>
                </div>
                <ProSidebarProvider>
                    <Sidebar>
                        <Menu renderExpandIcon={({ open }) => <span>{open ? "-" : "+"}</span>}>
                            <SubMenu label="Editar Perfil" icon={<BsPencilSquare />}>
                                <MenuItem routerLink={<Link href="/candidates-dashboard/my-profile" />} icon={<BsPerson />}>
                                    Datos Personales
                                </MenuItem>
                                <MenuItem routerLink={<Link href="/candidates-dashboard/my-resume" />} icon={<BsBriefcase />}>
                                    Datos Profesionales
                                </MenuItem>
                                <MenuItem routerLink={<Link href="/candidates-dashboard/cv-manager" />} icon={<BsFiles />}>
                                    Documentación
                                </MenuItem>
                            </SubMenu>
                            {/* <MenuItem routerLink={<Link href="/candidates-dashboard/packages" />} icon={<BsWallet2 />}>
                                Membresía
                            </MenuItem>
                            <MenuItem routerLink={<Link href="/candidates-dashboard/change-password" />} icon={<BsLock />}>
                                Cambiar clave
                            </MenuItem> */}
                            <MenuItem routerLink={<Link href="/" />} icon={<BsDoorOpen />}>
                                Cerrar sesión
                            </MenuItem>
                        </Menu>
                    </Sidebar>
                </ProSidebarProvider>
                {/* <ul className="navigation">
                    {candidatesuData.map((item) => (
                        <li
                            className={`${isActiveLink(item.routePath, router.asPath) ? "active" : ""} mb-1`}
                            key={item.id}
                            onClick={menuToggleHandler}
                        >
                            <Link href={item.routePath}>
                                <i className={`la ${item.icon}`}></i> {item.name}
                            </Link>
                        </li>
                    ))}
                </ul> */}
            </div>
        </div>
    );
};

export default DashboardCandidatesSidebar;
