import React from 'react'
import { useNavigate } from 'react-router-dom';
import Notecard from '../../Notecard/Notecard';
import './createnote.css';

function Createnote() {
    const navigate = useNavigate();
    return (
        <div id='Createnote'>
            <img src="https://cdn-icons-png.flaticon.com/512/5368/5368396.png" alt="close" id='closeNoteIcon' onClick={() => { navigate("/") }} />
            <Notecard title="Title" tagline="tagline" isPinned="false" />
        </div>
    )
}

export default Createnote;