import React from 'react';
import './homepage.css';
import Notecard from '../Notecard/Notecard';
import notes from '../../Data/notes';

function Homepage() {

  return (
    <div id='Homepage'>
      <h1>Notes</h1>
      <div id="homecards">

        {/* displaying pinned notes first */}
        {
          notes.map(note => <>{
            (note.isPinned === "true") ?
              <Notecard title={note.title} tagline={note.tagline} isPinned={note.isPinned} />
              : <></>}</>)
        }

        {/* displaying unpinned notes later */}
        {
          notes.map(note => <>{
            (note.isPinned === "false") ?
              <Notecard title={note.title} tagline={note.tagline} isPinned={note.isPinned} />
              : <></>}</>)
        }
      </div>
    </div>
  )
}

export default Homepage;