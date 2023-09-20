import React, { useEffect, useState } from "react";
import { FaMinus } from "react-icons/fa";
import Select from "react-select";

const RepeaterFieldOs = () => {
    const [userdata, setUserData] = useState({});
    useEffect( ()=>{
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
            setUserData(dataUser);
            setFetchOficio(dataUser.jobProfessionalDTO[0].idOficio);
            setFetchService(dataUser.jobProfessionalDTO[0].idServicio);
        }
        getuser();
    },[]);
    console.log(userdata)

    // const [formValues, setFormValues] = useState([{ oficio: "", servicio: "" }]);

    // let addFormFields = () => {
    //     setFormValues([...formValues, { oficio: "", servicio: "" }]);
    // };

    // let removeFormFields = (i) => {
    //     let newFormValues = [...formValues];
    //     newFormValues.splice(i, 1);
    //     setFormValues(newFormValues);
    // };

    const [oficio, setOficio]= useState([]);
    const [oficioid, setOficioid]= useState('');
    const [service, setService]= useState([]);
    const [selectedServices, setSelectedServices] = useState([]);

    const [enable, setEnable]= useState(true);

    const [fetchOficio, setFetchOficio] = useState('');
    const [fetchService, setFetchService] = useState('');

    // const userdatofetch = userdata.jobProfessionalDTO;
    // const userdatoget = userdatofetch || [];
    
    useEffect( ()=>{
        const getoficio= async ()=>{
            let body = { "estado" : "A" };
            const req= await fetch("http://34.196.244.27:8180/chambita/jobService/read", {
                method:'POST',
                headers:{'content-type':'application/json'},
                body:JSON.stringify(body)
            });
            const getres= await req.json();
            const oficios = getres.listaObjeto;
            setOficio(await oficios);
        }
        getoficio();
    },[]);

    const arrOficio = [];
    oficio.map((i)=> {
        return arrOficio.push({ value: i.idOficio, label: i.nombre})
    })

    const handleoficio= async (e)=>{
        const oficioid= e.value;
        setOficioid(oficioid);
        if(oficioid!=='')
        {
            setSelectedServices([]);   
            const getservicio= async ()=>{
                let body = { "idOficio": oficioid, "estado" : "A" };
                const resservicio= await fetch(`http://34.196.244.27:8180/chambita/serviceService/read`, {
                    method:'POST',
                    headers:{'content-type':'application/json'},
                    body:JSON.stringify(body)
            });
                const getst= await resservicio.json();
                const servicios2 = getst.listaObjeto;
                setService(await servicios2);
                setEnable(false); 
            }
            getservicio();
        } else {
            setService([]);
            setEnable(true); 
        }
    }
    
    const handleservicio= (e)=> {
        setSelectedServices(e);
    }   
    const arrServicio = [];
    service.map((i)=> {
        return arrServicio.push({ value: i.idServicio, label: i.nombre})
    })

    console.log(fetchOficio);
    console.log(fetchService);
    console.log(arrOficio);
    console.log(arrServicio);

    return (
        <>
            
            <div className="row">
                <div className="form-group col-lg-4 col-md-12">
                    <label>Oficio:</label>
                    <div className="row align-items-center">
                        <div className="col-lg-11">
                        <Select
                            name="oficio"
                            options={arrOficio}
                            defaultValue={{value: 2, label: 'Electricista'}}
                            onChange={handleoficio}
                            className="basic-multi-select"
                            classNamePrefix="select"
                            required
                            placeholder={"Seleccionar"}
                        />
                        </div>
                    </div>
                </div>
                <div className="form-group col-lg-7 col-md-12">
                    <label>Indica que servicios ofreces:</label>
                    <Select
                        name="servicio"
                        options={arrServicio}
                        value={selectedServices}
                        onChange={(e) => handleservicio(e)}
                        isOptionDisabled={() => selectedServices.length >= 3}
                        isMulti
                        className="basic-multi-select"
                        classNamePrefix="select"
                        required
                        placeholder={"Seleccionar"}
                    />
                </div>
            </div>

        </>
    );
};

export default RepeaterFieldOs;
