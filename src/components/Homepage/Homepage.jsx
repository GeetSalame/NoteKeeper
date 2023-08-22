import React from 'react';
import './homepage.css';
import Notecard from '../Notecard/Notecard';

function Homepage() {


  const openNote = () => {
    // document.getElementById("ReadNote").style.display = "flex";
  }

  const closeNote = () => {
    document.getElementById("ReadNote").style.display = "none";
  }

  return (
    <div id='Homepage'>
      <h1 onClick={openNote}>Notes</h1>
      <div id="homecards">
        <div onClick={openNote}><Notecard pinned="true" /></div>
        <div onClick={openNote}><Notecard /></div>
        <div onClick={openNote}><Notecard /></div>
        <div onClick={openNote}><Notecard /></div>
        <div onClick={openNote}><Notecard /></div>
        <div onClick={openNote}><Notecard /></div>
      </div>
      <div id="ReadNote">
        <img src="https://cdn-icons-png.flaticon.com/512/5368/5368396.png" alt="close" id='closeNoteIcon' onClick={closeNote} />
        <Notecard />
      </div>
    </div>
  )
}

export default Homepage;