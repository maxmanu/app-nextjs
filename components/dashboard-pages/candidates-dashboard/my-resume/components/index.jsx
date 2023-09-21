import { useEffect, useState } from "react";
import Select from "react-select";
import RepeaterFieldOs from "../../../../RepeaterFieldOs";
import RepeaterFieldEd from "../../../../RepeaterFieldEd";
import RepeaterFieldEx from "../../../../RepeaterFieldEx";
//import { PlusOutlined } from '@ant-design/icons';
//import { Modal, Upload } from 'antd';

// const getBase64 = (file) =>
//   new Promise((resolve, reject) => {
//     const reader = new FileReader();
//     reader.readAsDataURL(file);
//     reader.onload = () => resolve(reader.result);
//     reader.onerror = (error) => reject(error);
// });

const Index = () => {

    const [userdata, setUserData] = useState({});    
    const [departamento, setDepartamento]= useState([]);
    const [departamentoid, setDepartamentoid]= useState('');
    const [provincia, setProvincia]= useState([]);
    const [provinciaid, setProvinciaid]= useState('');
    const [distrito, setDistrito]= useState([]);
    const [distritoid, setDistritoid]= useState('');

    const [dep, setDep] = useState();
    const [prov, setProv] = useState('');
    const [distr, setDistr] = useState('');

    const [enable, setEnable]= useState(true);

    const [experiencia, setExperiencia] = useState('');
    const [descripcion, setDescripcion] = useState('');

    useEffect( () => {
        const getuser= async ()=>{
            const profesionalId = localStorage.getItem("id");
            const estado = { "idUsuario" : profesionalId };
            const req= await fetch("http://34.196.244.27:8180/chambita/professionalService/getProfessionalData", {
                method:'POST',
                headers:{'content-type':'application/json'},
                body:JSON.stringify(estado)
            });
            const getres= await req.json();
            const dataUser = getres.listaObjeto[0];
            console.log('======== INDEX dataUser =====', dataUser)
            setUserData(dataUser);

            const listadepartamentos = await getdepartamento();
            setDepartamento(listadepartamentos);

            const listprovincias = await getprovincia(dataUser.departamentoPersonal);
            setProvincia(listprovincias);

            const listadistritos = await getdistrito(dataUser.provinciaPersonal);
            setDistrito(listadistritos);

            setDep(dataUser.departamentoPersonal);
            setProv(dataUser.provinciaPersonal);
            setDistr(dataUser.distritoPersonal);
            setExperiencia(dataUser.tiempoExperiencia);
            setDescripcion(dataUser.descripcion);
        }
        getuser();
    },[]);
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
        console.log(getdepartamentoid);
        setDepartamentoid(getdepartamentoid);
        setDep(getdepartamentoid);
        setSelectedOptions([]);
        setDistrito([]);
        if(getdepartamentoid=='')
        {
            setProvincia([]);
            setEnable(true); 
        }
    }

    const handleprovincia= (e)=> {
        const getprovinciaid= e.target.value;
        setProvinciaid(getprovinciaid);
        if(getprovinciaid!=='')
        {
            setSelectedOptions([]);
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
    }

    const arr = [];
    distrito.map((item)=> {
        return arr.push({ value: item.idParametro, label: item.valor})
    })

    const [day, setDay] = useState([
        {
            id: "1",
            dayName: "Lunes",
        },
        {
            id: "2",
            dayName: "Martes",
        },
        {
            id: "3",
            dayName: "Miércoles",
        },
        {
            id: "4",
            dayName: "Jueves",
        },
        {
            id: "5",
            dayName: "Viernes",
        },
        {
            id: "6",
            dayName: "Sábado",
        },
        {
            id: "7",
            dayName: "Domingo",
        },
    ]);
    const [checked, setChecked] = useState([]);

    const handleCheckAllChange = (e) => {
        if (e.target.checked) {
            const allDays = day.map((c) => c.dayName);
            setChecked(allDays);
        } else {
            setChecked([]);
        }
    };
    
    const handleDayChange = (e, c) => {
        if (e.target.checked) {
            setChecked([...checked, c.dayName]);
        } else {
            setChecked(checked.filter((item) => item !== c.dayName));
        }
    };

    const [menuIsOpen, setMenuIsOpen] = useState(false);

    // const [previewOpen, setPreviewOpen] = useState(false);
    // const [previewImage, setPreviewImage] = useState('');
    // const [previewTitle, setPreviewTitle] = useState('');
    // const [fileList, setFileList] = useState([]);
    // const handleCancel = () => setPreviewOpen(false);
    // const handlePreview = async (file) => {
    //     if (!file.url && !file.preview) {
    //     file.preview = await getBase64(file.originFileObj);
    //     }
    //     setPreviewImage(file.url || file.preview);
    //     setPreviewOpen(true);
    //     setPreviewTitle(file.name || file.url.substring(file.url.lastIndexOf('/') + 1));
    // };
    // const handleChange = ({ fileList: newFileList }) => setFileList(newFileList);
    // const uploadButton = (
    //     <div>
    //         <PlusOutlined />
    //         <div
    //             style={{
    //             marginTop: 8,
    //             }}
    //         >
    //             Subir
    //         </div>
    //     </div>
    // );
     
    const [selectedOptions, setSelectedOptions] = useState([]);

    const handleSubmit = (event) => {
        event.preventDefault();
        const estado = {
			"idUsuario": profesionalId,
			"jobProfessionalDTO": [
                {
                    "idOficio": 5,
                    "idServicio": 1
                },
                {
                    "idOficio": 5,
                    "idServicio": 2
                },
                {
                    "idOficio": 5,
                    "idServicio": 3
                },
                {
                    "idOficio": 10,
                    "idServicio": 4
                },
                {
                    "idOficio": 10,
                    "idServicio": 5
                }
            ],
            "departamento": "15",
            "provincia": "160",
            "distritos": "1610,1611,1612",
            "tiempoExperiencia": 0,
            "disponibilidad": "1,3,5",
            "descripcion": "Descripcion de Prueba 123",
            "listaFotos": [],
            "educationDTO": [],
            "experienceDTO": []
            };
            const req= fetch("http://34.196.244.27:8180/chambita/professionalService/updatePersonalData", {
                method:'PUT',
                headers:{'content-type':'application/json'},
                body:JSON.stringify(estado)
            });
    };

    return (
        <form onSubmit={handleSubmit} className="default-form">
            <div className="row">
                <div className="col-lg-12">
                    <RepeaterFieldOs userDataFetched={userdata}/>
                </div>

                <div className="form-group col-lg-9 col-md-12">
                    <label>Sueles trabajar en:</label>
                    <select name="departamento" className="form-control" value={dep} onChange={(e)=>handledepartamento(e)}>
                        <option value="0">Seleccionar</option>
                        {departamento.map((getcon)=>(
                            <option key={getcon.idParametro} value={getcon.idParametro}> {getcon.valor}</option>
                            ))
                        }
                    </select>
                    <select name="provincia" value={prov} className="form-control" onChange={(e)=>handleprovincia(e)}>
                        <option value="0">Seleccionar</option>
                        {provincia.map( (getsat)=>(                    
                            <option key={getsat.idParametro} value={getsat.idParametro}>{getsat.valor}</option>
                            ))
                        }
                    </select>
                    <Select
                        isMulti
                        name="colors"
                        options={arr}
                        value={selectedOptions}
                        onChange={(e) => setSelectedOptions(e)}
                        isOptionDisabled={() => selectedOptions.length >= 3}
                        className="basic-multi-select"
                        classNamePrefix="select"
                        required
                        placeholder={"Busca por distrito"}
                        noOptionsMessage={() => "Sin coincidencias"}
                    />
                </div>

                <div className="form-group col-lg-3 col-md-12">
                    <label>Experiencia:</label>
                    <input onChange={(e)=>{setExperiencia(e.target.value)}} value={experiencia || ''} type="number" min={0} max={80} name="years_experience" placeholder="Años" required />
                </div>

                <div className="form-group disponib col-lg-12 col-md-12">
                    <label>Disponibilidad:</label> <br />
                    <div className="form-check">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            id="selectAll"
                            checked={checked.length === day.length}
                            onChange={handleCheckAllChange}
                        />
                        <label className="form-check-label" htmlFor="selectAll">
                            Todos los días
                        </label>
                    </div>
                    {day.map((c) => (
                        <div className="form-check" key={c.id}>
                            <input
                                className="form-check-input"
                                type="checkbox"
                                id={c.id}
                                checked={checked.includes(c.dayName)}
                                onChange={(e) => handleDayChange(e, c)}
                            />
                            <label className="form-check-label" htmlFor={c.id}>
                                {c.dayName}
                            </label>
                        </div>
                    ))}
                </div>
                <div className="form-group col-lg-12 col-md-12">
                    <label>Cuéntanos sobre de ti </label>
                    <textarea onChange={(e)=>{setDescripcion(e.target.value)}} value={descripcion || ''} placeholder="....Ingresa una breve descripción del oficio que realizas"></textarea>
                </div>

                {/* <label>Agrega fotos sobre tu trabajo</label>        
                <div className="form-group col-lg-6 col-md-12">
                    <Upload
                        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                        listType="picture-card"
                        fileList={fileList}
                        onPreview={handlePreview}
                        onChange={handleChange}
                    >
                        {fileList.length > 2 ? null : uploadButton}
                    </Upload>
                    <Modal open={previewOpen} title={previewTitle} footer={null} onCancel={handleCancel}>
                        <img
                        alt="example"
                        style={{
                            width: '100%',
                        }}
                        src={previewImage}
                        />
                    </Modal>
                </div> */}

                <div className="col-lg-12">
                    <label className="pb-2">Educación:</label>
                    <RepeaterFieldEd />
                </div>

                <div className="col-lg-12">
                    <label className="pb-2">Experiencia laboral:</label>
                    <RepeaterFieldEx />
                </div>

                <div className="form-group col-lg-12 col-md-12">
                    <button type="submit" className="theme-btn btn-style-one">
                        Guardar
                    </button>
                </div>
            </div>
        </form>
    );
};

export default Index;


