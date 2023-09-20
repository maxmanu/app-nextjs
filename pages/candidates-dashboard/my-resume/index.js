import dynamic from "next/dynamic";
import Seo from "../../../components/common/Seo";
import MyResume from "../../../components/dashboard-pages/candidates-dashboard/my-resume";

const index = () => {
    return (
        <>
            <Seo pageTitle="Datos Profesionales" />
            <MyResume />
        </>
    );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
