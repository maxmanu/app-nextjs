const BreadCrumb = ({ title = "" }) => {
    return (
        <div className="upper-title-box">
            <h4>
                <b>Perfil</b> - {title}
            </h4>
        </div>
    );
};

export default BreadCrumb;
