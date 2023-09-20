import { useState } from "react";

// validation chaching
function checkFileTypes(files) {
    const allowedTypes = ["image/jpeg", "image/png"];
    for (let i = 0; i < files.length; i++) {
        if (!allowedTypes.includes(files[i].type)) {
            return false;
        }
    }
    return true;
}

const CvUploader = () => {
    const [getManager, setManager] = useState([]);
    const [getError, setError] = useState("");

    const cvManagerHandler = (e) => {
        const data = Array.from(e.target.files);
        const isExist = getManager?.some((file1) => data.some((file2) => file1.name === file2.name));
        if (!isExist) {
            if (checkFileTypes(data)) {
                setManager(getManager.concat(data));
                setError("");
            } else {
                setError("Solo formato (.jpg, .jpge, .png)");
            }
        } else {
            setError("El archivo ya existe");
        }
    };

    // delete image
    const deleteHandler = (name) => {
        const deleted = getManager?.filter((file) => file.name !== name);
        setManager(deleted);
    };
    console.log(getManager);
    return (
        <>
            {/* Start Upload resule */}
            {getManager.length < 4 && (
                <div className="uploading-resume">
                    <div className="uploadButton">
                        <input
                            className="uploadButton-input"
                            type="file"
                            name="attachments[]"
                            accept="image/jpeg, image/png"
                            id="upload"
                            multiple
                            onChange={cvManagerHandler}
                        />
                        <label className="cv-uploadButton" htmlFor="upload">
                            <span className="text">Max. 5Mb - (.jpg, .jpge, .png)</span>
                            <img src="../images/resource/agregar-img.png" alt="" />
                            {getError !== "" ? <p className="ui-danger mb-0">{getError}</p> : undefined}
                        </label>
                        <span className="uploadButton-file-name"></span>
                    </div>
                </div>
            )}
            {/* End upload-resume */}

            {/* Start resume Preview  */}
            <div className="files-outer">
                {getManager?.map((file, i) => (
                    <div key={i} className="file-edit-box">
                        <span className="title">{file.name}</span>
                        <div className="edit-btns">
                            <button onClick={() => deleteHandler(file.name)}>
                                <span className="la la-trash"></span>
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            {/* End resume Preview  */}
        </>
    );
};

export default CvUploader;
