import { useState } from "react";
import { FileUploader } from "react-drag-drop-files";

import "./Styles.css";

const fileTypes = ["JPEG", "PNG", "GIF"];

export default function UploadFile() {
  const [file, setFile] = useState(null);
  const handleChange = (file) => {
    setFile(file);
  };
  return (
    <div className="fileUploader">
      <h1>Agregar película</h1>
      <FileUploader
        multiple={true}
        handleChange={handleChange}
        name="file"
        types={fileTypes}
      />
      <p>{file ? `File name: ${file[0].name}` : "no files uploaded yet"}</p>
    </div>
  );
}
