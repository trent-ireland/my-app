import React from 'react';
import './TrackList.css';
import Track from '../Track/Track';

function TrackList(props) {
  return (
    <div className="TrackList">
      {
        props.tracks.map(track => {
          return <Track 
                   track={track} 
                   key={track.id} 
                   onAdd={props.onAdd} 
                   onRemove={props.onRemove}  // Pass the onRemove function to Track
                   isRemoval={props.isRemoval}  // Pass the isRemoval prop to Track
                 />
        })
      }
    </div>
  );
}

export default TrackList;
