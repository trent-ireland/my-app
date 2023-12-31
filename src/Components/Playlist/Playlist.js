import React from 'react';
import './Playlist.css';
import TrackList from '../TrackList/TrackList';

function Playlist(props) {
  return (
    <div className="Playlist">
      <input defaultValue={props.playlistName} />
      <TrackList 
        tracks={props.playlistTracks} 
        onRemove={props.onRemove}  // Pass the onRemove function to TrackList
        isRemoval={true}  // This prop indicates that tracks can be removed
      />
      <button className="Playlist-save">SAVE TO SPOTIFY</button>
    </div>
  );
}

export default Playlist;
