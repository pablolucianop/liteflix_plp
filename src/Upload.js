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
  const [uploadInProgress, setUploadInProgress] = useState(false)

  const handleExit = () => {
    setFocus('home')
    setColContent('mis peliculas')
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    let actual = {
      title: name,
      backdrop_path: files[files.length - 1].preview,
      id: 'uploaded' + uploadedMovies.length,
    }
    setUploadInProgress(true)
    console.log('uploadInProgress', uploadInProgress)
    setUploadedMovies([...uploadedMovies, actual])
    setaddedMovies([...addedMovies, actual])
    console.log('actual', actual)
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

  const congratsLoading = (
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
        handleExit()
      }}
    >
      salir
    </div>
  )
  const uploadMovieButton = (
    <div
      className={files.length > 0 ? 'upload-button' : 'upload-button disable'}
      onClick={handleSubmit}
    >
      subir película
    </div>
  )

  const goHomeButton = (
    <div className="upload-button" onClick={handleExit}>
      ir a home
    </div>
  )

  return (
    <div className="upload">
      {!minWidthReached && closeBtnDiv}
      <div className="uploaderTitle">Agregá un archivo</div>
      <form></form>
      {files.length > 0 ? loaded : dropZoneDivs}
      <label>
        <input
          className="minimal-input-title"
          type="text"
          value={name}
          placeholder="Título"
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      {console.log('files', files, files.length)}
      {uploadInProgress ? goHomeButton : uploadMovieButton}
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
