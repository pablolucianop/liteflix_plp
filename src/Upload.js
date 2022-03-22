import React, {useState} from 'react';
import {useDropzone} from 'react-dropzone';
// import '/Upload.css'

function Upload() {
    const [files, setFiles] = useState([]);
    const {getRootProps, getInputProps, isDragActive} = useDropzone({
        accept: 'image/*',
        onDrop: acceptedFiles => {
            setFiles(acceptedFiles.map(file => Object.assign(file, {
                preview: URL.createObjectURL(file)
            })));
        }
    })
    const thumbs = files.map(file => (
        <div className="thumb" key={file.name}>
            <div className="thumbInner">
                <img src={file.preview} alt='preview' style={{width:'200px'}}/>
                <div className="thumbText">{file.name}</div>
            </div>
        </div>
    ));
 return (
    <div className ='Upload' > 
        <h1>Agregar película</h1>
        <div className='dropzone' {...getRootProps()}>
            <input {...getInputProps()} />
            {
                isDragActive ?
                <p>Arrastra las imágenes aquí</p> :
                <p>Arrastra las imágenes aquí o haz click para seleccionar</p>
            }           
        </div> 
        <div className='previews'>
            {files.map(file => (
                <div className='preview' key={file.name}>
                    <img src={file.preview} />
                    <button>X</button>
                </div>
            ))}
        </div>
    </div> 

            

  );
}

export default Upload;