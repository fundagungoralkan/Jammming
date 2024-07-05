import React, { useState, useCallback } from "react";
import './App.css';





import Playlist from "../Playlist/Playlist";
import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";




function App() {





const[searchResults,setSearchResults]=useState([]);
const[playlistName,setPlaylistName]=useState("New Playlist");
const[playlistTracks,setPlaylistTrack]=useState([]);




const search=useCallback((term) => {
  Spotify.search(term).then(setSearchResults);
},[]);



const addTrack = useCallback(
  (track) => {
    if (playlistTracks.some((savedTrack) => savedTrack.id === track.id))
      return;

    setPlaylistTracks((prevTracks) => [...prevTracks, track]);
  },
  [playlistTracks]
);





const removeTrack = useCallback((track) => {
  setPlaylistTracks((prevTracks) =>
    prevTracks

  )
}

)









  return (
    <div className="App">
     
    </div>
  );
}

export default App;
