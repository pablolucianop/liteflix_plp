import React from 'react';
import './App.css';
import Col from './Col';
import apiRequests from './apiRequests';
import Banner from './Banner';
import NavBar from './NavBar';
import Sidebar from './Sidebar';
import UploadFile from './UploadFile';
import './App.css';


function App() {
  return (
    <div className="app">
      <NavBar/>
      <Sidebar />
      <Banner fetchUrl={apiRequests.fetchFeatMovie} />
      <Col title='populares' fetchUrl={apiRequests.fetchPopMovies} />
      {/* <UploadFile /> */}
    </div>
  );
}

export default App;
