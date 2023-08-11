import React, { useState } from 'react';
import './SearchBar.css';

const SearchBar = (props) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]); // Initialize with an empty array

  const handleSearch = () => {
    fetch(`https://api.spotify.com/v1/search?q=${searchTerm}`)
      .then(response => response.json())
      .then(data => {
        // Process the data as needed
        // For example, update state with search results
        setSearchResults(data.results);
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

      <div className="SearchResults">
        {searchResults.map(result => (
          <div key={result.id} className="SearchResultItem">
            {/* Display search result details here */}
            {/* For example: <p>{result.name}</p> */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default SearchBar;
