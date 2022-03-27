import React from 'react'
import './Sidebar.css'
import plusHvyTransImg from './img/plusHvyTrans.svg'
import close from './img/close.svg'
import { sidebarData } from './sidebarData'

function Sidebar(props) {
  //gives funcionality to the sidebar. Set what part to show and what column to show
  function manageClicks(Link, colContent) {
    colContent !== undefined && props.setColContent(colContent)
    props.setFocus(Link)
  }
  return (
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
          //is the column is special, give more space and style it differently
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
            // if it is not special, just show the title
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
