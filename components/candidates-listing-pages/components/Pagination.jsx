const Pagination = () => {
    return (
        <nav className="ls-pagination">
            <div className="col-pag">
                <div className="prev d-inline">
                    <a href="#">
                        <i className="fa fa-chevron-left"></i>
                    </a>
                </div>
                <div className="next d-inline">
                    <a href="#" className="current-page">
                        <i className="fa fa-chevron-right"></i>
                    </a>
                </div>
            </div>
            <div className="col-pag pt-3">
                <p>1 de 5</p>
            </div>
        </nav>
    );
};

export default Pagination;
