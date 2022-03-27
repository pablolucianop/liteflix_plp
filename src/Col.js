import React from 'react'
import './Col.css'
import playCircle from './img/playCircle.svg'
import playHover from './img/playHover.svg'
import star from './img/star.svg'
import arrow from './img/arrow.svg'
import ColOptions from './ColOptions'
import plusHvyTransImg from './img/plusHvyTrans.svg'

function Col({
  title,
  popMovies,
  addedMovies,
  setColContent,
  colContent,
  setFocus,
  focus,
}) {
  //select the movies to show in the col
  const numberOfMoviesToShow = 4

  //base url to get the poster image
  const baseURL = `https://image.tmdb.org/t/p/w500/`

  //subtle gradient for the background of every movie in the col
  const gradient =
    'linear-gradient(180deg, rgba(0, 0, 0, 0) 50.78%, #000000 122.69%),'
  let movies = popMovies

  const addMovie = (
    <div
      className="addMovie"
      onClick={() => {
        setFocus('upload')
      }}
    >
      <img
        className="plusHvyTrans"
        src={plusHvyTransImg}
        alt="Agregar película"
      ></img>
      agregar película
    </div>
  )

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
          //if the col options are showing (populares, mis películas), hide them if you reclick on the header
          focus !== 'col options' ? setFocus('col options') : setFocus('home')
        }}
      >
        <div className="light">ver:</div>
        <b>{title}</b>
        {imgArrow}
      </div>
      <div className="col_movies">
        {
          // if there are no movies added, show add movie button
          movies[0] === undefined && (
            <div className="col_no-movies">{addMovie}</div>
          )
        }

        {
          // regular movie column
          movies.slice(0, numberOfMoviesToShow).map((movie) => (
            <div
              className="movie"
              key={movie.id}
              style={{
                backgroundImage:
                  //the movie posters come from different sources, so we need to adapt
                  //also adding the gradient for the background
                  title === 'mis peliculas'
                    ? `${gradient}url(${movie.backdrop_path})`
                    : `${gradient}url(${baseURL}${movie.backdrop_path})`,
              }}
            >
              <div className="movieInner">
                <div className="futureTag"></div>
                <div className="playAndTitle">
                  <div className="playButton"></div>
                  <div className="title"> {movie.title}</div>
                </div>
                <div className="ratingAndYear">
                  <div className="rating">
                    {movie.vote_average && imgStar}
                    {movie.vote_average}
                  </div>{' '}
                  <div className="year">
                    {movie.release_date && movie.release_date.slice(0, 4)}
                  </div>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Col
