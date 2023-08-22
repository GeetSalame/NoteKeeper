import React from 'react';
import './notecard.css';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

function Notecard(params) {
    const navigate = useNavigate();

    const notifyDelete = () => {
        toast.success("Note Deleted");
    }

    return (
        <div id='Notecard'>
            <div style={{ display: "flex" }}>
                <div id='noteContent' onClick={()=>{navigate("/read")}}>
                    <h1 id="noteTitle">{params.title}</h1>
                    <p id="noteTagline">{params.tagline}</p>
                    {/* <p id="noteBody">Body</p> */}
                </div>
                <div id="notePinsec" className='NoteOptionsIcons'>
                    {params.isPinned === "true" ? <img src="https://cdn-icons-png.flaticon.com/512/2951/2951513.png" alt="pinned" className='notePin' /> : <img src="https://cdn-icons-png.flaticon.com/512/2951/2951412.png" alt="notPinned" className='notePin' />}
                    {/* {params.pinned === "true" ? <img src="https://cdn-icons-png.flaticon.com/512/73/73169.png" alt="pinned" className='notePin' /> : <img src="https://cdn-icons-png.flaticon.com/512/1274/1274860.png" alt="notPinned" className='notePin' />} */}
                </div>
            </div>
            <div id="noteOptions">
                <img src="https://cdn-icons-png.flaticon.com/512/686/686094.png" alt="color" className='NoteOptionsIcons' />
                <img src="https://cdn-icons-png.flaticon.com/512/2985/2985043.png" alt="edit" className='NoteOptionsIcons' />
                <img src="https://cdn-icons-png.flaticon.com/512/7693/7693316.png" alt="archives" className='NoteOptionsIcons' />
                <img src="https://cdn-icons-png.flaticon.com/512/3405/3405244.png" onClick={notifyDelete} alt="delete" className='NoteOptionsIcons' />
            </div>
        </div>
    )
}

export default Notecard;