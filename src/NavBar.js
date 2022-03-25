import React from 'react'
import './NavBar.css'
import logoImg from './img/logo.svg'
import avatarImg from './img/avatar.jpg'
import notificationImg from './img/notification.svg'
import hamburgerImg from './img/hamburger.svg'
import plusHvyTransImg from './img/plusHvyTrans.svg'

function NavBar({ setFocus, focus, minWidthReached }) {
  let desktop = !minWidthReached
  const logo = <img className="navbar_logo" src={logoImg} alt="logo"></img>
  const addMovie = (
    <div
      className="addMovie"
      onClick={() => {
        setFocus({ current: 'upload' })
      }}
    >
      <img
        className="plusHvyTrans"
        src={plusHvyTransImg}
        alt="Agregar película"
      ></img>
      agregar película
    </div>
  )
  const avatar = <img className="avatar" src={avatarImg} alt="avatar"></img>

  const notification = (
    <img
      className="notification"
      src={notificationImg}
      alt="notification"
    ></img>
  )

  const hamburger = (
    <img
      className="hamburger"
      src={hamburgerImg}
      alt="menu"
      onClick={() => {
        setFocus({ current: 'sidebar' })
      }}
    ></img>
  )

  // const hamburgerRightMargin = (
  //   <img className="hamburgerRightMargin" src={hamburgerImg} alt="menu"></img>
  // )
  const mobileNav = (
    <div className="navBar">
      {focus.current !== 'sidebar' && hamburger}
      {logo}
      {avatar}
    </div>
  )
  const desktopNav = (
    <div className="navBar">
      <div className="navbar_left">
        {logo}
        {addMovie}
      </div>
      <div className="navbar_right">
        {focus.current !== 'sidebar' && hamburger}
        {notification}
        {avatar}
      </div>
    </div>
  )

  return <div className="container">{desktop ? desktopNav : mobileNav}</div>
}

export default NavBar
