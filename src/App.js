import React from 'react';
import './App.css';
import Col from './Col';
import apiRequests from './apiRequests';
import Banner from './Banner';
import NavBar from './NavBar';
import Sidebar from './Sidebar';
import {info} from './info'
import UploadFile from './UploadFile';
import './App.css';


function App() {
  return (
    <div className="app">
      <NavBar/>
      <Sidebar />
      <Banner fetchUrl={apiRequests.fetchFeatMovie} />
      <Col title='populares' fetchUrl={apiRequests.fetchPopMovies} />
      {/* <Col title='mis películas' fetchUrl={indo} /> */}
      {/* <UploadFile /> */}
    </div>
  );
}

export default App;
