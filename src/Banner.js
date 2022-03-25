import React from 'react'
import './Banner.css'
import play from './img/play.svg'
import plus from './img/plus.svg'

function Banner({ movie, setColContent, minWidthReached }) {
  const baseURL = `https://image.tmdb.org/t/p/w500/`

  const gradientBottom =
    'linear-gradient(180deg, rgba(36, 36, 36, 0) 33%, #242424 100%)'
  const gradientTop =
    'linear-gradient(0deg, rgba(0, 0, 0, 0) 90%, #000000 122.69%)'
  const gradient = minWidthReached ? gradientBottom : gradientTop
  console.log('minWidthReached', minWidthReached)

  return (
    <header
      className="banner"
      style={{
        backgroundImage: `${gradient} , url(${baseURL}${movie?.backdrop_path})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'right',
      }}
    >
      <div className="container">
        <div className="banner_content">
          <div className="tagline">original de liteflix</div>
          <b className="banner_title">{movie?.title}</b>
          <div className="banner_buttons">
            <button className="banner_button">
              <img className="play" src={play} alt="play"></img>
              Reproducir
            </button>
            <button
              className="banner_button banner_button-secundary"
              onClick={() => {
                setColContent('mi lista')
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
