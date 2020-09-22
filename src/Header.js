import React from "react"
import SearchIcon from '@material-ui/icons/Search';
import "./Header.css"
import {Avatar} from '@material-ui/core';
import {useDataLayer} from './DataLayer'


function Header (){

    const [{ user } , dispatch] = useDataLayer();
    return(
        <div className="header">
            <div className="header-left">
                <SearchIcon />
                <input 
                    placeholder="search for songs"
                    type="text"
                />    
            </div>
            <div className="header-right">
                {/*<Avatar src={user?.images[0]?.url} alt="RQ" />
                <h4>{user?.display_name}</h4>*/}
                <Avatar src="" alt="RQ" />
                <h4>shyammm</h4>
            </div>
        </div>
    )
}
export default Header;