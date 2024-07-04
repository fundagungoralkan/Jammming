import React, { useState, useCallback } from "react";
import './App.css';





import Playlist from "../Playlist/Playlist";
import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";




function App() {





const[searchResults,setSearchResults]=useState([]);
const[playlistName,setPlaylistName]=useState("New Playlist");
const[playlistTracks,setPlaylistTrack]=useState([]);









  return (
    <div className="App">
     
    </div>
  );
}

export default App;
