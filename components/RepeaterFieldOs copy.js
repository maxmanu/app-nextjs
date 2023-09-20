import React, { useEffect, useState } from "react";
import { FaMinus } from "react-icons/fa";
import Select from "react-select";

const RepeaterFieldOs = () => {
    // const [formValues, setFormValues] = useState([{ oficio: "", servicio: "" }]);

    // let handleChange = (i, e) => {
    //     let newFormValues = [...formValues];
    //     newFormValues[i][e.name] = e.value;
    //     setFormValues(newFormValues);
    // }

    // let addFormFields = () => {
    //     setFormValues([...formValues, { oficio: "", servicio: [] }]);
    // };

    // let removeFormFields = (i) => {
    //     let newFormValues = [...formValues];
    //     newFormValues.splice(i, 1);
    //     setFormValues(newFormValues);
    // };

    const [oficio, setOficio]= useState([]);
    const [oficioid, setOficioid]= useState('');
    const [service, setService]= useState([]);
    const [serviceid, setServiceid]= useState('');

    const [enable, setEnable]= useState(true);

    useEffect( ()=>{
        const getoficio = async ()=>{
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

    const handleoficio = async(e)=>{
        const getoficioid= e.value;
        setOficioid(getoficioid);
        if(getoficioid!=='')
        {
            const getservicio= async ()=>{
                let body = { "idOficio": getoficioid, "estado" : "A" };
                const resservicio= await fetch(`http://34.196.244.27:8180/chambita/serviceService/read`, {
                    method:'POST',
                    headers:{'content-type':'application/json'},
                    body:JSON.stringify(body)
            });
            const getst= await resservicio.json();
            const servicios2 = getst.listaObjeto;
            setService(servicios2);
            setEnable(false); 
            }
            getservicio();
        } else {
            setService([]);
            setEnable(true); 
        }
    }
    useEffect( ()=>{  
        setService(service)
    },[]);  
    const arrServicio = [];
    service.map((i)=> {
        return arrServicio.push({ value: i.idServicio, label: i.nombre})
    })

    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
    ]
    
    const [formValues, setFormValues] = useState([{ value: "", label : ""}])
    const [selOption, setSelOption] = useState({});

    const HandelChange = (obj) => {
        setSelOption(obj);
        console.log(obj);
      };

    let handleChange = (i, e) => {
        let newFormValues = [...formValues];
        // newFormValues[i][e.name] = e.value;
        setFormValues(newFormValues);
      }
    
    let addFormFields = () => {
        setFormValues([...formValues, { value: "", label: "" }])
      }
    
    let removeFormFields = (i) => {
        let newFormValues = [...formValues];
        newFormValues.splice(i, 1);
        setFormValues(newFormValues)
    }

    return (
        <>
            
            {formValues.map((element, index) => (
                <div className="form-inline" key={index}>
                <label>Name</label>
                {/* <input type="text" name="name" value={element.name || ""} onChange={e => handleChange(index, e)} /> */}
                <Select 
                options={options}  
                name="name"
                onChange={(option) => HandelChange(option)} />
                <label>Email</label>
                {/* <input type="text" name="email" value={element.email || ""} onChange={e => handleChange(index, e)} /> */}
                {
                    index ? 
                    <button type="button"  className="button remove" onClick={() => removeFormFields(index)}>Remove</button> 
                    : null
                }
                </div>
            ))}
            <div className="button-section">
                <button className="button add" type="button" onClick={() => addFormFields()}>Add</button>
                <button className="button submit" type="submit">Submit</button>
            </div>
       
            {/* {formValues.map((element, index) => (
                <div className="row" key={index}>
                    <div className="form-group col-lg-4 col-md-12">
                        <label>Oficio:</label>
                        <div className="row align-items-center">
                            <div className="col-lg-11">
                                <Select
                                    name="oficio"
                                    options={arrOficio}
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
                            onChange={handleChange}
                            isMulti
                            className="basic-multi-select"
                            classNamePrefix="select"
                            required
                            placeholder={"Seleccionar"}
                        />
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

            {formValues.length == 3 && <div className="add-info-btn mb-5">Máximo 3 campos</div>} */}
        </>
    );
};

export default RepeaterFieldOs;
