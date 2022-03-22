import React from 'react';
import './Sidebar.css';
import plusHvyTransImg from './img/plusHvyTrans.svg';

function colOptions() {
    const  SidebarOptionsArr = ['populares', 'mis películas'];
    return (
        <div className="sidebar">
            <ul className="sidebarList"> 
                {SidebarOptionsArr.map((val, key) => {
                    return(
                        // {nav.var}
                        <li className="sidebarItem light" key={key} onClick={()=>{window.location.pathname = val.link}}>
                         {
                         val.icon        && <img className="sidebarItemIcon" src={plusHvyTransImg} alt="Agregar película"/>    
                         }
                            {val.title}
                        </li>
                    )
                })}
            </ul> 
        </div>  
    )     
}

export default colOptions;