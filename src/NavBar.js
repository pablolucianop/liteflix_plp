import React from "react";
import './NavBar.css';

function NavBar(){
    return(
        <div className="navBar">
            <img 
                className="navbar_logo" 
                src="https://www.themoviedb.org/assets/2/v4/logos/408x161-powered-by-rectangle-green-bb4301c10ddc749b4e79463811a68afebeae66ef43d17bcfd8ff0e60ded7ce99.png" 
                alt="logo">
            </img>

            <img className='avatar' 
                src="https://upload.wikimedia.org/wikipedia/commons/3/3a/Wikimedia_Community_Logo%2C_phabricator_Avatar_version.svg" 
                alt="avatar">
            </img>
        </div>
                
    )
}

export default NavBar;