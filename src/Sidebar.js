import React from 'react'
import './Sidebar.css'
import plusHvyTransImg from './img/plusHvyTrans.svg'
import close from './img/close.svg'
import { sidebarData } from './sidebarData'

import { Spring } from 'react-spring'

function Sidebar(props) {
  return (
    //spring animation appear from the right

    <div className="sidebar">
      <img
        onClick={() => {
          props.setFocus('home')
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
              className="sidebarItem"
              key={key}
              onClick={() => {
                props.setFocus(val.link)
              }}
            >
              {val.icon && (
                <img
                  className="sidebarItemIcon"
                  src={plusHvyTransImg}
                  alt="Agregar película"
                />
              )}
              {val.icon ? <b>{val.title}</b> : val.title}
            </li>
          )
        })}
      </ul>
      <div className="sidebarBackdrop"></div>
    </div>
  )
}

export default Sidebar
