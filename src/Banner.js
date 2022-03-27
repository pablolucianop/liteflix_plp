import React from 'react'
import './Banner.css'
import play from './img/play.svg'
import plus from './img/plus.svg'

function Banner({ movie, setColContent, minWidthReached, setFocus }) {
  if (movie.backdrop_path === undefined) return null

  const baseURL = `https://image.tmdb.org/t/p/w500/`

  const gradientBottom =
    'linear-gradient(180deg, rgba(36, 36, 36, 0) 65%, #242424 100%)'
  const gradientTop =
    'linear-gradient(0deg, rgba(0, 0, 0, 0) 70%, rgb(0, 0, 0) 105.69%)'
  const gradient = minWidthReached ? gradientBottom : gradientTop

  const positionBackground = minWidthReached ? 'center' : 'right'

  return (
    <header
      className="banner"
      style={{
        backgroundImage: `${gradient} , url(${baseURL}${movie.backdrop_path})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: positionBackground,
      }}
      //to let navigate until clickaway function is working
      onClick={() => {
        setFocus('home')
      }}
    >
      <div
        className="container"
        onClick={() => {
          setFocus('home')
          // console.log('clicked')
        }}
      >
        <div className="banner_content">
          <div className="fill"></div>
          <div className="tagline">
            original de <b>liteflix</b>
          </div>
          <div className="banner_title">{movie?.title}</div>
          <div className="banner_buttons">
            <button className="banner_button">
              <img className="play" src={play} alt="play"></img>
              Reproducir
            </button>
            <button
              className="banner_button banner_button-secundary"
              onClick={() => {
                setColContent('mis peliculas')
              }}
            >
              <img className="plus" src={plus} alt="mi lista"></img>
              Mi lista
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Banner
