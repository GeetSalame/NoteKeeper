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
            toast.success("Note Deleted...", { autoClose: 1000 });
            setTimeout(() => {
                window.location.reload();
            }, 1500);
        } catch (error) {
            toast.error(error);
        }
    }

    //returns date seconds in formatted string
    const formatDate = (dateSeconds) => {
        const MonthArr = ['Jan', 'Feb', 'Mar', "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dev"];
        const date = new Date(dateSeconds * 1000);
        const dateNum = date.getDate();
        const MonthNum = date.getMonth();
        const Year = date.getFullYear();
        return `${dateNum} ${MonthArr[MonthNum]}, ${Year}`;

    }

    return (
        <div id='Notecard' style={{ background: `linear-gradient(45deg, ${noteObj.noteColor}, ${noteObj.noteColor + 'B3'})` }}>
            <div style={{ display: "flex" }}>
                <div id='noteContent' onClick={() => { navigate(`/read/${noteObj.id}`) }}>
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

                {/* <a title='Note Color'><img src="https://cdn-icons-png.flaticon.com/512/686/686094.png" alt="color" className='NoteOptionsIcons' /></a> */}

                <a title='Edit' onClick={() => { navigate(`/update/${noteObj.id}`) }}><img src="https://cdn-icons-png.flaticon.com/512/2985/2985043.png" alt="edit" className='NoteOptionsIcons' /></a>

                <a title='Archive'><img src="https://cdn-icons-png.flaticon.com/512/7693/7693316.png" alt="archives" className='NoteOptionsIcons' /></a>

                <a title='Delete' onClick={() => deleteNote(noteObj.id)}><img src="https://cdn-icons-png.flaticon.com/512/3405/3405244.png" alt="delete" className='NoteOptionsIcons' /></a>
            </div>

            <div id='noteDate' style={{ color: noteObj.textColor }}>{formatDate(noteObj.date.seconds)}</div>
        </div>
    )
}

export default Notecard;