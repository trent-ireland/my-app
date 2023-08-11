import React, { useState } from 'react';
import './SearchBar.css';

const SearchBar = ({ setSearchResults }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    fetch(`https://api.spotify.com/v1/search?q=${searchTerm}&type=track`, {
      headers: {
        'Authorization': 'Bearer YOUR_SPOTIFY_ACCESS_TOKEN' // Replace with your token
      }
    })
      .then(response => response.json())
      .then(data => {
        setSearchResults(data.tracks.items); // Assuming you're searching for tracks
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  };

  return (
    <div className="SearchBar">
      <input
        placeholder="Enter A Song, Album, or Artist"
        value={searchTerm}
        onChange={event => setSearchTerm(event.target.value)}
      />
      <button className="SearchButton" onClick={handleSearch}>
        SEARCH
      </button>
    </div>
  );
}

export default SearchBar;
