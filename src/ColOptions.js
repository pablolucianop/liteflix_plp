import React from 'react'
// import './ColOptions.css'
import { colData } from './colData'
import plusHvyTransImg from './img/plusHvyTrans.svg'

function ColOptions({ setColContent }) {
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
              {val.icon && <img src={plusHvyTransImg} alt="checkmark" />}
              {val.title}
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default ColOptions
