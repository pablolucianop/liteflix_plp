import React, {useEffect, useState} from 'react';
import axios from 'axios';
import './App.css';
import Col from './Col';
import apiRequests from './apiRequests';
import Banner from './Banner';
import NavBar from './NavBar';
import Sidebar from './Sidebar';
import ColOptions from './ColOptions';
import {info} from './info'
import './App.css';
import Upload from './Upload';


function App() {
    const [popMovies, setMovies] = useState([]);
    const [featMovie, setFeatMovie] = useState([]);
    const [addedMovies, setaddedMovies] = useState([]);
    const [openSideBar, setOpenSideBar] = useState(false);
    const popularMoviesToShow = 4;
    const baseURL = `https://image.tmdb.org/t/p/w500/`; 

    useEffect(() => {
        async function fetchData() {
            console.log('fetchUrl', apiRequests.fetchPopMovies);
            const requestPopMovies = await axios.get(apiRequests.fetchPopMovies);
            setMovies(requestPopMovies.data.results);
            const requestFeatMovie = await axios.get(apiRequests.fetchFeatMovie);
            setFeatMovie(requestFeatMovie.data.results);

            return requestPopMovies
        }
        fetchData()
    }, []);

  return (
    <div className="app"  >
     < div className="content"  onClick={() => {setOpenSideBar(true)}} >
      <Banner fetchUrl={apiRequests.fetchFeatMovie} movie ={featMovie[0]}  />
      <Col title='populares' movies={popMovies} 
      />
     </div>



      {/* <Col title='populares' fetchUrl={apiRequests.fetchPopMovies} /> */}
      {/* {console.log('info', info)} */}

      {/* <Col title='mi lista' movies={addedMovies} /> */}
      {/* <Col title='mis películas' fetchUrl={indo} /> */}
      {/* <Upload  setaddedMovies={setaddedMovies} xxy ={addedMovies} /> */}
      {/* <colOptions /> */}
      <NavBar />
      {openSideBar && <Sidebar setOpenSideBar={setOpenSideBar} />}
    </div>
  );
}

export default App;
