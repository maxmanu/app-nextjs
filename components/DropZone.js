import React, { useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
const dropZone = {
    flex: "1",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "20px",
    borderWidth: "2px",
    borderRadius: "2px",
    borderColor: "#eeeeee",
    borderStyle: "dashed",
    backgroundColor: "#fafafa",
    color: "#bdbdbd",
    outline: "none",
    transition: "border .24s ease-in-out",
};
const thumbsContainer = {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 16,
};
const thumb = {
    display: "inline-flex",
    borderRadius: 2,
    border: "1px solid #eaeaea",
    marginBottom: 8,
    marginRight: 8,
    width: 100,
    height: 100,
    padding: 4,
    boxSizing: "border-box",
    position: "relative",
};
const thumbInner = {
    display: "flex",
    minWidth: 0,
    overflow: "hidden",
};
const img = {
    display: "block",
    width: "auto",
    height: "100%",
};
function Previews(props) {
    const [files, setFiles] = useState([]);
    const { acceptedFiles, fileRejections, getRootProps, getInputProps } = useDropzone({
        accept: {
            "image/*": [],
        },
        maxFiles: 3,
        onDrop: (acceptedFiles) => {
            setFiles(
                acceptedFiles.map((file) =>
                    Object.assign(file, {
                        preview: URL.createObjectURL(file),
                    })
                )
            );
        },
    });

    const removeFile = (file) => () => {
        const newFiles = [...files];
        newFiles.splice(newFiles.indexOf(file), 1);
        setFiles(newFiles);
    };

    const removeAll = () => {
        setFiles([]);
    };

    const thumbs = files.map((file) => (
        <div style={thumb} key={file.name}>
            <div style={thumbInner}>
                <img
                    src={file.preview}
                    style={img}
                    // Revoke data uri after image is loaded
                    onLoad={() => {
                        URL.revokeObjectURL(file.preview);
                    }}
                />
            </div>
            <button className="dltImgBtn" onClick={removeFile(file)}>
                <img src="/images/resource/remove.png" />
            </button>
        </div>
    ));

    const fileRejectionItems = fileRejections.map(({ file, errors }) => (
        <li key={file.path}>
            {file.path} - {file.size} bytes
            <ul>
                {errors.map((e) => (
                    <li key={e.code}>{e.message}</li>
                ))}
            </ul>
        </li>
    ));

    useEffect(() => {
        // Make sure to revoke the data uris to avoid memory leaks, will run on unmount
        return () => files.forEach((file) => URL.revokeObjectURL(file.preview));
    }, []);

    return (
        <section className="container">
            <div style={dropZone} {...getRootProps({ className: "dropzone" })}>
                <input {...getInputProps()} />
                <p className="mb-0">Arrastre y suelte algunos archivos aquí, o haga clic</p>
                <small>(3 imágenes como máximo)</small>
            </div>
            <aside style={thumbsContainer}>{thumbs}</aside>
            {/* <small>{fileRejectionItems}</small> */}
            {/* {files.length > 0 && <button onClick={removeAll}>Eliminar Todos</button>} */}
        </section>
    );
}

export default Previews;
