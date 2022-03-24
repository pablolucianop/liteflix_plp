import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'
import Col from './Col'
import apiRequests from './apiRequests'
import Banner from './Banner'
import NavBar from './NavBar'
import Sidebar from './Sidebar'
import ColOptions from './ColOptions'
import { info } from './info'
import './App.css'
import Upload from './Upload'

function App() {
  const [popMovies, setMovies] = useState([])
  const [featMovie, setFeatMovie] = useState([])
  const [addedMovies, setaddedMovies] = useState([
    {
      title: 'click aqui para añadir una película',
      id: '',
      poster_path: '',
      backdrop_path: '',
    },
  ])
  const [openSideBar, setOpenSideBar] = useState({
    current: 'none',
  })
  const [colContent, setColContent] = useState('populares')

  useEffect(() => {
    async function fetchData() {
      console.log('fetchUrl', apiRequests.fetchPopMovies)
      const requestPopMovies = await axios.get(apiRequests.fetchPopMovies)
      const requestFeatMovie = await axios.get(apiRequests.fetchFeatMovie)

      //if the first feature movie is the same as the first popular movie, then we need to get the next one
      if (
        requestPopMovies.data.results[0].id ===
        requestFeatMovie.data.results[0].id
      ) {
        requestPopMovies.data.results.shift()
      }
      // console.log(requestPopMovies[0])
      setMovies(requestPopMovies.data.results)
      setFeatMovie(requestFeatMovie.data.results)

      return requestPopMovies
    }
    fetchData()
  }, [])

  return (
    <div className="app">
      <div
        className="content"
        onClick={() => {
          setOpenSideBar({ current: 'upload' })
        }}
      >
        <Banner fetchUrl={apiRequests.fetchFeatMovie} movie={featMovie[0]} />
        {colContent === 'populares' ? (
          <Col
            title="populares"
            movies={popMovies}
            setColContent={setColContent}
          />
        ) : (
          <Col
            title="mi lista"
            movies={addedMovies}
            setColContent={setColContent}
          />
        )}
      </div>

      {openSideBar.current === 'upload' && (
        <Upload
          setaddedMovies={setaddedMovies}
          xxy={addedMovies}
          setOpenSideBar={setOpenSideBar}
        />
      )}
      {/* <Col title='populares' fetchUrl={apiRequests.fetchPopMovies} /> */}
      {/* {console.log('info', info)} */}

      {/* <Col title='mi lista' movies={addedMovies} /> */}
      {/* <Col title='mis películas' fetchUrl={indo} /> */}
      {/* <Upload  setaddedMovies={setaddedMovies} xxy ={addedMovies} /> */}
      {/* <colOptions /> */}
      <NavBar />
      {openSideBar.current === 'sidebar' && (
        <Sidebar setOpenSideBar={setOpenSideBar} />
      )}
    </div>
  )
}

export default App
