import React from 'react';
import './App.css';
import Col from './Col';
import apiRequests from './apiRequests';
import Banner from './Banner';
import NavBar from './NavBar';
import './App.css';


function App() {
  return (
    <div className="app">
      <NavBar/>
      {/* {banner} */}
      <Banner fetchUrl={apiRequests.fetchFeatMovie} />
      <h2>Esta es la fundaci'on m'itica de bs as</h2>
      <Col title='populares' fetchUrl={apiRequests.fetchPopMovies} />
      {/* <Col title='popular' /> */}
    </div>
  );
}

export default App;
