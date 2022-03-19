import React, { useEffect, useState} from 'react';
import axios from 'axios';
import apiRequests from './apiRequests';
import './Banner.css';
import play from './img/play.svg';
import plus from './img/plus.svg';

function Banner() {
    const[movie, setMovie] = useState([]);
        const baseURL = `https://image.tmdb.org/t/p/w500`; 
    useEffect(() => {   
        async function fetchData() {
            const request = await axios.get(apiRequests.fetchFeatMovie);
            console.log('request.data', request.data.results[0]);
            setMovie(request.data.results[0]);
            return request
        }
        fetchData();
    }, []);
// console.log(`url(${baseURL}${movie.backdrop_path})`);
  return (
    <header className= 'banner'
      style={{ backgroundImage: `url(${baseURL}${movie?.backdrop_path})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center center'}} 
    >
      <div className= 'banner_content'>  
        <p>original de <b>liteflix</b></p>
        <b className= 'banner_title'>{movie?.title}</b>
          <div className= 'banner_buttons'>  
              <button className='banner_button' >
            <img 
                  className="play" 
                  src={play} 
                  alt="play">
              </img>
                Reproducir
              </button>
              <button className='banner_button' >
                <img 
                  className="plus" 
                  src={plus} 
                  alt="agregar película">
                </img>
                Mi lista
              </button>
          </div> 
      </div> 

        <div className= 'banner_gradient_bottom'></div>
        {/* arriba de title */}
        {/* title */}
         {/* 2 buttons */}



    </header>
  );
}

export default Banner;