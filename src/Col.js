import React from 'react'
import './Col.css'
import playCircle from './img/playCircle.svg'
import star from './img/star.svg'
import arrow from './img/arrow.svg'
import ColOptions from './ColOptions'

// import { info } from './info'

function Col({
  title,
  popMovies,
  addedMovies,
  setColContent,
  colContent,
  setFocus,
  focus,
}) {
  const numberOfMoviesToShow = 4
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
  const imgPlayCircle = <img src={playCircle} alt="reproducir película"></img>
  const imgStar = <img className="star" src={star} alt="star"></img>

  return (
    <div className="col">
      {focus === 'col options' && (
        <ColOptions
          setColContent={setColContent}
          colContent={colContent}
          setFocus={setFocus}
          focus={focus}
        />
      )}

      <div
        className="col_header"
        onClick={() => {
          setFocus('col options')
        }}
      >
        <div className="light">ver:</div>
        <b>{title}</b>
        {console.log('title', title)}
        {imgArrow}
      </div>
      <div className="col_movies">
        {movies[0] === undefined && (
          <div className="col_no-movies">No hay películas en esta columna</div>
        )}
        {movies.slice(0, numberOfMoviesToShow).map((movie) => (
          <div
            className="movie"
            key={movie.id}
            style={{
              backgroundImage:
                title === 'mis peliculas'
                  ? `${gradient}url(${movie.backdrop_path})`
                  : `${gradient}url(${baseURL}${movie.backdrop_path})`,
            }}
          >
            <div className="futureTag"></div>
            <div className="playAndTitle">
              <div className="playButton">{imgPlayCircle}</div>
              <div className="title"> {movie.title}</div>
            </div>
            <div className="ratingAndYear">
              <div className="rating">
                {imgStar}
                {movie.vote_average}
              </div>{' '}
              <div className="year">
                {movie.release_date && movie.release_date.slice(0, 4)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Col

// <div
//   className="col_movie"
//   key={movie.id}
//   style={{
//     backgroundImage:
//       title === 'mi lista'
//         ? `${gradient}url(${movie.backdrop_path})`
//         : `${gradient}url(${baseURL}${movie.backdrop_path})`,
//   }}
// >
//   <div className="central_movie">
//     {imgPlayCircle}
//     <div className="title-hover">{movie.title}</div>
//   </div>
//   <h3 className="titleMovie light">{movie.title}</h3>
//   <div className="extraInfo">
//     {movie.vote_average && (
//       <div className="average">
//         {imgStar}
//         {movie.vote_average}
//       </div>
//     )}
//     {movie.release_date && movie.release_date.slice(0, 4)}
//   </div>
// </div>
