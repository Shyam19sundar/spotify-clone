import React from "react"
import "./Sidebar.css"
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import SidebarOptions from './SidebarOptions'
import {useDataLayer} from "./DataLayer"

function Sidebar (){
    const [{playlists} , dispatch] = useDataLayer();
    /* var menuItems = []
    for (var i=0; i<1 ; i++){
    menuItems.push(<SidebarOptions option={playlists.items[i].name} /> )
    } */

    return(
        <div className="sidebar">
            <img
                className="sidebar-logo"
                src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
                alt="Loading ..."
            />  

            <SidebarOptions Icon={HomeIcon} option="Home" />
            <SidebarOptions Icon={SearchIcon} option="Search" />
            <SidebarOptions Icon={LibraryMusicIcon} option="Your Library" />

            <strong className="sidebar-title">PLAYLIST</strong>
            <hr />
            
            {console.log("kkkkkkkk",playlists)}
                
           
            <SidebarOptions option="Yuvan" />
            <SidebarOptions option="Ar.Rahman" />
            <SidebarOptions option="G.V.P" />
            <SidebarOptions option="Haaris Jayaraj" /> 
          
            
        </div>
    )
}
export default Sidebar;