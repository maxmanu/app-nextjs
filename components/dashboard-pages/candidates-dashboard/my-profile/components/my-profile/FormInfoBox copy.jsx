import { useState } from "react";
import { useForm } from "react-hook-form";
// import Swal from "sweetalert2";

const FormInfoBox = () => {
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm();
    
    // const data = {
    //     countries: [
    //         {
    //             name: "LIMA",
    //             states: [
    //                 {
    //                     name: "LIMA",
    //                     cities: ["LIMA", "ANCON", "ATE", "BARRANCO"],
    //                 },
    //                 {
    //                     name: "BARRANCA",
    //                     cities: ["BARRANCA", "PARAMONGA", "PATIVILCA", "SUPE", "SUPE PUERTO"],
    //                 },
    //             ],
    //         },
    //         {
    //             name: "PIURA",
    //             states: [
    //                 { name: "PIURA", cities: ["PIURA", "CASTILLA", "CATACAOS", "CURA MORI"] },
    //                 { name: "AYABACA", cities: ["AYABACA", "FRIAS", "JILILI", "LAGUNAS"] },
    //             ],
    //         },
    //     ],
    // };
    // const [selectedCountry, setSelectedCountry] = useState();
    // const [selectedState, setSelectedState] = useState();
    // const [selectedCity, setSelectedCity] = useState();

    // const availableState = data.countries.find((c) => c.name === selectedCountry);
    // const availableCities = availableState?.states?.find((s) => s.name === selectedState);

    // const handleClick = () => {
    //     Swal.fire({
    //         icon: "error",
    //         title: "Oops...",
    //         text: "Algo salió mal!",
    //     });
    // };
    return (
        <form
            action="#"
            onSubmit={handleSubmit((data) => {
                console.log(data);
            })}
            className="default-form"
        >
            <div className="row">
                <div className="form-group col-lg-6 col-md-12">
                    <label>Nombres*</label>
                    <input
                        type="text"
                        {...register("firstName", { required: true })}
                        placeholder="Ingresa tus nombres*"
                        aria-invalid={errors.firstName ? "true" : "false"}
                    />
                    {errors.firstName?.type === "required" && (
                        <small className="valid-alert" role="alert">
                            El nombre es requerido
                        </small>
                    )}
                </div>

                <div className="form-group col-lg-6 col-md-12">
                    <label>Apellidos*</label>
                    <input type="text" {...register("lastName", { required: true })} placeholder="Ingresa tus apellidos*" />
                    {errors.lastName?.type === "required" && (
                        <small className="valid-alert" role="alert">
                            El apellido es requerido
                        </small>
                    )}
                </div>

                <div className="form-group col-lg-6 col-md-12">
                    <label>DNI o Carnet de Extranjería*</label>
                    <input type="text" {...register("dni", { required: true })} placeholder="Ingresa tu Nº" />
                    {errors.dni?.type === "required" && (
                        <small className="valid-alert" role="alert">
                            El dni o carnet es requerido
                        </small>
                    )}
                </div>

                <div className="form-group col-lg-6 col-md-12">
                    <label>Nacionalidad</label>
                    <select name="" id="">
                        <option value="">Perú</option>
                        <option value="">Venezuela</option>
                        <option value="">Argentina</option>
                        <option value="">Chile</option>
                    </select>
                </div>

                <div className="form-group col-lg-6 col-md-12">
                    <label>Email*</label>
                    <input type="email" {...register("email", { required: true })} placeholder="Ingresa tu correo*" />
                    {errors.email?.type === "required" && (
                        <small className="valid-alert" role="alert">
                            El correo es requerido
                        </small>
                    )}
                </div>

                <div className="form-group col-lg-6 col-md-12">
                    <label>Edad</label>
                    <input type="text" name="name" placeholder="" />
                </div>

                <div className="form-group col-lg-6 col-md-12">
                    <label>Celular*</label>
                    <input type="text" {...register("celular", { required: true })} placeholder="" />
                    {errors.celular?.type === "required" && (
                        <small className="valid-alert" role="alert">
                            El celular es requerido
                        </small>
                    )}
                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input whats-check" id="exampleCheck1" />
                        <label className="form-check-label" htmlFor="exampleCheck1">
                            Este número tiene Whatsapp
                        </label>
                    </div>
                </div>

                <div className="form-group col-lg-6 col-md-12">
                    <label>Teléfono</label>
                    <input type="text" name="name" placeholder="" />
                </div>

                <div className="form-group col-lg-4 col-md-12">
                    <label>Departamento</label>
                    <select placeholder="Country" value={selectedCountry} onChange={(e) => setSelectedCountry(e.target.value)}>
                        <option>Elegir Departamento</option>
                        {data.countries.map((value, key) => {
                            return (
                                <option value={value.name} key={key}>
                                    {value.name}
                                </option>
                            );
                        })}
                    </select>
                </div>

                <div className="form-group col-lg-4 col-md-12">
                    <label>Provincia</label>
                    <select placeholder="State" value={selectedState} onChange={(e) => setSelectedState(e.target.value)}>
                        <option>Elegir Provincia</option>
                        {availableState?.states.map((e, key) => {
                            return (
                                <option value={e.name} key={key}>
                                    {e.name}
                                </option>
                            );
                        })}
                    </select>
                </div>

                <div className="form-group col-lg-4 col-md-12">
                    <label>Distrito</label>
                    <select placeholder="City" value={selectedCity} onChange={(e) => setSelectedCity(e.target.value)}>
                        <option>Elegir Distrito</option>
                        {availableCities?.cities.map((e, key) => {
                            return (
                                <option value={e.name} key={key}>
                                    {e}
                                </option>
                            );
                        })}
                    </select>
                </div>

                <div className="form-group col-lg-12 col-md-12">
                    <label>Dirección</label>
                    <input type="text" name="name" placeholder="Ingresa tu dirección" />
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
