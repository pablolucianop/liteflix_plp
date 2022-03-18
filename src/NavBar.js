import React from "react";
import './NavBar.css';
import logo from './img/logo.svg';
import avatar from './img/avatar.jpg';
import notification from './img/notification.svg';
import hamburger from './img/hamburger.svg';
import plusHvyTrans from './img/plusHvyTrans.svg';

function NavBar(){
    return(
        <div className="navBar">
            <img 
                className="navbar_logo" 
                src={logo} 
                alt="logo">
            </img>
            <div className='addMovie'>
                <img 
                    className="plusHvyTrans" 
                    src={plusHvyTrans} 
                    alt="Agregar película">
                </img>
                agregar película
            </div>
            <img 
                className="hamburger" 
                src={hamburger} 
                alt="menu">
            </img>
           <img 
                className="notification" 
                src={notification} 
                alt="notification">
            </img>
           <img 
                className="avatar" 
                src={avatar} 
                alt="avatar">
            </img>

        </div>
                
    )
}

export default NavBar;