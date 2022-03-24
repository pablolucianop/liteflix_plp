import React from 'react'
import './Sidebar.css'
import { SidebarData } from './SidebarData'
import plusHvyTransImg from './img/plusHvyTrans.svg'
import close from './img/close.svg'
function Sidebar(props) {
  return (
    <div className="sidebar">
      <img
        onClick={() => {
          props.setOpenSideBar({ current: 'home' })
        }}
        className="sidebarButton"
        src={close}
        alt="close"
      ></img>
      <ul className="sidebarList">
        {SidebarData.map((val, key) => {
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
