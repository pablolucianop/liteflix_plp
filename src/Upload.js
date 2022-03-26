import React, { useState } from 'react'
import { useDropzone } from 'react-dropzone'
import clip from './img/clip.svg'
import close from './img/close.svg'
import './Upload.css'

function Upload({
  setaddedMovies,
  addedMovies,
  setFocus,
  setColContent,
  minWidthReached,
}) {
  const [name, setName] = useState('')
  const [files, setFiles] = useState([])
  const [uploadedMovies, setUploadedMovies] = useState([])

  const handleSubmit = (event) => {
    event.preventDefault()
    let actual = {
      title: name,
      backdrop_path: files[files.length - 1].preview,
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

  const dropZoneDivs = (
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
  )

  const loaded = (
    <div className="uploading">
      <div className="statusUpload"> 100% cargado </div>
      <div className="progressBar"> </div>
      <div className="auxBtn"> ¡Listo! </div>
    </div>
  )
  const closeBtnDiv = (
    <img
      className="closeBtn"
      src={close}
      alt="close"
      onClick={() => {
        // alert('close')
        setFocus('home')
      }}
    ></img>
  )
  const exitMinWidthBtnDiv = (
    <div
      className=" upload-button exit"
      onClick={() => {
        setFocus('home')
      }}
    >
      salir
    </div>
  )
  return (
    <div className="upload">
      {!minWidthReached && closeBtnDiv}
      <div className="uploaderTitle">Agregá un archivo</div>

      <form></form>
      {files.length > 0 ? loaded : dropZoneDivs}
      <label>
        <inputs
          className="minimal-input"
          type="text"
          value={name}
          placeholder="Título"
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      {console.log('files', files, files.length)}
      <div
        className="upload-button"
        onClick={handleSubmit}
        style={{
          backgroundColor: files.length > 0 ? '#ffffff' : '#919191',
          pointerEvents: files.length > 0 ? 'auto' : 'none',
          cursor: files.length > 0 ? 'auto' : 'default',
        }}
      >
        subir Película
      </div>
      {minWidthReached && exitMinWidthBtnDiv}
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
