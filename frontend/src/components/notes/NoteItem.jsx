import React, { useContext } from 'react'
import './notes.css'
import { DeleteIcon, EditIcon } from '@chakra-ui/icons';
import NoteContext from '../../context/noteContext/NoteContext';

const NoteItem = (props) => {
    const context = useContext(NoteContext);
    const { note, updateNote } = props;
    const { deleteNote } = context;

    return (
        <>
            <div class="card">
                <div class="cardBox">
                    <div class="cardText">
                        <h2>{note.title}</h2>
                        <p class="summary">{note.description}</p>
                    </div>
                    <div class="btn">
                        <button className='deleteIcon' onClick={() => { deleteNote(note._id) }}><DeleteIcon /></button>
                        <button className='editIcon' onClick={() => { updateNote(note) }}><EditIcon /> </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NoteItem