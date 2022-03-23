import React from 'react';
import './Sidebar.css';
import {SidebarData} from './SidebarData'
import plusHvyTransImg from './img/plusHvyTrans.svg';

function Sidebar(props) {
    return (
        <div className="sidebar"  onClick={()=>{console.log(props.setOpenSideBar(false))}} >
            <button className="sidebarButton">x</button>
            <ul className="sidebarList"> 
                {SidebarData.map((val, key) => {
                    return(
                        // {nav.var}
                        <li className="sidebarItem light" key={key} >
                         {
                         val.icon && <img className="sidebarItemIcon" src={plusHvyTransImg} alt="Agregar película"/>  
                         }
                         {val.title}
                        </li>
                    )
                })}
            </ul> 
            <div className="modal-backdrop"> 
            </div>
        </div>  
    )     
}

export default Sidebar;