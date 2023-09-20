import dynamic from "next/dynamic";
import Link from "next/link";
import Seo from "../components/common/Seo";

const index = () => {
  return (
    <>
      <Seo pageTitle="Page Not Found" />
      <div
        className="error-page-wrapper "
        style={{
          backgroundImage: `url(/images/404.jpg)`,
        }}
        data-aos="fade"
      >
        <div className="content">
          <div className="logo">
            {/* <Link href="/">
              <img src="/images/logo.svg" alt="brand" />
            </Link> */}
                <Link href="/">
                    {/* <img src="/images/logo.svg" alt="brand" /> */}
                    <h2>CHAMBITA</h2>
                </Link>
          </div>
          {/* End logo */}

          <h1>¡404!</h1>
          <p>No podemos encontrar la página que buscas.</p>

          <Link className="theme-btn btn-style-three call-modal" href="/">
            Regresar al Inicio
          </Link>
        </div>
        {/* End .content */}
      </div>
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
