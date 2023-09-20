import { useEffect, useState } from "react";
import Select from "react-select";

const JobSearchForm = () => {

    const [oficio, setOficio]= useState([]);
    const [oficioid, setOficioid]= useState('');
    const [service, setService]= useState([]);
    const [serviceid, setServiceid]= useState('');

    const [enable, setEnable]= useState(true);

    useEffect( ()=>{
        const getoficio= async ()=>{
            let estado = { "estado" : "A" };
            const req= await fetch("http://34.196.244.27:8180/chambita/jobService/read", {
                method:'POST',
                headers:{'content-type':'application/json'},
                body:JSON.stringify(estado)
            });
            const getres= await req.json();
            const oficios = getres.listaObjeto;
            setOficio(await oficios);
        }
        getoficio();
    },[]);

    const handleoficio= async(event)=>{
        const oficioid= event.target.value;
        setOficioid(oficioid);
        if(oficioid!=='')
        {
            const getservicio= async ()=>{
                let servicio = { "idOficio": oficioid, "estado" : "A" };
                const resservicio= await fetch(`http://34.196.244.27:8180/chambita/serviceService/read`, {
                    method:'POST',
                    headers:{'content-type':'application/json'},
                    body:JSON.stringify(servicio)
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

    const [menuIsOpen, setMenuIsOpen] = useState(false);
    
    const [distrito, setDistrito] = useState([]);

    useEffect( ()=>{
        const getdistrito= async ()=>{
            const dist = {};
            const resdistrito= await fetch(`http://34.196.244.27:8180/chambita/parameterService/readFullDistrict`, {
                method:'POST',
                headers:{'content-type':'application/json'},
                body:JSON.stringify(dist)
            });
            const getdist = await resdistrito.json();
            const getfulldist = getdist.listaObjeto;
            setDistrito(getfulldist)
        }
        getdistrito()
    },[])

    const arr = [];
    distrito.map((item)=> {
        return arr.push({ value: item.idDistrito, label: item.fullDistrict})
    })

    const [selectedOptions, setSelectedOptions] = useState([]);

    return (
        <div className="job-search-form search-container-chamb">
            <div className="row justify-content-center mb-3">
                <div className="col-lg-3 col-md-12 col-sm-12">
                    <label className="label-input-chamb">Oficio</label>
                    <select name="country" className="form-control" onChange={(e)=>handleoficio(e)}>
                        <option value="0">Todos</option>
                        {oficio.map((getcon)=>(
                            <option key={getcon.idOficio} value={getcon.idOficio}> { getcon.nombre}</option>
                            ))
                        }
                    </select>
                </div>
                <div className="col-lg-7 col-md-12 col-sm-12">
                    <label className="label-input-chamb">Servicio</label>
                    <select name="state" disabled={enable} className="form-control" onChange={(e)=>handleservicio(e)}>
                        <option>Todos</option>
                        {oficioid && service.map( (getsat)=>(                    
                            <option key={getsat.idServicio} value={getsat.idServicio}>{getsat.nombre}</option>
                            ))
                        }
                    </select>
                </div>
                <div className="col-lg-10 col-md-12 col-sm-12 mt-4">
                    <label className="label-input-chamb" htmlFor="oficio-inpu">
                        Suele trabajar:
                    </label>
                    <Select
                        menuIsOpen={menuIsOpen}
                        onInputChange={setMenuIsOpen}
                        isMulti
                        onChange={(e) => setSelectedOptions(e)}
                        name="colors"
                        options={arr}
                        isOptionDisabled={() => selectedOptions.length >= 3}
                        className="basic-multi-select"
                        classNamePrefix="select"
                        required
                        placeholder={"Busca por distrito"}
                        noOptionsMessage={() => "Sin coincidencias"}
                    />
                </div>
            </div>
            <div className="row">  
                <div className="mx-auto form-group col-lg-2 col-md-12 col-sm-12 my-2">
                    <button type="submit" className="theme-btn btn-style-one">
                        Buscar
                    </button>
                </div>
            </div>
        </div>
    );
};

export default JobSearchForm;
