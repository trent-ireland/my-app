import React, { useState } from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [playlistName, setPlaylistName] = useState('My Playlist');
  const [playlistTracks, setPlaylistTracks] = useState([]);

  const addTrack = track => {
    if (playlistTracks.find(savedTrack => savedTrack.id === track.id)) {
      return;
    }
    setPlaylistTracks(prevTracks => [...prevTracks, track]);
  };

  const removeTrack = track => {
    setPlaylistTracks(prevTracks => prevTracks.filter(t => t.id !== track.id));
  };

  const updatePlaylistName = name => {
    setPlaylistName(name);
  };

  return (
    <div>
      <h1>
        Ja<span className="highlight">mmm</span>ing
      </h1>
      <div className="App">
        <SearchBar setSearchResults={setSearchResults} />
        <div className="App-playlist">
          <SearchResults searchResults={searchResults} onAdd={addTrack} />
          <Playlist
            playlistName={playlistName}
            onNameChange={updatePlaylistName}
            playlistTracks={playlistTracks}
            onRemove={removeTrack}
            onAdd={addTrack}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
