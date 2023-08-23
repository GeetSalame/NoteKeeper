import React, { useEffect, useState } from 'react';
import Notecard from '../../Notecard/Notecard';
import './readnote.css';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import noteCRUDservices from "../../../services/crudServices";

function Readnote() {
    const navigate = useNavigate();
    const noteId = window.location.href.split('/').slice(-1)[0];        //fetching noteId from url

    const [NoteObj, setNoteObj] = useState({});

    //filling values with old data
    useEffect(() => {
        async function fetchNote() {
            try {
                const data = await noteCRUDservices.getNote(noteId);
                setNoteObj(data.data());
            } catch (error) {
                toast.error(error);
            }
        }
        fetchNote();
    }, [])

    return (
        <div id="ReadNote">
            <img src="https://cdn-icons-png.flaticon.com/512/5368/5368396.png" alt="close" id='closeNoteIcon' onClick={() => { navigate("/") }} />

            <div id='ReadNotecard' style={{ background: `linear-gradient(45deg, ${NoteObj.noteColor}, ${NoteObj.noteColor + 'B3'})` }}>
                <div id='ReadNotecardHead'>
                    <div id='ReadnoteContent'>
                        <h1 id="ReadnoteTitle" style={{ color: NoteObj.textColor }}>{NoteObj.title}</h1>
                        <p id="ReadnoteTagline" style={{ color: NoteObj.textColor, opacity:".5" }}>{NoteObj.tagline}</p>
                        <p id="ReadnoteBody" style={{ color: NoteObj.textColor }}>{NoteObj.body}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Readnote;