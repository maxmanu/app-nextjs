import SearchForm from "../../common/job-search/SearchForm";
import ImageBox from "./ImageBox";
import PopularSearch from "../PopularSearch";
import Link from "next/link";

const index = () => {
    return (
        <section className="banner-section -type-13">
            <div className="auto-container">
                <div className="row">
                    <div className="content-column col-lg-7 col-md-12 col-sm-12">
                        <div className="inner-column" data-aos="fade-up" data-aos-delay="500">
                            <div className="title-box">
                                <h3>
                                    Encuentra el
                                    <br /> oficio que
                                    <br /> necesitas
                                </h3>
                                <div className="text">Especialistas con experiencia</div>
                            </div>
                            <div className="wow fadeInUp" data-wow-delay="1500ms">
                                <div className="container-numb">
                                    <div className="row">
                                        <div className="col-sm-5 col-numb">
                                            <span className="title">+50</span>
                                            <br />
                                            Especialidades
                                        </div>
                                        <div className="col-2 border-right"></div>
                                        <div className="col-sm-5 col-numb">
                                            <span className="title">+100</span>
                                            <br />
                                            Clientes conformes
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="container-numb job-search-form wow fadeInUp mt-4" data-aos="fade-up" data-aos-delay="1500ms">
                                <SearchForm />
                            </div>
                        </div>
                    </div>
                    <div className="image-column col-lg-5 col-md-12">{/* <ImageBox /> */}</div>
                </div>
            </div>
        </section>
    );
};

export default index;
