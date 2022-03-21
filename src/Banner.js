import React from 'react';
import './Banner.css';
import play from './img/play.svg';
import plus from './img/plus.svg';

function Banner({movie}) {
    const baseURL = `https://image.tmdb.org/t/p/w500/`;


  return (
    <header className= 'banner'
      style={{ backgroundImage: `url(${baseURL}${movie?.backdrop_path})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center center'}} 
    >
      {/* <div className= 'banner_gradient_bottom'></div> */}
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
      
    </header>
  );
}

export default Banner;