import { useEffect, useState } from "react";
//import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const FormInfoBox = () => {
    // const {
    //     register,
    //     formState: { errors },
    //     handleSubmit,
    // } = useForm();

    const [userdata, setUserData] = useState({});
    const [pais, setPais]= useState([]);
    const [departamento, setDepartamento]= useState([]);
    const [departamentoid, setDepartamentoid]= useState('');
    const [provincia, setProvincia]= useState([]);
    const [provinciaid, setProvinciaid]= useState('');
    const [distrito, setDistrito]= useState([]);
    const [distritoid, setDistritoid]= useState('');

    const [pai, setPai] = useState('');
    const [dep, setDep] = useState('');
    const [prov, setProv] = useState('');
    const [distr, setDistr] = useState('');

    const [enable, setEnable]= useState(true);

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [dni, setDni] = useState('');
    const [edad, setEdad] = useState('');
    const [celular, setCelular] = useState('');
    const [isCheckedWhatsapp, setIsCheckedWhatsapp] = useState(false);
    const [telefono, setTelefono] = useState('');
    const [direccion, setDireccion] = useState('');

    const profesionalId = localStorage.getItem("id");
    
    useEffect( ()=>{
        const getuser= async ()=>{
            const estado = { "idUsuario" : profesionalId };
            const req= await fetch("http://34.196.244.27:8180/chambita/professionalService/getPersonalData", {
                method:'POST',
                headers:{'content-type':'application/json'},
                body:JSON.stringify(estado)
            });
            const getres= await req.json();
            const dataUser = getres.listaObjeto[0];
            setUserData(dataUser);
            if(profesionalId) {

                const listapaises = await getpais();
                setPais(listapaises);

                const listadepartamentos = await getdepartamento();
                setDepartamento(listadepartamentos);
    
                const listprovincias = await getprovincia(dataUser.departamentoPersonal);
                setProvincia(listprovincias);
    
                const listadistritos = await getdistrito(dataUser.provinciaPersonal);
                setDistrito(listadistritos);
    
                setPai(dataUser.pais);
                setDep(dataUser.departamentoPersonal);
                setProv(dataUser.provinciaPersonal);
                setDistr(dataUser.distritoPersonal);
                setFirstName(dataUser.nombres)
                setLastName(dataUser.apellidos)
                setEmail(dataUser.correo)
                setDni(dataUser.nroDocumento)
                setEdad(dataUser.edad)
                setCelular(dataUser.celular)
                setIsCheckedWhatsapp(dataUser.flagWhatsapp)
                setTelefono(dataUser.telefono)
                setDireccion(dataUser.direccionPersonal)
            }
        }
        getuser();
    },[]);

    const getpais= async ()=>{
        let body = { "nombreCampo" : "pais" };
        const req= await fetch("http://34.196.244.27:8180/chambita/parameterService/read", {
            method:'POST',
            headers:{'content-type':'application/json'},
            body:JSON.stringify(body)
        });
        const getres= await req.json();
        const paises = getres.listaObjeto;
        return paises;
    }

    const getdepartamento= async ()=>{
        let body = { "nombreCampo" : "departamento" };
        const req= await fetch("http://34.196.244.27:8180/chambita/parameterService/read", {
            method:'POST',
            headers:{'content-type':'application/json'},
            body:JSON.stringify(body)
        });
        const getres= await req.json();
        const departamentos = getres.listaObjeto;
        return departamentos;
    }

    const getprovincia = async (departamentoid)=>{
        let body = { "nombreCampo": "provincia","idParametroPadre": departamentoid };
        const req= await fetch("http://34.196.244.27:8180/chambita/parameterService/read", {
            method:'POST',
            headers:{'content-type':'application/json'},
            body:JSON.stringify(body)
        });
        const getres= await req.json();
        const provincias = getres.listaObjeto;
        return provincias;
    }

    const getdistrito = async (provinciaid)=>{
        let body = { "nombreCampo": "distrito","idParametroPadre": provinciaid };
        const req= await fetch("http://34.196.244.27:8180/chambita/parameterService/read", {
            method:'POST',
            headers:{'content-type':'application/json'},
            body:JSON.stringify(body)
        });
        const getres= await req.json();
        const distritos = getres.listaObjeto;
        return distritos;
    }

    useEffect( ()=>{
        const getprovincia= async ()=>{
            let body = { "nombreCampo": "provincia","idParametroPadre": dep };
            const req= await fetch("http://34.196.244.27:8180/chambita/parameterService/read", {
                method:'POST',
                headers:{'content-type':'application/json'},
                body:JSON.stringify(body)
            });
            const getres= await req.json();
            const provincias = getres.listaObjeto;
            setProvincia(provincias);
        }
        getprovincia();
    },[dep]);
    
    const handledepartamento= async(event)=>{
        const getdepartamentoid= event.target.value;
        setDepartamentoid(getdepartamentoid);
        setDep(getdepartamentoid);
        setDistr('')
        if(getdepartamentoid == '')
        {
            setProvincia([]);
            setEnable(true); 
        };
    }

    const handleprovincia= (e)=> {
        const getprovinciaid= e.target.value;
        setProvinciaid(getprovinciaid);
        setProv(getprovinciaid);
        if(getprovinciaid!=='')
        {
            const getdistrito= async ()=>{
                let distrito = { "nombreCampo": "distrito","idParametroPadre": getprovinciaid };
                const req= await fetch(`http://34.196.244.27:8180/chambita/parameterService/read`, {
                    method:'POST',
                    headers:{'content-type':'application/json'},
                    body:JSON.stringify(distrito)
            });
                const getst= await req.json();
                const distritos2 = getst.listaObjeto;
                setDistrito(await distritos2);
                setEnable(false); 
            }
            getdistrito();
        } else {
            setDistrito([]);
            setEnable(true); 
        }
    }

    const handledistrito = (e) => {
        const getdistritoid= e.target.value;
        setDistritoid(getdistritoid);
        setDistr(getdistritoid);
    }

    const handlepais = (e) => {
        const getpaisid= e.target.value;
        setPai(getpaisid);
    }
    console.log(pai)
    const handleSubmit = (e) => {
        e.preventDefault();
        const estado = {
			"idUsuario": profesionalId,
			"nombres": firstName,
            "apellidos": lastName,
            "nroDocumento": dni,
            "nacionalidad": "Perú",
            "correo": email,
            "edad": edad,
            "celular": celular,
            "telefono": telefono,
            "flagWhatsapp": isCheckedWhatsapp,
            "departamentoPersonal": dep,
            "provinciaPersonal": prov,
            "distritoPersonal": distr,
            "direccionPersonal": direccion
            };
            fetch("http://34.196.244.27:8180/chambita/professionalService/updatePersonalData", {
                method:'PUT',
                headers:{'content-type':'application/json'},
                body:JSON.stringify(estado)
            }).then((res) =>{
                return res.json();
            }).then((resp) => {
                if((resp.codigoError) === "000"){
                    toast.success(resp.mensaje, {
                        position: "top-center",
                        theme: "colored",
                    });
                }else {
                    toast.error(resp.mensaje, {
                        position: "top-center",
                        theme: "colored",
                    });
                }
            }).catch((err) => {
                toast.error('Hubo un fallo al actualizar: ' + err.message)
            })
    };

    console.log(userdata)

    return (
        <form
            onSubmit={handleSubmit}
            className="default-form"
        >
            <div className="row">
                <div className="form-group col-lg-6 col-md-12">
                    <label>Nombres*</label>
                    <input
                        onChange={(e)=>{setFirstName(e.target.value)}}
                        value={firstName || ''}
                        type="text"
                        placeholder="Ingresa tus nombres*"
                        // aria-invalid={errors.firstName ? "true" : "false"}
                    />
                    {/* {errors.firstName?.type === "required" && (
                        <small className="valid-alert" role="alert">
                            El nombre es requerido
                        </small>
                    )} */}
                </div>

                <div className="form-group col-lg-6 col-md-12">
                    <label>Apellidos*</label>
                    <input onChange={(e)=>{setLastName(e.target.value)}}
                        value={lastName || ''}
                        type="text" placeholder="Ingresa tus apellidos*" />
                    {/* {errors.lastName?.type === "required" && (
                        <small className="valid-alert" role="alert">
                            El apellido es requerido
                        </small>
                    )} */}
                </div>

                <div className="form-group col-lg-6 col-md-12">
                    <label>DNI o Carnet de Extranjería*</label>
                    <input onChange={(e)=>{setDni(e.target.value)}}
                        value={dni || ''} type="text" placeholder="Ingresa tu Nº" />
                    {/* {errors.dni?.type === "required" && (
                        <small className="valid-alert" role="alert">
                            El dni o carnet es requerido
                        </small>
                    )} */}
                </div>

                <div className="form-group col-lg-6 col-md-12">
                    <label>País de Procedencia</label>
                    <select name="pais" className="form-control" value={pai} onChange={(e)=>handlepais(e)}>
                        <option value="0">Seleccionar</option>
                        {pais.map((getcon)=>(
                            <option key={getcon.idParametro} value={getcon.idParametro}> {getcon.valor}</option>
                            ))
                        }
                    </select>
                </div>

                <div className="form-group col-lg-6 col-md-12">
                    <label>Email</label>
                    <input disabled onChange={(e)=>{setEmail(e.target.value)}}
                        value={email || ''} type="email" placeholder="Ingresa tu correo*" />
                    {/* {errors.email?.type === "required" && (
                        <small className="valid-alert" role="alert">
                            El correo es requerido
                        </small>
                    )} */}
                </div>

                <div className="form-group col-lg-6 col-md-12">
                    <label>Edad</label>
                    <input onChange={(e)=>{setEdad(e.target.value)}}
                        value={edad || '0'} type="text" name="name" placeholder="" />
                </div>

                <div className="form-group col-lg-6 col-md-12">
                    <label>Celular*</label>
                    <input onChange={(e)=>{setCelular(e.target.value)}} value={celular || ''} type="text" placeholder="" />
                    {/* {errors.celular?.type === "required" && (
                        <small className="valid-alert" role="alert">
                            El celular es requerido
                        </small>
                    )} */}
                    <div className="mb-3 form-check">
                        <input checked={isCheckedWhatsapp} onChange={(e)=>{setIsCheckedWhatsapp(e.target.checked)}} value={isCheckedWhatsapp || ''} type="checkbox" className="form-check-input whats-check" id="whatsappCheck" />
                        <label className="form-check-label" htmlFor="whatsappCheck">
                            Este número tiene Whatsapp
                        </label>
                    </div>
                </div>

                <div className="form-group col-lg-6 col-md-12">
                    <label>Teléfono</label>
                    <input onChange={(e)=>{setTelefono(e.target.value)}} value={telefono || ''} type="text" name="name" placeholder="" />
                </div>

                <div className="form-group col-lg-4 col-md-12">
                    <label>Departamento</label>
                    <select name="departamento" className="form-control" value={dep || ''} onChange={(e)=>handledepartamento(e)}>
                        <option value="0">Seleccionar</option>
                        {departamento.map((getcon)=>(
                            <option key={getcon.idParametro} value={getcon.idParametro}> {getcon.valor}</option>
                            ))
                        }
                    </select>
                </div>

                <div className="form-group col-lg-4 col-md-12">
                    <label>Provincia</label>
                    <select name="provincia" value={prov || ''} className="form-control" onChange={(e)=>handleprovincia(e)}>
                        <option value="0">Seleccionar</option>
                        {provincia.map( (getsat)=>(                    
                            <option key={getsat.idParametro} value={getsat.idParametro}>{getsat.valor}</option>
                            ))
                        }
                    </select>
                </div>

                <div className="form-group col-lg-4 col-md-12">
                    <label>Distrito</label>
                    <select name="distrito" value={distr || ''} className="form-control" onChange={(e)=>handledistrito(e)}>
                        <option value="0">Seleccionar</option>
                        {distrito.map( (getsat)=>(                    
                            <option key={getsat.idParametro} value={getsat.idParametro}>{getsat.valor}</option>
                            ))
                        }
                    </select>
                </div>

                <div className="form-group col-lg-12 col-md-12">
                    <label>Dirección</label>
                    <input onChange={(e)=>{setDireccion(e.target.value)}}
                    value={direccion || ''}
                    type="text" 
                    name="direccion" 
                    placeholder="Ingresa tu dirección" />
                </div>

                <div className="form-group col-lg-6 col-md-12">
                    <button type="submit" className="theme-btn btn-style-one">
                        Guardar
                    </button>
                </div>
            </div>
        </form>
    );
};

export default FormInfoBox;
