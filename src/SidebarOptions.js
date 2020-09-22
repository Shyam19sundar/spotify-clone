import React from "react"
import  './SidebarOptions.css'

function SidebarOptions({option , Icon}){
    return(
        <div className="sidebarOptions">
            {Icon && <Icon className="sidebarOptions-icons" />}
           {Icon ? <h4>{option}</h4> : <p>{option}</p>}
           
        </div>
    )
}

export default SidebarOptions;