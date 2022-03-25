import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'
import Col from './Col'
import apiRequests from './apiRequests'
import Banner from './Banner'
import NavBar from './NavBar'
import Sidebar from './Sidebar'
import BreakingPoint from './BreakingPoint'
import './fonts.css'
import Upload from './Upload'

function App() {
  const [popMovies, setMovies] = useState([])
  const [featMovie, setFeatMovie] = useState([''])
  const [colContent, setColContent] = useState('populares')
  const [minWidthReached, setminWidthReached] = useState('')
  const [openSideBar, setOpenSideBar] = useState({
    current: 'home',
  })
  const [addedMovies, setaddedMovies] = useState([
    {
      title: 'click aqui para añadir una película',
      id: '',
      poster_path: '',
      backdrop_path: '',
    },
  ])

  useEffect(() => {
    async function fetchData() {
      const requestPopMovies = await axios.get(apiRequests.fetchPopMovies)
      const requestFeatMovie = await axios.get(apiRequests.fetchFeatMovie)

      console.log('minWidthReached', minWidthReached)
      //if the first feature movie is the same as the first popular movie, then we need to get the next one
      if (
        requestPopMovies.data.results[0].id ===
        requestFeatMovie.data.results[0].id
      ) {
        requestPopMovies.data.results.shift()
      }
      setMovies(requestPopMovies.data.results)
      setFeatMovie(requestFeatMovie.data.results)
      return requestPopMovies
    }
    fetchData()
  }, [])

  return (
    <div className="app">
      <div className="content">
        <BreakingPoint setminWidthReached={setminWidthReached} />
        <Banner
          movie={featMovie[0]}
          setColContent={setColContent}
          minWidthReached={minWidthReached}
        />
        <Col
          title={colContent}
          popMovies={popMovies}
          addedMovies={addedMovies}
          setColContent={setColContent}
          colContent={colContent}
          setOpenSideBar={setOpenSideBar}
          openSideBar={openSideBar}
        />
      </div>

      {openSideBar.current === 'upload' && (
        <Upload
          setaddedMovies={setaddedMovies}
          addedMovies={addedMovies}
          setOpenSideBar={setOpenSideBar}
        />
      )}
      {/* <Col title='populares' fetchUrl={apiRequests.fetchPopMovies} /> */}
      {/* {console.log('info', info)} */}

      {/* <Col title='mi lista' movies={addedMovies} /> */}
      {/* <Col title='mis películas' fetchUrl={indo} /> */}
      {/* <Upload  setaddedMovies={setaddedMovies} xxy ={addedMovies} /> */}
      {/* <ColOptions setColContent={setColContent} colContent={colContent} /> */}
      {openSideBar.current === 'sidebar' && (
        <Sidebar setOpenSideBar={setOpenSideBar} colContent={colContent} />
      )}
      <NavBar
        setOpenSideBar={setOpenSideBar}
        openSideBar={openSideBar}
        minWidthReached={minWidthReached}
      />
    </div>
  )
}

export default App
