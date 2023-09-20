"use client";
import Link from "next/link";
import { ProSidebarProvider, Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
//import mobileMenuData from "../../../data/mobileMenuData";
import SidebarFooter from "./SidebarFooter";
import SidebarHeader from "./SidebarHeader";
import { isActiveLink, isActiveParentChaild } from "../../../utils/linkActiveChecker";
import HeaderNavContent from "../HeaderNavContent";

const Index = () => {

    return (
        <div className="offcanvas offcanvas-start mobile_menu-contnet" tabIndex="-1" id="offcanvasMenu" data-bs-scroll="true">
            <SidebarHeader />
            <ProSidebarProvider>
                <HeaderNavContent />
            </ProSidebarProvider>
            <SidebarFooter />
        </div>
    );
};

export default Index;
