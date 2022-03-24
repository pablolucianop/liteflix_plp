import React from 'react'
import './Col.css'
import playCircle from './img/playCircle.svg'
import star from './img/star.svg'
import arrow from './img/arrow.svg'

// import { info } from './info'

function Col({ title, popMovies, addedMovies, setColContent }) {
  const popularMoviesToShow = 4
  const baseURL = `https://image.tmdb.org/t/p/w500/`
  const gradient =
    'linear-gradient(180deg, rgba(0, 0, 0, 0) 50.78%, #000000 122.69%),'
  let movies = popMovies

  //change the movies to show depending on the title of the column
  title === 'populares' ? (movies = popMovies) : (movies = addedMovies)

  //img elements in variables to make it more readable
  const imgArrow = (
    <img src={arrow} className="arrow" alt="elegir populares o mi lista"></img>
  )
  const imgPlayCircle = (
    <img
      src={playCircle}
      className="playCircle"
      alt="reproducir película"
    ></img>
  )
  const imgStar = <img className="star" src={star} alt="star"></img>

  return (
    <div className="col">
      <div
        className="col_header"
        onClick={() => {
          setColContent('mi lista')
        }}
      >
        <div className="light">ver:</div>
        {title}
        {imgArrow}
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
              {imgPlayCircle}
              <div className="title-hover">{movie.title}</div>
            </div>
            <h3 className="titleMovie light">{movie.title}</h3>
            <div className="extraInfo">
              {movie.vote_average && (
                <div className="average">
                  {imgStar}
                  {movie.vote_average}
                </div>
              )}
              {movie.release_date && movie.release_date.slice(0, 4)}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Col
