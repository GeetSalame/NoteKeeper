import React from 'react';
import './notecard.css';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import noteCRUDservices from '../../services/crudServices';

function Notecard({ noteObj }) {
    const navigate = useNavigate();

    const deleteNote = async (noteId) => {
        try {
            await noteCRUDservices.deleteNote(noteId);
            navigate("/");
            toast.success("Note Deleted");
        } catch (error) {
            toast.error(error);
        }
    }

    return (
        <div id='Notecard' style={{ background: noteObj.noteColor }}>
            <div style={{ display: "flex" }}>
                <div id='noteContent' onClick={() => { navigate("/read") }}>
                    <h1 id="noteTitle" style={{ color: noteObj.textColor }}>{noteObj.title}</h1>
                    <p id="noteTagline" style={{ color: noteObj.textColor }}>{noteObj.tagline}</p>
                    {/* <p id="noteBody">Body</p> */}
                </div>
                <div id="notePinsec" className='NoteOptionsIcons'>
                    {noteObj.isPinned === true ?
                        <a title='Unpin'><img src="https://cdn-icons-png.flaticon.com/512/2951/2951513.png" alt="pinned" className='notePin' /></a>
                        : <a title='Pin'><img src="https://cdn-icons-png.flaticon.com/512/2951/2951412.png" alt="notPinned" className='notePin' /></a>}
                </div>
            </div>
            <div id="noteOptions">
                <a title='Note Color'><img src="https://cdn-icons-png.flaticon.com/512/686/686094.png" alt="color" className='NoteOptionsIcons' /></a>
                <a title='Edit' onClick={() => { navigate("/update") }}><img src="https://cdn-icons-png.flaticon.com/512/2985/2985043.png" alt="edit" className='NoteOptionsIcons' /></a>
                <a title='Archive'><img src="https://cdn-icons-png.flaticon.com/512/7693/7693316.png" alt="archives" className='NoteOptionsIcons' /></a>
                <a title='Delete'><img src="https://cdn-icons-png.flaticon.com/512/3405/3405244.png" onClick={()=>deleteNote(noteObj.id)} alt="delete" className='NoteOptionsIcons' /></a>
            </div>
        </div>
    )
}

export default Notecard;