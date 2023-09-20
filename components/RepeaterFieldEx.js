import React, { useState } from "react";
import { FaMinus } from "react-icons/fa";
import DatePicker from "react-multi-date-picker";

const RepeaterFieldEd = () => {
    const [formValues2, setFormValues2] = useState([{ empresa: "", periodo: "", cargo: "" }]);

    let handleChange2 = (i, e) => {
        let newFormValues2 = [...formValues2];
        newFormValues2[i][e.target.name] = e.target.value;
        setFormValues2(newFormValues2);
    };

    let addFormFields2 = () => {
        setFormValues2([...formValues2, { empresa: "", periodo: "", cargo: "" }]);
    };

    let removeFormFields2 = (i) => {
        let newFormValues2 = [...formValues2];
        newFormValues2.splice(i, 1);
        setFormValues2(newFormValues2);
    };

    return (
        <>
            {formValues2.map((element, index) => (
                <div className="row" key={index}>
                    <div className="form-group col-lg-8 col-md-12">
                        <input
                            type="text"
                            name="empresa"
                            value={element.empresa || ""}
                            onChange={(e) => handleChange2(index, e)}
                            placeholder="Nombre de empresa"
                            required
                        />
                    </div>
                    <div className="form-group col-lg-4 col-md-12">
                        <DatePicker onlyYearPicker range placeholder="Años" />
                    </div>
                    <div className="form-group col-lg-8 col-md-12">
                        <input
                            type="text"
                            name="cargo"
                            value={element.cargo || ""}
                            onChange={(e) => handleChange2(index, e)}
                            placeholder="Cargo"
                            required
                        />
                    </div>
                    <div className="col-lg-4 my-auto text-md-start text-end">
                        {index ? (
                            <button type="button" className="button remove" onClick={() => removeFormFields2(index)}>
                                <FaMinus />
                            </button>
                        ) : null}
                    </div>
                </div>
            ))}
            {formValues2.length < 3 && (
                <a className="add-info-btn mb-5" onClick={() => addFormFields2()}>
                    <span className="icon flaticon-plus"></span> Añadir
                </a>
            )}
            {formValues2.length == 3 && <div className="add-info-btn mb-5">Máximo 3 campos</div>}
        </>
    );
};

export default RepeaterFieldEd;
