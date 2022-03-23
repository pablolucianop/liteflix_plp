import React from 'react';
import './Col.css';
import playCircle from './img/playCircle.svg';
import star from './img/star.svg';

function Col({ title, movies }) {
    const popularMoviesToShow = 4;
    const baseURL = `https://image.tmdb.org/t/p/w500/`; //https://image.tmdb.org/t/p/w500/
    const gradient = 'linear-gradient(180deg, rgba(0, 0, 0, 0) 50.78%, #000000 122.69%),'
    console.log('movies', movies);
  
    return(
        <div className='col'>
                <h2>{title}</h2>
                <div className='col_movies'>
                    {movies.slice(0,popularMoviesToShow).map(movie => (
                        <div className='col_movie' key={movie.id} 
                            style={{ backgroundImage: title=== 'mi lista' ? `${gradient}url(${movie.backdrop_path}${movie.backdrop_path})` : `${gradient}url(${baseURL}${movie.backdrop_path})`}} 
                >
                    <div  class="central_movie" >
                        <img src={playCircle} className="playCircle" alt="reproducir película"></img> 
                    </div>
                    <h3 class="titleMovie light">{movie.title}</h3>
                </div>

                    ))}
                </div>
        </div>
    )
}

export default Col;

                                // <img 
                                //     className="playCircle" 
                                //     src={playCircle} 
                                //     alt="reproducir película">
                                // </img>

                                /* {
                                movie.vote_average &&
                                    <div className="average">
                                        <img 
                                            className="star" 
                                            src={star} 
                                            alt="star">
                                        </img>
                                        <p>{movie.vote_average}</p>
                                    </div>
                            }
                            {
                                movie.release_date && <p>{movie.release_date.slice(0,4)}</p>
                            } */


                            
