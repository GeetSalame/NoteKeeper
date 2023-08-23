import React, { useState } from 'react';
import Notecard from '../../Notecard/Notecard';
import './updatenote.css';
import { useNavigate } from 'react-router-dom';

function Updatenote() {
    const navigate = useNavigate();
    return (
        <div id="UpdateNote">
            <img src="https://cdn-icons-png.flaticon.com/512/5368/5368396.png" alt="close" id='closeNoteIcon' onClick={() => { navigate("/") }} />
            <Notecard title="Title" tagline="tagline" isPinned="false" />
        </div>
    )
}

export default Updatenote;