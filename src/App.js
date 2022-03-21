import React, {useEffect, useState} from 'react';
import axios from 'axios';
import './App.css';
import Col from './Col';
import Col2 from './Col2';
import apiRequests from './apiRequests';
import Banner from './Banner';
import NavBar from './NavBar';
import Sidebar from './Sidebar';
import {info} from './info'
import UploadFile from './UploadFile';
import './App.css';


function App() {
    const [popMovies, setMovies] = useState([]);
    const [featMovie, setFeatMovie] = useState([]);
    const popularMoviesToShow = 4;
    const baseURL = `https://image.tmdb.org/t/p/w500/`; //https://image.tmdb.org/t/p/w500/

    useEffect(() => {

        async function fetchData() {
            console.log('fetchUrl', apiRequests.fetchPopMovies);
            const request = await axios.get(apiRequests.fetchPopMovies);
            setMovies(request.data.results);
            const request2 = await axios.get(apiRequests.fetchPopMovies);
            setFeatMovie(request2.data.results);

            return request
        }
        fetchData()

    }, []);
console.log('popMovies', popMovies);


  return (
    <div className="app">
      <NavBar/>
      <Sidebar />
      <Banner fetchUrl={apiRequests.fetchFeatMovie} />
      {/* <Col title='populares' fetchUrl={apiRequests.fetchPopMovies} /> */}
      {console.log('info', info)}
      <Col2 title='populares' movies={popMovies} />
      {/* <Col title='mis películas' fetchUrl={indo} /> */}
      {/* <UploadFile /> */}
    </div>
  );
}

export default App;
