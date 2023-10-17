import React, { useState } from 'react'
import NoteContext from './NoteContext'
import { json } from 'react-router-dom';

const NoteState = ({ children }) => {
    let host = 'http://localhost:5000/api/notes';
    let noteInitial = [];
    const [notes, setNotes] = useState(noteInitial);

    const fetchNote = async () => {
        console.log("Fetching Note");
        try {
            const res = await fetch(`${host}/fetchnote`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "token": localStorage.getItem("token")
                },
            });

            const resData = await res.json();
            console.log(res);
            console.log(resData);
            setNotes(resData);
        } catch (err) {
            console.log(err);
        }
    }

    const addNote = async (title, description) => {
        console.log("Adding Note");
        try {
            const res = await fetch(`${host}/addnote`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "token": localStorage.getItem("token"),
                },
                body: JSON.stringify({ title, description })
            });

            const resData = await res.json();
            console.log(res);
            console.log(resData);
            setNotes(notes.concat(resData));

        } catch (err) {
            console.log(err);
        }
    }

    const editNote = async (id, title, description) => {
        console.log("Editing Note");
        console.log("Editing Note id : " + id);
        console.log(title, description);

        try {
            const res = await fetch(`${host}/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    "token": localStorage.getItem("token"),
                },
                body: JSON.stringify({ title, description })
            });
            const resData = await res.json();
            console.log(res);
            console.log(resData);

            // update Note in client side

            let newNotes = JSON.parse(JSON.stringify(notes));

            for (let index = 0; index < newNotes.length; index++) {
                const element = newNotes[index];
                if (element._id === id) {
                    element.title = title;
                    element.description = description;
                    break;
                }
            }
            setNotes(newNotes);

        } catch (err) {
            console.log(err);
        }
    }

    const deleteNote = async (id) => {
        console.log("Deleting Note");
        console.log("Deleting Note id : " + id);
        try {

            const res = await fetch(`${host}/${id}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    "token": localStorage.getItem("token"),
                },
            });

            const resData = await res.json();
            console.log(res);
            console.log(resData);
            const newNotes = notes.filter((note) => { return note._id !== id });
            setNotes(newNotes);

        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div>
            <NoteContext.Provider value={{ notes, setNotes, fetchNote, addNote, editNote, deleteNote }}>
                {children}
            </NoteContext.Provider>
        </div>
    )
}

export default NoteState
