import React from 'react'
import './Sidebar.css'
import plusHvyTransImg from './img/plusHvyTrans.svg'
import close from './img/close.svg'

const sidebarData = [
  {
    title: 'inicio',
    link: 'home',
  },
  {
    title: 'series',
    link: 'home',
  },
  {
    title: 'películas',
    link: 'home',
  },
  {
    title: 'agregadas recientemente',
    link: 'home',
  },
  {
    title: 'populares',
    link: 'home',
  },
  {
    title: 'mis películas',
    link: 'home',
  },
  {
    title: 'mi lista',
    link: 'home',
  },
  {
    title: 'agregar película',
    link: 'upload',
    icon: 'plusHvyTransImg',
  },
  {
    title: 'cerrar sesión',
    link: 'home',
  },
]

function Sidebar(props) {
  return (
    <div className="sidebar">
      <img
        onClick={() => {
          props.setOpenSideBar({ current: 'home' })
        }}
        className="sidebarClose"
        src={close}
        alt="close"
      ></img>
      <ul className="sidebarList">
        {sidebarData.map((val, key) => {
          return (
            // {nav.var}
            <li
              className="sidebarItem light"
              key={key}
              onClick={() => {
                props.setOpenSideBar({ current: val.link })
              }}
            >
              {val.icon && (
                <img
                  className="sidebarItemIcon"
                  src={plusHvyTransImg}
                  alt="Agregar película"
                />
              )}
              {val.title}
            </li>
          )
        })}
      </ul>
      <div className="sidebarBackdrop"></div>
    </div>
  )
}

export default Sidebar
