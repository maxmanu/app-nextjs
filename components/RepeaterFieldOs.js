import React, { useEffect, useState } from "react";
import { FaMinus } from "react-icons/fa";
import Select from "react-select";

const RepeaterFieldOs = ({ userDataFetched }) => {
    const [userdata, setUserData] = useState();
    const [currentJobPosition, setCurrentJobPosition] = useState();
    const [arrOficio, setArrOficio] = useState();
    // const [arrServicio, setArrServicio] = useState();


    console.log('======= userDataFetched =======', userDataFetched);
    const [oficio, setOficio] = useState([]);
    const [oficioid, setOficioid] = useState('');
    const [service, setService] = useState([]);
    const [selectedServices, setSelectedServices] = useState([]);
    const [clearService, setClearService] = useState(false)

    const [enable, setEnable] = useState(true);

    const [fetchOficio, setFetchOficio] = useState('');
    const [fetchService, setFetchService] = useState('');

    // const jobProfessionalMapped = jobProfesional.map(item => {
    //     return {
    //         value: item.
    //     }
    // })
    // useEffect(() => {
    //     const getoficio = async () => {
    //         let body = { "estado": "A" };
    //         const req = await fetch("http://34.196.244.27:8180/chambita/jobService/read", {
    //             method: 'POST',
    //             headers: { 'content-type': 'application/json' },
    //             body: JSON.stringify(body)
    //         });
    //         const getres = await req.json();
    //         const oficios = getres.listaObjeto;
    //         setOficio(await oficios);
    //         const arrOficioMap = oficio.map((i) => {
    //             return { value: i.idOficio, label: i.nombre }
    //         })
    //         setArrOficio(arrOficioMap)
    //     }
    //     getoficio();
    // }, []);


    useEffect(() => {

        (async () => {

            // START OFICIO
            let body = { "estado": "A" };
            const req = await fetch("http://34.196.244.27:8180/chambita/jobService/read", {
                method: 'POST',
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify(body)
            });
            const getres = await req.json();
            const oficios = getres.listaObjeto;
            setOficio(await oficios);
            const arrOficioMap = oficio.map((i) => {
                return { value: i.idOficio, label: i.nombre }
            })
            setArrOficio(arrOficioMap)
            // END OFICIO




            setUserData(userDataFetched)
            const isReady = userDataFetched?.jobProfessionalDTO?.length > 0;
            // const isValidOficio = arrOficio?.length > 0;
            // const uniqueOficios = isReady ? [... new Set(userDataFetched.jobProfessionalDTO.map(item => item.idOficio))] : []
            // console.log('========= uniqueOficios =======', uniqueOficios)

            const positionAndService = isReady ? userDataFetched?.jobProfessionalDTO.reduce((accumulator, current) => {
                const existingItem = accumulator.find((item) => item.idOficio === current.idOficio);

                const oficio = arrOficioMap.find(item => item.value === current.idOficio)

                if (existingItem) {
                    existingItem.idServicio.push(current.idServicio);

                } else {

                    accumulator.push({
                        idOficio: current.idOficio,
                        nameOficio: oficio?.label,
                        idServicio: [current.idServicio],
                    });
                }

                return accumulator;
            }, []) : [];

            // START SERVICIO

            let completePosition = [];
            positionAndService.forEach(async itemPositionService => {

                let bodyServicio = { "idOficio": itemPositionService.idOficio, "estado": "A" };
                const resservicio = await fetch(`http://34.196.244.27:8180/chambita/serviceService/read`, {
                    method: 'POST',
                    headers: { 'content-type': 'application/json' },
                    body: JSON.stringify(bodyServicio)
                });
                const getst = await resservicio.json();
                completePosition.push({
                    ...itemPositionService,
                    servicio: getst.listaObjeto.filter(item => itemPositionService.idServicio.includes(item.idServicio)),
                    options: getst.listaObjeto.map(item => ({value: item.idServicio, label: item.nombre}))

                })
            })


            // END SERVICIO


            console.log('===== completePosition ===', completePosition)
            setService(completePosition.options)

            setCurrentJobPosition(completePosition);

        })()
    }, [userDataFetched])

    console.log('========= arrOficio =======', arrOficio)
    console.log('========= currentJobPosition 2 =======', currentJobPosition)
    // useEffect( ()=>{
    //     const getuser= async ()=>{
    //         const profesionalId = localStorage.getItem("id");
    //         const estado = { "idUsuario" : profesionalId };
    //         const req= await fetch("http://34.196.244.27:8180/chambita/professionalService/getProfessionalData", {
    //             method:'POST',
    //             headers:{'content-type':'application/json'},
    //             body:JSON.stringify(estado)
    //         });
    //         const getres= await req.json();
    //         const dataUser = getres.listaObjeto[0];
    //         setUserData(dataUser);
    //         setFetchOficio(dataUser.jobProfessionalDTO[0].idOficio);
    //         setFetchService(dataUser.jobProfessionalDTO[0].idServicio);
    //     }
    //     getuser();
    // },[]);


    // const [formValues, setFormValues] = useState([{ oficio: "", servicio: "" }]);

    // let addFormFields = () => {
    //     setFormValues([...formValues, { oficio: "", servicio: "" }]);
    // };

    // let removeFormFields = (i) => {
    //     let newFormValues = [...formValues];
    //     newFormValues.splice(i, 1);
    //     setFormValues(newFormValues);
    // };

    // useEffect(() => {
    //     const getoficio = async () => {
    //         let body = { "estado": "A" };
    //         const req = await fetch("http://34.196.244.27:8180/chambita/jobService/read", {
    //             method: 'POST',
    //             headers: { 'content-type': 'application/json' },
    //             body: JSON.stringify(body)
    //         });
    //         const getres = await req.json();
    //         const oficios = getres.listaObjeto;
    //         setOficio(await oficios);
    //         const arrOficioMap = oficio.map((i) => {
    //             return { value: i.idOficio, label: i.nombre }
    //         })
    //         setArrOficio(arrOficioMap)
    //     }
    //     getoficio();
    // }, []);


    // const arrOficio = oficio.map((i) => {
    //     return { value: i.idOficio, label: i.nombre }
    // })



    const handleoficio = async (e) => {
        setClearService(true)
        // setCurrentJobPosition(prevState => ({...prevState, servicio: []}))
        const oficioid = e.value;
        setOficioid(oficioid);
        if (oficioid !== '') {
            setSelectedServices([]);
            const getservicio = async () => {
                let body = { "idOficio": oficioid, "estado": "A" };
                const resservicio = await fetch(`http://34.196.244.27:8180/chambita/serviceService/read`, {
                    method: 'POST',
                    headers: { 'content-type': 'application/json' },
                    body: JSON.stringify(body)
                });
                const getst = await resservicio.json();
                const servicios2 = getst.listaObjeto;
                const servicesMapped = servicios2.map(item => ({
                    value: item.idServicio,
                    label: item.nombre
                }))
                setService(servicesMapped);
                setEnable(false);
            }
            getservicio();
        } else {
            setService([]);
            setEnable(true);
        }
    }

    const handleservicio = (e) => {
        setSelectedServices(e);
    }
    // const arrServicio = [];
    // service.map((i) => {
    //     return arrServicio.push({ value: i.idServicio, label: i.nombre })
    // })

    // console.log(fetchOficio);
    // console.log(fetchService);
    // console.log(arrOficio);
    console.log('====== selectedServices======', selectedServices);

    return (
        <>
            {currentJobPosition && currentJobPosition.map((jobPosition, index) => {
                const selectedServiceList = jobPosition.servicio.map(item => ({value: item.idServicio, label: item.nombre}))
                const optionList = clearService ? service : jobPosition.options;
                return (
                    (
                        <div className="row" key={`job-position-${index}`}>
                            <div className="form-group col-lg-4 col-md-12">
                                <label>Oficio:</label>
                                <div className="row align-items-center">
                                    <div className="col-lg-11">
                                        <Select
                                            name="oficio"
                                            options={arrOficio}
                                            defaultValue={{ value: jobPosition.idOficio, label: jobPosition.nameOficio }}
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
                                    options={optionList}
                                    defaultValue={selectedServiceList}
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
                    )
                )
            })}
        </>
    );
};

export default RepeaterFieldOs;
