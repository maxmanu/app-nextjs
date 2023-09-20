import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { useRouter } from 'next/router'
import { useState } from "react";
import Link from "next/link";
import { toast } from "react-toastify";

const Register = () => {
    const router = useRouter();
    
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
                localStorage.setItem('name' , nombre);
                localStorage.setItem('username' , email);
                toast.success(resp.mensaje);
                router.push('/candidates-dashboard/my-profile');
            }else{
                toast.error(resp.mensaje);
            }
        }).catch((err) => {
            toast.error('Failed :' + err.message);
        });
    }
}
    return (
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
    );
};

export default Register;
