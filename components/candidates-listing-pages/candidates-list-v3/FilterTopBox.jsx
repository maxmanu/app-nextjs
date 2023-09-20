import Link from "next/link";
import Pagination from "../components/Pagination";
import candidatesData from "../../../data/candidates";
import Slider from "react-slick";
import { useDispatch, useSelector } from "react-redux";
import {
    addCandidateGender,
    addCategory,
    addDatePost,
    addDestination,
    addKeyword,
    addLocation,
    addPerPage,
    addSort,
    clearExperienceF,
    clearQualificationF,
} from "../../../features/filter/candidateFilterSlice";
import { clearDatePost, clearExperience, clearQualification } from "../../../features/candidate/candidateSlice";

const FilterTopBox = () => {
    const { keyword, location, destination, category, candidateGender, datePost, experiences, qualifications, sort, perPage } =
        useSelector((state) => state.candidateFilter) || {};

    const dispatch = useDispatch();

    // keyword filter
    const keywordFilter = (item) => (keyword !== "" ? item?.name?.toLowerCase().includes(keyword?.toLowerCase()) && item : item);

    // location filter
    const locationFilter = (item) => (location !== "" ? item?.location?.toLowerCase().includes(location?.toLowerCase()) : item);

    // destination filter
    const destinationFilter = (item) => item?.destination?.min >= destination?.min && item?.destination?.max <= destination?.max;

    // category filter
    const categoryFilter = (item) => (category !== "" ? item?.category?.toLocaleLowerCase() === category?.toLocaleLowerCase() : item);

    // gender filter
    const genderFilter = (item) => (candidateGender !== "" ? item?.gender.toLocaleLowerCase() === candidateGender.toLocaleLowerCase() && item : item);

    // date-posted filter
    const datePostedFilter = (item) =>
        datePost !== "all" && datePost !== "" ? item?.created_at?.toLocaleLowerCase().split(" ").join("-").includes(datePost) : item;

    // experience filter
    const experienceFilter = (item) =>
        experiences?.length !== 0 ? experiences?.includes(item?.experience?.split(" ").join("-").toLocaleLowerCase()) : item;

    // qualification filter
    const qualificationFilter = (item) =>
        qualifications?.length !== 0 ? qualifications?.includes(item?.qualification?.split(" ").join("-").toLocaleLowerCase()) : item;

    // sort filter
    const sortFilter = (a, b) => (sort === "des" ? a.id > b.id && -1 : a.id < b.id && -1);

    const settings = {
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    // custom navigation
    function Arrow(props) {
        let className = props.type === "next" ? "slick-arrow slick-next oficios-arrow-next" : "slick-arrow slick-prev  oficios-arrow-back";
        className += " arrow";
        const char =
            props.type === "next" ? (
                <>
                    <span className="flaticon-next"></span>
                </>
            ) : (
                <>
                    <span className="flaticon-back"></span>
                </>
            );
        return (
            <button className={className} onClick={props.onClick}>
                {char}
            </button>
        );
    }
    let content = candidatesData
        ?.slice(perPage.start, perPage.end === 0 ? 10 : perPage.end)
        ?.filter(keywordFilter)
        ?.filter(locationFilter)
        ?.filter(destinationFilter)
        ?.filter(categoryFilter)
        ?.filter(genderFilter)
        ?.filter(datePostedFilter)
        ?.filter(experienceFilter)
        ?.filter(qualificationFilter)
        ?.sort(sortFilter)
        ?.map((candidate) => (
            <div className="candidate-block-four mb-4 col-lg-4 col-md-6 col-sm-12" key={candidate.id}>
                <div className="inner-box mx-auto">
                    <div className="candidate-head text-center pt-3 pb-3">
                        <figure className="image">
                            <img className="profesional-single-img" src={candidate?.avatar} alt="avatar" />
                        </figure>
                        <h3 className="name mb-0">
                            <Link href={`/candidates-single-v3/${candidate.id}`}>{candidate.name}</Link>
                        </h3>
                        <ul className="job-other-info">
                            <li className="green">Cuenta Verificada</li>
                        </ul>
                    </div>
                    <div className="wrapper-candidate">
                        <div className="candidate-card">
                            <small>2 oficios</small>
                            <Slider {...settings} nextArrow={<Arrow type="next" />} prevArrow={<Arrow type="prev" />}>
                                <div>
                                    <div className="title-oficio-card">
                                        <img src="../../images/icons/icon-trabajos-chambita.png" className="me-3 d-inline" alt="..." />
                                        <h4 className="cat d-inline-flex">{candidate.designation}</h4>
                                    </div>
                                    <div className="title-servicio-card">
                                        <span>Servicios:</span>
                                        <ul className="post-tags">
                                            {candidate.tags.map((val, i) => (
                                                <li key={i}>
                                                    <a href="#">{val}</a>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                                <div>
                                    <div className="title-oficio-card">
                                        <img src="../../images/icons/icon-trabajos-chambita.png" className="me-3 d-inline" alt="..." />
                                        <h4 className="cat d-inline-flex">{candidate.designation}</h4>
                                    </div>
                                    <div className="title-servicio-card">
                                        <span>Servicios:</span>
                                        <ul className="post-tags">
                                            {candidate.tags.map((val, i) => (
                                                <li key={i}>
                                                    <a href="#">{val}</a>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </Slider>
                        </div>
                    </div>
                    <div className="candidate-card">
                        <div className="job-info">
                            <div className="d-flex align-items-center">
                                <div className="flex-shrink-0">
                                    <img src="../../images/icons/icon-mapa-chambita.png" alt="..." />
                                </div>
                                <div className="flex-grow-1 ms-3">
                                    <p>
                                        <b>Suele trabajar en:</b>
                                        <br />
                                        {candidate.location}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="job-info">
                            <div className="d-flex align-items-center">
                                <div className="flex-shrink-0">
                                    <img src="../../images/icons/icon-experiencia-chambita.png" alt="..." />
                                </div>
                                <div className="flex-grow-1 ms-3">
                                    <span>8 años de experiencia</span>
                                </div>
                            </div>
                        </div>
                        <div className="job-info">
                            <div className="d-flex align-items-center">
                                <div className="flex-shrink-0">
                                    <img src="../../images/icons/icon-estrellas.png" alt="..." />
                                </div>
                                <div className="flex-grow-1 ms-3">
                                    <span>3 reseñas</span>
                                </div>
                            </div>
                        </div>
                        <Link href={`/candidates-single-v1/${candidate.id}`} className="theme-btn btn-style-three btn-chamb-card">
                            <i className="fa fa-user"></i> Ver perfil
                        </Link>
                    </div>
                </div>
            </div>
        ));

    // sort handler
    const sortHandler = (e) => {
        dispatch(addSort(e.target.value));
    };

    // per page handler
    const perPageHandler = (e) => {
        const pageData = JSON.parse(e.target.value);
        dispatch(addPerPage(pageData));
    };

    // clear handler
    const clearHandler = () => {
        dispatch(addKeyword(""));
        dispatch(addLocation(""));
        dispatch(addDestination({ min: 0, max: 100 }));
        dispatch(addCategory(""));
        dispatch(addCandidateGender(""));
        dispatch(addDatePost(""));
        dispatch(clearDatePost());
        dispatch(clearExperienceF());
        dispatch(clearExperience());
        dispatch(clearQualification());
        dispatch(clearQualificationF());
        dispatch(addSort(""));
        dispatch(addPerPage({ start: 0, end: 0 }));
    };
    return (
        <>
            <div className="ls-switcher">
                <div className="showing-result">Se han encontrado 25 coincidencias</div>
                <div className="sort-by">
                    {keyword !== "" ||
                    location !== "" ||
                    destination.min !== 0 ||
                    destination.max !== 100 ||
                    category !== "" ||
                    candidateGender !== "" ||
                    datePost !== "" ||
                    experiences?.length !== 0 ||
                    qualifications?.length !== 0 ||
                    sort !== "" ||
                    perPage?.start !== 0 ||
                    perPage?.end !== 0 ? (
                        <button
                            className="btn btn-danger text-nowrap me-2"
                            style={{ minHeight: "45px", marginBottom: "15px" }}
                            onClick={clearHandler}
                        >
                            Limpiar
                        </button>
                    ) : undefined}

                    <select onChange={sortHandler} className="chosen-single form-select ord-filter-chamb" value={sort}>
                        <option value="">Ordenar por</option>
                        <option value="asc">Nombre A - Z</option>
                        <option value="des">Nombre Z - A</option>
                        <option value="exp">Experiencia</option>
                        <option value="cal">Calificación</option>
                    </select>
                </div>
            </div>
            <div className="row">{content}</div>
            <Pagination />
        </>
    );
};

export default FilterTopBox;
