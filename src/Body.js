import React from "react"
import "./Body.css"
import Header from "./Header"
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled'
import FavoriteIcon from '@material-ui/icons/Favorite';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import {useDataLayer} from "./DataLayer"
import SongRow from './SongRow'

function Body ({spotify}){
    const [{discover_weekly} , dispatch] = useDataLayer();
    return(
        <div className="body">
            <Header spotify={spotify}/>
            <div className="body-info" >
                <img 
                    src="data:image/jpeg;base64,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"
                    alt="" />
                <div className="body-infotext">
                    <strong>PLAYLIST</strong>
                    <h2>Discover Weekly</h2>
                    <p>description..</p>
                    {/*<p>{discover_weekly.description}</p>*/}
                </div>
                    
            </div>
            <div className="body-song">
                <div className="body-icon">
                    <PlayCircleFilledIcon className="body-shuffle"/>
                    <FavoriteIcon fontSize="large"/>
                    <MoreHorizIcon />
                </div>
              {/*  {discover_weekly.tracks.items.map(item =>(
                    <SongRow track={item.track} />
              ))}  */} 
              <SongRow track="Oru Naalil Vaazhkai "/>
            </div>

        </div>
    )
}
export default Body;