import React from 'react'
import './Sidebar.css'
import plusHvyTransImg from './img/plusHvyTrans.svg'
import close from './img/close.svg'
import { sidebarData } from './sidebarData'

function Sidebar(props) {
  function manageClicks(Link, colContent) {
    colContent !== undefined && props.setColContent(colContent)
    props.setFocus(Link)
  }
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
          return val.special ? (
            <li
              className="sidebarItem special"
              key={key}
              onClick={() => {
                manageClicks(val.link, val.colContent)
              }}
            >
              <img
                className="sidebarItemIcon"
                src={plusHvyTransImg}
                alt="Agregar película"
              />
              {val.title}
            </li>
          ) : (
            <li
              className="sidebarItem"
              key={key}
              onClick={() => {
                manageClicks(val.link, val.colContent)
              }}
            >
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
