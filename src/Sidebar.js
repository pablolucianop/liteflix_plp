import React from 'react';
import './Sidebar.css';
import {SidebarData} from './SidebarData'
import plusHvyTransImg from './img/plusHvyTrans.svg';

function Sidebar() {
    return (
        <div className="sidebar">
            <ul className="sidebarList"> 
                {SidebarData.map((val, key) => {
                    return(
                        // {nav.var}
                        <li className="sidebarItem light" key={key} onClick={()=>{window.location.pathname = val.link}}>
                         {
                         val.icon        ? <img className="sidebarItemIcon" src={plusHvyTransImg} alt="Agregar película"/>
                                            : ''      
                         }
                            {val.title}
                        </li>
                    )
                })}
            </ul> 
        </div>  
    )     
}

export default Sidebar;