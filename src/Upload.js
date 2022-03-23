import React, {useState} from 'react';
import {useDropzone} from 'react-dropzone';
import './Upload.css'

function Upload({setaddedMovies, xxy}) {
    const [name, setName] = useState("");
    const [files, setFiles] = useState([]);
    const [uploadedMovies, setUploadedMovies] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    let actual= {
        title: name,
        backdrop_path: files[0].preview,
        key: 'uploaded' + uploadedMovies.length
    }
    setUploadedMovies([...uploadedMovies, actual]);
    setaddedMovies([...xxy, actual]);
    console.log('uploadedMovies',actual)
    console.log('uploadedMovies',uploadedMovies)
  }

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
    <div className ='upload' > 
    <h1>Agregá un archivo</h1>
    <form>


    </form>
        <div className='dropzone' {...getRootProps()}>
            <input  {...getInputProps()} />
            {
                // isDragActive ?
                <div className='dropHere'>Agregá un archivo o arrastralo y soltalo aquí</div> 
                // :
                // <p>Arrastra las imágenes aquí o haz click para seleccionar</p>
            }           
        </div> 
              <label>
        <input 
        className ='minimal-input'
          type="text" 
          value={name}
          placeholder="Título"
          onChange={(e) => setName(e.target.value)}
        />
      </label>
        <div className='subirPelicula' onClick={handleSubmit}>
     subir Película
        </div> 
        <div className='salir'>
          salir
        </div> 
        
        <div className='previews'>
            {files.map(file => (
                <div className='preview' key={file.name}>
                    <img src={file.preview} alt='{preview}' />
                    <button>X</button>
                </div>
            ))}
        </div>
    </div> 

            

  );
}

export default Upload;