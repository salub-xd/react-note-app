import React, { useEffect, useState, useContext, useRef } from 'react'
// import { NavLink } from "react-router-dom";
import NoteContext from '../../context/noteContext/NoteContext';
// import { DeleteIcon, EditIcon, HamburgerIcon } from '@chakra-ui/icons';
import NoteItem from './NoteItem';
import AddNote from './AddNote';

const Notes = () => {
    const context = useContext(NoteContext);
    const { notes, fetchNote, editNote } = context;
    const [note, setNote] = useState({ id: "", title: "", description: "" });
    // const [myError, setMyError] = useState(false);
    // const [click, setClick] = useState(false);
    const ref = useRef(null);

    const onChange = (event) => {
        setNote({ ...note, [event.target.name]: event.target.value });
    }

    const handleClick = (e) => {
        e.preventDefault();
        console.log(note);
        if (note.title.length === 0 && note.description.length === 0) {
            console.log("Enter Some Letter then you can add Note")
            // setMyError(true);
        } else {
            console.log("Updating the note");
            // setMyError(false);
            editNote(note.id, note.title, note.description);
            setNote({ title: "", description: "" });
        }
    }

    const updateNote = (currentNote) => {
        // e.preventDefault();
        ref.current.click();
        setNote({ id: currentNote._id, title: currentNote.title, description: currentNote.description });
        // console.log('hi');
    }

    // Text Features

    // const upperCase = () => {
    //     console.log('My Value ' + myValue);
    //     let newText = myValue.description.toLocaleUpperCase();
    //     console.log('My Value ' + newText);
    //     setMyValue(newText);
    // }
    // const clearText = () => {
    //     console.log('My Value ' + myValue);
    //     let newText = '';
    //     console.log('My Value ' + newText);
    //     setMyValue(newText);
    // }
    // const lowerCase = () => {
    //     console.log('My Value ' + myValue);
    //     let newText = myValue.description.toLocaleUpperCase();
    //     console.log('My Value ' + newText);
    //     setMyValue(newText);
    // }


    useEffect(() => {
        // eslint-disable-next-line
        if (localStorage.getItem("token")) {
            fetchNote();
        }
    }, [])


    return (
        <>
            <AddNote />
            {/* <div ref={ref} className="addNoteForm">
                <form id="contacts" className="form">
                    <h2>Edit Note Here</h2> */}
            {/* <div className='headerBox'>
                        <h2>Edit Note Here</h2>
                        <NavLink><div className="moreOptions" onClick={() => { setClick(!click) }}><HamburgerIcon boxSize={'25'} />
                            <div className={`optionsBox ${click ? 'open' : ''}`}>
                                <button className='optionsBtn' onClick={upperCase}>UpperCase</button>
                                <button className='optionsBtn' onClick={clearText}>Clear Text</button>
                                <button className='optionsBtn ' onClick={lowerCase}>LowerCase</button>
                            </div>
                        </div></NavLink>
                    </div> */}
            {/* <div className={myError ? 'error' : ''}>
                        <p type="Title"><input type='text' id="title" name="title" placeholder="Write Your Title.." value={myValue.title} onChange={onChange} ></input> </p>
                        <p type="Description"><input type='text' id="description" name="description" placeholder="Write Your Description.." value={myValue.description} onChange={onChange}></input></p>
                        <div className="formBox">
                            <small className='errDisplay'>Atleast Enter Something</small>
                            <button onClick={handleClick} type="submit" id="submit" className="submitBtn">Submit</button>
                        </div>
                    </div>
                </form>
            </div> */}


            <button ref={ref} type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
                hidden button
            </button>

            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Edit Note</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">Title</label>
                                    <input type="text" className="form-control" id="title" aria-describedby="emailHelp" name='title' value={note.title} onChange={onChange} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputPassword1" className="form-label">Description</label>
                                    <input type="text" className="form-control" id="description" name='description' value={note.description} onChange={onChange} />
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button onClick={handleClick} data-bs-dismiss='modal' type="button" className="btn btn-primary">Save Note</button>
                        </div>
                    </div>
                </div>
            </div>

            <div class="cards">
                {notes.map((note) => {
                    return <NoteItem key={note._id} note={note} updateNote={updateNote} />
                })}
            </div>
        </>
    )
}

export default Notes
