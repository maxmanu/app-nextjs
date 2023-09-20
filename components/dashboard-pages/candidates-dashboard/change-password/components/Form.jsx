const Form = () => {
    return (
        <form className="default-form">
            <div className="row">
                {/* <!-- Input --> */}
                <div className="form-group col-lg-7 col-md-12">
                    <label>Contraseña Actual</label>
                    <input type="password" name="name" required />
                </div>

                {/* <!-- Input --> */}
                <div className="form-group col-lg-7 col-md-12">
                    <label>Contraseña Nueva</label>
                    <input type="password" name="name" required />
                </div>

                {/* <!-- Input --> */}
                <div className="form-group col-lg-7 col-md-12">
                    <label>Confirmar Contraseña</label>
                    <input type="password" name="name" required />
                </div>

                {/* <!-- Input --> */}
                <div className="form-group col-lg-6 col-md-12">
                    <button type="submit" className="theme-btn btn-style-one">
                        Actualizar
                    </button>
                </div>
                <small className="pb-3">* Recuerda que al cambiar tu clave te llegará una notificación a tu correo regístrado.</small>
            </div>
        </form>
    );
};

export default Form;
