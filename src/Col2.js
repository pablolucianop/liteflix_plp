import React, {useEffect, useState} from 'react';
import axios from 'axios';
import './Col.css';
import playCircle from './img/playCircle.svg';
import star from './img/star.svg';

function Col2({ title, movies }) {

    const popularMoviesToShow = 4;
    const baseURL = `https://image.tmdb.org/t/p/w500/`; //https://image.tmdb.org/t/p/w500/



    console.log('movies', movies);
    return(
        <div className='col'>
            <h2>{title}</h2>
            <div className='col_movies'>
                {movies.slice(0,popularMoviesToShow).map(movie => (
                    <div className='col_movie' key={movie.id} 
                        style={{ backgroundImage: `url(${baseURL}${movie.backdrop_path})` }} 
                    >
                        {/* <img src={`${baseURL}${movie.backdrop_path}`} alt={movie.title}></img> */}
                        <div className='col_movie_data'>
                            <img 
                                className="playCircle" 
                                src={playCircle} 
                                alt="reproducir película">
                            </img>
                            <h3>{movie.title}</h3>
                            {
                            movie.vote_average ?
                                <div className="average">
                                    <img 
                                        className="star" 
                                        src={star} 
                                        alt="star">
                                    </img>
                                    <p>{movie.vote_average}</p>
                                 </div>
                                 : ''
                           }
                           {
                            movie.release_date ?
                            <p>{movie.release_date.slice(0,4)}</p>
                            : ''
                           }
                            
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Col2;
