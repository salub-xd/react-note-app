import React, { useContext, useState } from 'react'
import './notes.css'
import NoteContext from '../../context/noteContext/NoteContext';
const AddNote = () => {

    const context = useContext(NoteContext);
    const { addNote } = context;

    const [myValue, setMyValue] = useState({ title: "", description: "" });
    const [myError, setMyError] = useState(false);
    const onChange = (event) => {
        setMyValue({ ...myValue, [event.target.name]: event.target.value });
    }
    const submitClick = (e) => {
        e.preventDefault();
        console.log(myValue);
        if (myValue.title.length === 0 && myValue.description.length === 0) {
            // console.log("Enter Some Letter then you can add Note")
            setMyError(true);
        } else {
            // console.log()
            addNote(myValue.title, myValue.description);
            setMyError(false);
            setMyValue({ title: "", description: "" });
        }
    }
    // const getData = ()=>{
    //     const myUserData = localStorage.getItem("userData");
    //     let user = JSON.parse(myUserData)
    //     console.log(myUserData);
    // }

    return (
        <div>
            <div className="addNoteForm">
                <form id="contacts" className="form">
                    <h2>Add Note Here</h2>
                    <div className={myError ? 'error' : ''}>
                        <p type="Title"><input type='text' id="title" name="title" placeholder="Write Your Title.." value={myValue.title} onChange={onChange} ></input></p>
                        <p type="Description"><input type='text' id="description" name="description" placeholder="Write Your Description.." value={myValue.description} onChange={onChange}></input></p>
                        <div className="formBox">
                            <small className='errDisplay'>Atleast Enter Something</small>
                            <button onClick={submitClick} type="submit" id="submit" className="submitBtn">Submit</button>
                        </div>
                    </div>
                </form>
            </div>
            {/* <h1>User's Data {myUserData}</h1> */}
        </div>
    )
}

export default AddNote
