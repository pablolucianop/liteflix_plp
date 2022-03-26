import React, { useState } from 'react'
import { useDropzone } from 'react-dropzone'
import clip from './img/clip.svg'
import close from './img/close.svg'
import './Upload.css'

function Upload({ setaddedMovies, addedMovies, setFocus }) {
  const [name, setName] = useState('')
  const [files, setFiles] = useState([])
  const [uploadedMovies, setUploadedMovies] = useState([])

  const handleSubmit = (event) => {
    event.preventDefault()
    let actual = {
      title: name,
      backdrop_path: files[0].preview,
      id: 'uploaded' + uploadedMovies.length,
    }
    setUploadedMovies([...uploadedMovies, actual])
    setaddedMovies([...addedMovies, actual])
    console.log('uploadedMovies', actual)
    console.log('uploadedMovies', uploadedMovies)
  }

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: 'image/*',
    onDrop: (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      )
    },
  })
  const thumbs = files.map((file) => (
    <div className="thumb" key={file.name}>
      <div className="thumbInner">
        <img src={file.preview} alt="preview" style={{ width: '200px' }} />
        <div className="thumbText">{file.name}</div>
      </div>
    </div>
  ))
  return (
    <div className="upload">
      <img
        className="closeBtn"
        src={close}
        alt="close"
        onClick={() => {
          // alert('close')
          setFocus('home')
        }}
      ></img>

      <div className="uploaderTitle">Agregá un archivo</div>

      <form></form>
      <div className="dropzone" {...getRootProps()}>
        <input {...getInputProps()} />
        {
          // isDragActive ?
          <div className="dropHere">
            <img className="notification" src={clip} alt="notification"></img>
            Agregá un archivo o arrastralo y soltalo aquí
          </div>
          // :
          // <p>Arrastra las imágenes aquí o haz click para seleccionar</p>
        }
      </div>
      <label>
        <input
          className="minimal-input"
          type="text"
          value={name}
          placeholder="Título"
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <div className="upload-button" onClick={handleSubmit}>
        subir Película
      </div>
      <div
        className=" upload-button exit"
        onClick={() => {
          setFocus('home')
        }}
      >
        salir
      </div>
      {/* <div className="salir">salir</div> */}

      {/* <div className="previews">
        {files.map((file) => (
          <div className="preview" key={file.name}>
            <img src={file.preview} alt="{preview}" />
            <button>X</button>
          </div>
        ))}
      </div> */}
      <div className="backdrop"> </div>
    </div>
  )
}

export default Upload
