const ContactForm = () => {
    return (
        <form>
            <div className="row">
                <div className="form-group col-lg-12 col-md-12 col-sm-12">
                    <div className="response"></div>
                </div>
                {/* End .col */}

                <div className="col-lg-6 col-md-12 col-sm-12 form-group">
                    <input type="text" name="username" className="username" placeholder="Ingresa tu nombre*" required />
                </div>
                {/* End .col */}

                <div className="col-lg-6 col-md-12 col-sm-12 form-group">
                    <input type="email" name="email" className="email" placeholder="Ingresa tu correo*" required />
                </div>
                {/* End .col */}

                <div className="col-lg-6 col-md-12 col-sm-12 form-group">
                    <input type="text" name="subject" className="subject" placeholder="Asunto" />
                </div>
                {/* End .col */}

                <div className="col-lg-6 col-md-12 col-sm-12 form-group">
                    <input type="text" name="tel" className="tel" placeholder="Celular" />
                </div>
                {/* End .col */}

                <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                    <textarea name="message" placeholder="Escríbe tu mensaje" required=""></textarea>
                </div>
                {/* End .col */}

                <div className="col-lg-12 col-md-12 col-sm-12 form-group text-center mt-4">
                    <button className="theme-btn btn-style-one" type="submit" id="submit" name="submit-form">
                        Envíar mensaje
                        <i className="fa fa-arrow-right" aria-hidden="true"></i>
                    </button>
                </div>
                {/* End .col */}
            </div>
        </form>
    );
};

export default ContactForm;
