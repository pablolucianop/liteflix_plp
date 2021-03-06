import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'
import Col from './Col'
import apiRequests from './apiRequests'
import Banner from './Banner'
import NavBar from './NavBar'
import Sidebar from './Sidebar'
import './fonts.css'
import Upload from './Upload'

function App() {
  const [popMovies, setMovies] = useState([])
  const [featMovie, setFeatMovie] = useState([''])
  const [colContent, setColContent] = useState('populares')
  const [minWidthReached, setminWidthReached] = useState(false)
  const [focus, setFocus] = useState('home')
  const [addedMovies, setaddedMovies] = useState([])
  const breakingPointPixelsNumber = 600

  //set up breaking point if the width of the window is less than 600px
  function handleResize() {
    setminWidthReached(window.innerWidth < breakingPointPixelsNumber)
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize)
    handleResize()

    async function fetchData() {
      //get the movies from the api
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
        {/* Banner with feature movie */}
        <Banner
          movie={featMovie[0]}
          setColContent={setColContent}
          minWidthReached={minWidthReached}
          setFocus={setFocus}
        />
        {/* column of the movies */}
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
      {/*upload section */}
      {focus === 'upload' && (
        <Upload
          setaddedMovies={setaddedMovies}
          addedMovies={addedMovies}
          setFocus={setFocus}
          setColContent={setColContent}
          minWidthReached={minWidthReached}
        />
      )}
      {
        //two versions of the same navbar, to deal with complex interaction with sidebar
        focus === 'sidebar' && (
          <NavBar
            setFocus={setFocus}
            focus={focus}
            minWidthReached={minWidthReached}
            overSidebar={true}
          />
        )
      }
      <NavBar
        setFocus={setFocus}
        focus={focus}
        minWidthReached={minWidthReached}
      />
      {focus === 'sidebar' && (
        //just the sidebar!
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
