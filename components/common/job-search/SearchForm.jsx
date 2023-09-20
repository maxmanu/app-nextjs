import Router from "next/router";
import { useState } from "react";
import Select, { components } from "react-select";
import { FaSearch } from "react-icons/fa";
import Link from "next/link";
const SearchForm = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
    };
    const ofiOptions = [
        { value: "Pintor", label: "Pintor" },
        { value: "Carpintero", label: "Carpintero" },
        { value: "Albañil", label: "Albañil" },
        { value: "Mecánico", label: "Mecánico" },
        { value: "Electricista", label: "Electricista" },
        { value: "Plomero", label: "Plomero" },
        { value: "Conductor", label: "Conductor" },
        { value: "Cerrajero", label: "Cerrajero" },
        { value: "Gasfitero", label: "Gasfitero" },
        { value: "Jardinero", label: "Jardinero" },
    ];

    const [menuIsOpen, setMenuIsOpen] = useState(false);
    const CaretDownIcon = () => {
        return (
            <button type="submit">
                {/* <Link href={"/oficios"}> */}
                <FaSearch />
                {/* </Link> */}
            </button>
        );
    };
    const DropdownIndicator = (props) => {
        return (
            <components.DropdownIndicator {...props}>
                <CaretDownIcon />
            </components.DropdownIndicator>
        );
    };

    return (
        <form onClick={handleSubmit}>
            {
                <Select
                    components={{ DropdownIndicator }}
                    menuIsOpen={menuIsOpen}
                    onInputChange={setMenuIsOpen}
                    name="oficios"
                    options={ofiOptions}
                    className="basic-multi-select"
                    classNamePrefix="select"
                    required
                    placeholder={"¿Qué oficio estás buscando?"}
                    noOptionsMessage={() => "Sin coincidencias"}
                />
            }
        </form>
    );
};
export default SearchForm;
