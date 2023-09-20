import { useEffect, useState } from "react";
import { useRouter } from 'next/router'
import { toast } from "react-toastify";
import { Modal, Button } from "react-bootstrap";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Link from "next/link";

const LoginPopup = (props) => {
    const router = useRouter();

    const [username, usernameupdate] = useState('');
    const [passwordLogin, passwordupdate] = useState('');
    const [errors, setErrors] = useState({
        firstName: '',
        password: '',
    });
       
    const validate = () => {
        let result = true;
        if (!username) {
            result = false;
            setErrors(
               errors.firstName = 'Ingresa un nombre de usuario' 
            );
            //toast.warning('Ingresa un nombre de usuario');
        } else{
            setErrors(
                errors.firstName = ''
             );
        }
        
        if (!passwordLogin) {
            result = false;
            setErrors(
               { ...errors, password : 'Ingresa una contraseña' }
            );
            //toast.warning('Ingresa un nombre de usuario');
        } else{
            setErrors(
                { ...errors, password : '' }
             );
        }
        return result;
    }
   console.log(errors);
    const ProceedLoginusingAPI = (e) => {
        e.preventDefault();
        if (validate()) {
            let inputobj = { "correo" : username, "contrasena": passwordLogin };
            fetch("http://34.196.244.27:8180/chambita/securityService/login",{
                method:'POST',
                headers:{'content-type':'application/json'},
                body:JSON.stringify(inputobj)
            }).then((res) => {
                return res.json();
            }).then((resp) => {
                if ((resp.codigoError) === "000") {
                    localStorage.setItem('username', username);
                    localStorage.setItem('name', resp.listaObjeto[0].nombre);
                    localStorage.setItem('id', resp.listaObjeto[0].idUsuario);
                    toast.success(resp.mensaje,{
                        position: "top-center",
                        theme: "colored",
                    });
                    props.closeLogin();
                    // router.push('/candidates-dashboard/my-profile');
                }else{
                    toast.error(resp.mensaje, {
                        position: "top-center",
                        theme: "colored",
                    });
                }
            }).catch((err) => {
                toast.error('Login Failed due to :' + err.message);
            });
        }
    }
    
    const [nombre, nombrechange] = useState("");
    const [apellido, apellidochange] = useState("");
    const [email, emailchange] = useState("");
    const [password, passwordchange] = useState("");
    const [repassword, repasswordchange] = useState("");

    const tipoUsuario = "P";

    const IsValidate = () => {
        let isproceed = true;
     
        if (nombre === null || nombre === '') {
            isproceed = false;
            toast.warning('Nombre obligatorio')
        }
        if (email === null || email === '') {
            isproceed = false;
            toast.warning('Correo obligatorio')
        }
        if (password === null || password === '') {
            isproceed = false;
            toast.warning('Contraseña obligatoria')
        }
        // else{
        //     if(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email)){

        //     }else{
        //         isproceed = false;
        //         toast.warning('Please enter the valid email')
        //     }
        // }
        return isproceed;
    }

    const handlesubmit = (e) => {
        e.preventDefault();
        let regobj = { 
            "nombres": nombre,
            "apellidos": apellido,
            "correo": email,
            "contrasena": password,
            "tipoUsuario": tipoUsuario, 
        };
        if (IsValidate()) {
        fetch("http://34.196.244.27:8180/chambita/securityService/createUser", {
            method: "POST",
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(regobj)
        }).then((res) => {
            return res.json();
        }).then((resp) => {
            if ((resp.codigoError) === "000") {
                // localStorage.setItem('name' , nombre);
                // localStorage.setItem('username' , email);
                toast.success(resp.mensaje);
                props.closeRegister();
                props.openLogin();
                // router.push('/candidates-dashboard/my-profile');
            }else{
                toast.error(resp.mensaje);
            }
        }).catch((err) => {
            toast.error('Failed : ' + err.message);
        });
    }
}
    return (
        <>  
            <Modal
                show={props.showLogin}
                onHide={props.closeLogin}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                </Modal.Header>
                <Modal.Body>
                    <div id="login-modal">
                        <div className="login-form default-form">
                            <div className="form-inner">
                                <h3>Ingresa a Chambita</h3>

                                <form method="post" onSubmit={ProceedLoginusingAPI}>
                                    <div className="form-group">
                                        <label>Nombre de Usuario</label>
                                        <input value={username} onChange={e => usernameupdate(e.target.value)} type="text" name="username" placeholder="Nombre de Usuario" />
                                        { errors.firstName && (<small className="valid-alert" role="alert">{errors.firstName}</small>)}
                                    </div>

                                    <div className="form-group">
                                        <label>Contraseña</label>
                                        <input value={passwordLogin} onChange={e => passwordupdate(e.target.value)} type="password" name="password" placeholder="Contraseña" />
                                        { errors.password && (<small className="valid-alert" role="alert">{errors.password}</small>)}
                                    </div>

                                    <div className="form-group">
                                        <div className="field-outer">
                                            <div className="input-group checkboxes square">
                                                <input type="checkbox" name="remember-me" id="remember" />
                                                <label htmlFor="remember" className="remember">
                                                    <span className="custom-checkbox"></span> Recuerdame
                                                </label>
                                            </div>
                                            <a href="#" className="pwd">
                                                ¿Olvidaste tu contraseña?
                                            </a>
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <button className="theme-btn btn-style-one" type="submit" name="log-in">
                                            Ingresar
                                        </button>
                                    </div>
                                </form>

                                <div className="bottom-box">
                                    <div className="text">
                                        ¿Aún no tienes cuenta?{" "}
                                        {/* <Link href="/register">
                                            Regístrate
                                        </Link> */}
                                        <a onClick={props.LoginRegister}>Registrate</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>

            <Modal
                show={props.showRegister}
                onHide={props.closeRegister}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                </Modal.Header>
                 <Modal.Body>
                 <div id="login-modal">
                 <div className="login-form default-form">
                    <div className="form-inner">
                        <h3>Regístrate en Chambita</h3>
                        <Tabs>
                            <div className="form-group register-dual">
                                <TabList className="btn-box row">
                                    <Tab className="col-lg-6 col-md-12">
                                        <button className="theme-btn btn-style-four">
                                            <i className="la la-user"></i> Profesional
                                        </button>
                                    </Tab>

                                    <Tab className="col-lg-6 col-md-12">
                                        <button className="theme-btn btn-style-four" disabled>
                                            <i className="la la-briefcase"></i> Cliente
                                        </button>
                                    </Tab>
                                </TabList>
                            </div>

                            <TabPanel>
                            <form method="post" onSubmit={handlesubmit}>
                                <div className="form-group">
                                    <label>Nombres*</label>
                                    <input value={nombre} onChange={e => nombrechange(e.target.value)} type="text" name="name" placeholder="Nombre(s)"/>
                                </div>

                                <div className="form-group">
                                    <label>Apellidos</label>
                                    <input value={apellido} onChange={e => apellidochange(e.target.value)} type="text" name="lastname" placeholder="Apellidos"/>
                                </div>

                                <div className="form-group">
                                    <label>Correo Electrónico *</label>
                                    <input value={email} onChange={e => emailchange(e.target.value)} type="email" name="email" placeholder="Correo Electrónico"/>
                                </div>

                                <div className="form-group">
                                    <label>Contraseña *</label>
                                    <input value={password} onChange={e => passwordchange(e.target.value)} id="password-field" type="password" name="password" placeholder="Contraseña"/>
                                </div>

                                <div className="form-group">
                                    <label>Repetir Contraseña *</label>
                                    <input value={repassword} onChange={e => repasswordchange(e.target.value)} id="repassword-field" type="password" name="repassword" placeholder="Contraseña"/>
                                </div>
                                
                                <div className="form-group mb-2 d-flex align-items-center">
                                    <input className="form-check-input mt-0" type="checkbox" value=""/>
                                    <small className="ps-2">
                                        Estoy de acuerdo con los{" "}
                                        <Link href="/terms" target="_blank">
                                            términos y condiciones
                                        </Link>
                                        .
                                    </small>
                                </div>
                                <div className="form-group">
                                    <button className="theme-btn btn-style-one" type="submit">
                                        Registrarse
                                    </button>
                                </div>
                            </form>
                            <div className="bottom-box">
                                <div className="text">
                                    ¿Ya tienes cuenta?{" "}
                                    <Link href="/">
                                        Ingresa
                                    </Link>
                                </div>
                            </div>
                            </TabPanel>
                            <TabPanel>{/*<Form />*/}</TabPanel>
                        </Tabs>
                    </div>
                </div>
                </div>
                </Modal.Body>                       
            </Modal>
        </>
    );
};

export default LoginPopup;
