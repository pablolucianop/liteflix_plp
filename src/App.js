import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'
import Col from './Col'
import apiRequests from './apiRequests'
import Banner from './Banner'
import NavBar from './NavBar'
import Sidebar from './Sidebar'
// import Anim from './Anim'
import './fonts.css'
import Upload from './Upload'
import { Spring } from 'react-spring'

function App() {
  const [popMovies, setMovies] = useState([])
  const [featMovie, setFeatMovie] = useState([''])
  const [colContent, setColContent] = useState('populares')
  const [minWidthReached, setminWidthReached] = useState(false)
  const [focus, setFocus] = useState('home')
  const [addedMovies, setaddedMovies] = useState([
    // {
    //   title: 'click aqui para añadir una película',
    //   id: '',
    //   poster_path: '',
    //   backdrop_path: '',
    // },
  ])
  const breakingPointPixelsNumber = 600

  function handleResize() {
    setminWidthReached(window.innerWidth < breakingPointPixelsNumber)
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize)
    handleResize()

    async function fetchData() {
      const requestPopMovies = await axios.get(apiRequests.fetchPopMovies)
      const requestFeatMovie = await axios.get(apiRequests.fetchFeatMovie)

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
        {/* <BreakingPoint setminWidthReached={setminWidthReached} /> */}
        {/* <Anim /> */}
        <Banner
          movie={featMovie[0]}
          setColContent={setColContent}
          minWidthReached={minWidthReached}
          setFocus={setFocus}
        />

        <Col
          title={colContent}
          popMovies={popMovies}
          addedMovies={addedMovies}
          setColContent={setColContent}
          colContent={colContent}
          setFocus={setFocus}
          focus={focus}
        />
      </div>

      {focus === 'upload' && (
        <Upload
          setaddedMovies={setaddedMovies}
          addedMovies={addedMovies}
          setFocus={setFocus}
          setColContent={setColContent}
        />
      )}
      {/* <Col title='populares' fetchUrl={apiRequests.fetchPopMovies} /> */}
      {/* {console.log('info', info)} */}

      {/* <Col title='mi lista' movies={addedMovies} /> */}
      {/* <Col title='mis películas' fetchUrl={indo} /> */}
      {/* <Upload  setaddedMovies={setaddedMovies} xxy ={addedMovies} /> */}
      {/* <ColOptions setColContent={setColContent} colContent={colContent} /> */}
      {focus === 'sidebar' && (
        <NavBar
          setFocus={setFocus}
          focus={focus}
          minWidthReached={minWidthReached}
          overSidebar={true}
        />
      )}
      <NavBar
        setFocus={setFocus}
        focus={focus}
        minWidthReached={minWidthReached}
      />
      {focus === 'sidebar' && (
        <Sidebar
          setFocus={setFocus}
          colContent={colContent}
          setColContent={setColContent}
        />
      )}
    </div>
  )
}

export default App
