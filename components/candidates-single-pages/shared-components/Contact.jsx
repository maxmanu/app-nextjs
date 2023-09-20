import StarRating from "../../StarRating";

const Contact = () => {
    return (
        <form>
            <div className="row clearfix">
                <div className="col-auto">
                    <figure className="image">
                        <img className="profesional-single-img" src="/images/resource/profesional-default-image.png" alt="avatar" />
                    </figure>
                </div>

                <div className="col-lg-10 form-group">
                    <textarea className="darma" name="message" placeholder="¿Como te fue con el servicio?"></textarea>
                    <div className="row mt-4">
                        <div className="col-md-6">
                            <StarRating />
                        </div>
                        <div className="col-md-6">
                            <button className="theme-btn btn-style-one" type="submit" name="submit-form">
                                Publicar comentario
                                <i className="fa fa-arrow-right" aria-hidden="true"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default Contact;
