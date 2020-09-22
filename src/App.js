import React , {useEffect , useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Login from "./Login"
import Player from "./Player"
import { getTokenFromUrl } from './spotify';
import {useDataLayer} from "./DataLayer"
import SpotifyWebApi from "spotify-web-api-js"

const spotify = new SpotifyWebApi();


function App() {
  const [{user , token},dispatch] = useDataLayer();

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if(_token){
      dispatch({
        type : "SET_TOKEN",
        token : _token
      })

      spotify.setAccessToken(_token);

      spotify.getMe().then(user => {
        console.log("USERRRssss :" , user);
        dispatch({
          type : "SET_USER",
          user : user
        })
      })

      spotify.getUserPlaylists().then((playlists) =>{
        dispatch({
          type : "SET_PLAYLIST",
          playlists : playlists
        })
      })

      spotify.getPlaylist("0fQzxDAwkyEY7C9lYsc7ps").then(response => (
        dispatch({
          type : "SET_DISCOVER_WEEKLY",
          discover_weekly : response
        })
      ))  
    }
  }, [])

  console.log("USERRR :" , user);
  console.log("Token is ",token);
  return (
    <div className="App">
      {token ? (
        <Player spotify = {spotify} />
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;
