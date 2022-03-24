import React from 'react'
// import './ColOptions.css'
import { colData } from './colData'
import check from './img/check.svg'

function ColOptions({ setColContent, colContent }) {
  const SidebarOptionsArr = colData
  return (
    <div>
      <ul>
        {SidebarOptionsArr.map((val, key) => {
          return (
            // {nav.var}
            <li
              key={key}
              onClick={() => {
                setColContent(val.link)
              }}
            >
              {val.title}
              {val.link === colContent && <img src={check} alt="checkmark" />}
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default ColOptions
