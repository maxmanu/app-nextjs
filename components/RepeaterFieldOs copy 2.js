import React, { useEffect, useState } from "react";
import { FaMinus } from "react-icons/fa";
import Select from "react-select";

const RepeaterFieldOs = () => {
    const [formValues, setFormValues] = useState([{ oficio: "", servicio: "" }]);

    let addFormFields = () => {
        setFormValues([...formValues, { oficio: "", servicio: "" }]);
    };

    let removeFormFields = (i) => {
        let newFormValues = [...formValues];
        newFormValues.splice(i, 1);
        setFormValues(newFormValues);
    };

    const [oficio, setOficio]= useState([]);
    const [oficioid, setOficioid]= useState('');
    const [service, setService]= useState([]);
    const [serviceid, setServiceid]= useState('');

    const [enable, setEnable]= useState(true);

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

    // const arrOficio = [];
    // oficio.map((i)=> {
    //     return arrOficio.push({ value: i.idOficio, label: i.nombre})
    // })

    const handleoficio= async ()=>{
        const oficioid= event.target.value;
        setOficioid(oficioid);
        if(oficioid!=='')
        {
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
        const getservicioid= e.target.value;
        setServiceid(getservicioid);
    }   
    // const arrServicio = [];
    // service.map((i)=> {
    //     return arrServicio.push({ value: i.idServicio, label: i.nombre})
    // })

    return (
        <>
            {formValues.map((element, index) => (
                <div className="row" key={index}>
                    <div className="form-group col-lg-4 col-md-12">
                        <label>Oficio:</label>
                        <div className="row align-items-center">
                            <div className="col-lg-11">
                            <select name="oficio" className="form-control" onChange={(e)=>handleoficio(e)}>
                                <option value="0">Seleccionar</option>
                                {oficio.map((getcon)=>(
                                    <option key={getcon.idOficio} value={getcon.idOficio}> { getcon.nombre}</option>
                                    ))
                                }
                            </select>
                            </div>
                        </div>
                    </div>
                    <div className="form-group col-lg-7 col-md-12">
                        <label>Indica que servicios ofreces:</label>
                        <select multiple name="servicios" disabled={enable} className="form-control" onChange={(e)=>handleservicio(e)}>
                            <option value="0">Seleccionar</option>
                            {oficioid && service.map( (getsat)=>(                    
                                <option key={getsat.idServicio} value={getsat.idServicio}>{getsat.nombre}</option>
                                ))
                            }
                        </select>
                    </div>
                    <div className="col-lg-1 col-md-12 my-auto text-md-start text-end">
                        <label></label>
                        {index ? (
                            <button type="button" className="button remove" onClick={() => removeFormFields(index)}>
                                <FaMinus />
                            </button>
                        ) : null}
                    </div>
                </div>
            ))}

            {formValues.length < 3 && (
                <a className="add-info-btn mb-5" onClick={() => addFormFields()}>
                    <span className="icon flaticon-plus"></span>Añadir
                </a>
            )}

            {formValues.length == 3 && <div className="add-info-btn mb-5">Máximo 3 campos</div>}
        </>
    );
};

export default RepeaterFieldOs;
