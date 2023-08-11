import React, { useState, useEffect } from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [playlistName, setPlaylistName] = useState('My Playlist');
  const [playlistTracks, setPlaylistTracks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [accessToken, setAccessToken] = useState(null);
  const [tokenExpiry, setTokenExpiry] = useState(null);

  useEffect(() => {
    // Check if token is expired
    if (Date.now() > tokenExpiry) {
      // Refresh the token here
    }
  }, [accessToken, tokenExpiry]);

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

  const handleSearch = searchTerm => {
    setLoading(true);
    // Fetch tracks from Spotify API
    // Filter out tracks that are already in the playlist
    // Set the search results
    setLoading(false);
  };

  const savePlaylist = () => {
    setLoading(true);
    // Save the playlist to Spotify
    setLoading(false);
  };

  return (
    <div>
      <h1>
        Ja<span className="highlight">mmm</span>ing
      </h1>
      <div className="App">
        {loading ? (
          <div>Loading...</div>
        ) : (
          <>
            <SearchBar onSearch={handleSearch} />
            <div className="App-playlist">
              <SearchResults searchResults={searchResults} onAdd={addTrack} />
              <Playlist
                playlistName={playlistName}
                onNameChange={updatePlaylistName}
                playlistTracks={playlistTracks}
                onRemove={removeTrack}
                onSave={savePlaylist}
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
