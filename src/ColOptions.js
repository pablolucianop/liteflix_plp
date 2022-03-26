import React from 'react'
import './ColOptions.css'
import { colData } from './colData'
import check from './img/check.svg'

function ColOptions({ setColContent, colContent, setFocus, focus }) {
  const SidebarOptionsArr = colData
  return (
    <div className="colOptions">
      <div className="square"></div>
      <ul>
        {SidebarOptionsArr.map((val, key) => {
          return (
            // {nav.var}
            <li
              key={key}
              onClick={() => {
                setColContent(val.link)
                setFocus('home')
              }}
            >
              {val.link === colContent ? (
                <b>
                  {val.title}
                  <img src={check} alt="checkmark" className="checkmark" />
                </b>
              ) : (
                val.title
              )}
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default ColOptions
