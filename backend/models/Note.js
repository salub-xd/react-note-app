const mongoose = require('mongoose');

const NoteSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users"
    },
    title: {
        type: String,
<<<<<<< HEAD
    },
    description: {
        type: String,
=======
        required: true,
    },
    description: {
        type: String,
        required: true,
>>>>>>> dea058703f705727c670db120d2df91ba5eb1790
    },
    tag: {
        type: String,
        default: 'General',
    }
}, { timestamps: true });

const model = mongoose.model('Note', NoteSchema);
module.exports = model;