import React from "react";
import './NavBar.css';
import logoImg from './img/logo.svg';
import avatarImg from './img/avatar.jpg';
import notificationImg from './img/notification.svg';
import hamburgerImg from './img/hamburger.svg';
import plusHvyTransImg from './img/plusHvyTrans.svg';

function NavBar(){
    let desktop= true
    const logo=
            <img 
                className="navbar_logo" 
                src={logoImg} 
                alt="logo">
            </img>
   const addMovie=
            <div className='addMovie'>
                <img 
                    className="plusHvyTrans" 
                    src={plusHvyTransImg} 
                    alt="Agregar película">
                </img>
                agregar película
            </div>
   const avatar=
           <img 
                className="avatar" 
                src={avatarImg} 
                alt="avatar">
            </img>

   const notification=
              <img 
                className="notification" 
                src={notificationImg} 
                alt="notification">
            </img>

    const hamburger=
            <img 
                className="hamburger" 
                src={hamburgerImg} 
                alt="menu">
            </img>

    const hamburgerRightMargin=
            <img 
                className="hamburgerRightMargin" 
                src={hamburgerImg} 
                alt="menu">
            </img>
const mobileNav=(
        <div className='navBar'>
            {hamburgerRightMargin}
            {logo}
            {avatar}
        </div>
)
const desktopNav=(
        <div className='navBar' >
            <div className="navbar_left">
                {logo}
                {addMovie}
            </div>
            <div className="navbar_right">
                {hamburger}
                {notification}
                {avatar}
            </div>
        </div>
)

    return(
    <div >
        {desktop ? desktopNav : mobileNav}
    </div>

                
    )
}

export default NavBar;