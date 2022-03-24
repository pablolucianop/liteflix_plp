import React from 'react'
import './Col.css'
import playCircle from './img/playCircle.svg'
import star from './img/star.svg'
import arrow from './img/arrow.svg'
import ColOptions from './ColOptions'
// import { info } from './info'

function Col({ title, movies, setColContent }) {
  const popularMoviesToShow = 4
  const baseURL = `https://image.tmdb.org/t/p/w500/`
  const gradient =
    'linear-gradient(180deg, rgba(0, 0, 0, 0) 50.78%, #000000 122.69%),'
  console.log('movies', movies)

  return (
    <div className="col">
      <div
        className="col_header"
        onClick={() => {
          setColContent('mi lista')
        }}
      >
        ver:{title}
        <img
          src={arrow}
          className="arrow"
          alt="elegir populares o mi lista"
        ></img>
      </div>
      <div className="col_movies">
        {movies.slice(0, popularMoviesToShow).map((movie) => (
          <div
            className="col_movie"
            key={movie.id}
            style={{
              backgroundImage:
                title === 'mi lista'
                  ? `${gradient}url(${movie.backdrop_path})`
                  : `${gradient}url(${baseURL}${movie.backdrop_path})`,
            }}
          >
            <div className="central_movie">
              <img
                src={playCircle}
                className="playCircle"
                alt="reproducir película"
              ></img>
              <div className="title-hover">{movie.title}</div>
            </div>
            <h3 className="titleMovie light">{movie.title}</h3>
            <div className="extraInfo">
              {movie.vote_average && (
                <div className="average">
                  <img className="star" src={star} alt="star"></img>
                  <p>{movie.vote_average}</p>
                </div>
              )}
              {movie.release_date && <p>{movie.release_date.slice(0, 4)}</p>}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Col

// <img
//     className="playCircle"
//     src={playCircle}
//     alt="reproducir película">
// </img>
