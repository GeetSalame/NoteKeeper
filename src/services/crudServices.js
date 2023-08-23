import { firestoreDB } from "../firebase-config";       //DB
import { collection, getDoc, getDocs, addDoc, updateDoc, deleteDoc, doc } from "firebase/firestore";        //CRUD functions

const notesCollection = collection(firestoreDB, "notes");

class noteCRUDservices {
    // create
    postNote = (noteObj) => {
        return addDoc(notesCollection, noteObj);
    }

    //read
    getNote = (noteId) => {
        const noteDoc = collection(firestoreDB, "notes", noteId);
        return getDoc(noteDoc);
    }

    // update
    updateNote = (noteObj) => {
        const noteDoc = doc(firestoreDB, "notes", noteObj.id);      //to fetch note document of given id
        return updateDoc(noteDoc, noteObj);
    }

    //delete
    deleteNote = (noteId) => {
        const noteDoc = doc(firestoreDB, "notes", noteId);      //fetch note doc with given id
        return deleteDoc(noteDoc)
    }

    //fetch all notes
    getAllNotes = () => {
        return getDocs(notesCollection);
    }
}

export default new noteCRUDservices();