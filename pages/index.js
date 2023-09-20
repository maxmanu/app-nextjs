import dynamic from "next/dynamic";
import Seo from "../components/common/Seo";
import Home13 from "../components/home-13";

const index = () => {
    return (
        <>
            <Seo pageTitle="Chambita" />
            <Home13 />
        </>
    );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
