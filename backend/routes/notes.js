const router = require('express').Router();
const bcrypt = require('bcrypt');
<<<<<<< HEAD
=======
const User = require('../models/User');
>>>>>>> dea058703f705727c670db120d2df91ba5eb1790
const jwt = require('jsonwebtoken');
const verify = require('../midleware/verify');
const Note = require('../models/Note');
const SECRET_KEY = process.env.SECRET_KEY;

// Register
router.get('/fetchnote', verify, async (req, res) => {
    try {
<<<<<<< HEAD
        const notes = await Note.find({ user: req.user.id }).sort({ _id: -1 });
=======
        const notes = await Note.find({ user: req.user.id });
>>>>>>> dea058703f705727c670db120d2df91ba5eb1790
        console.log(notes);
        res.status(200).json(notes);
    } catch (err) {
        console.log(err);
        res.status(404).json(err);
    }
});

// Add Note
router.post('/addnote', verify, async (req, res) => {
    try {

        const { title, description, tag } = req.body;

<<<<<<< HEAD
        console.log({ user: req.user.id })
=======
        console.log({user: req.user.id})
>>>>>>> dea058703f705727c670db120d2df91ba5eb1790
        const note = new Note({
            title, description, tag, user: req.user.id,
        });

        console.log('User Value : ');

        const savedNote = await note.save();
        console.log(savedNote);
        res.status(200).json(savedNote);

    } catch (err) {
        console.log(err);
        res.status(404).json(err);

    }

});


<<<<<<< HEAD
// updte note
router.put('/:id', verify, async (req, res) => {
    try {

        let note = await Note.findById(req.params.id);
        if (!note) {
            return res.status(404).json({ error: "Not found" });
        }

        if (note.user.toString() !== req.user.id) {
            return res.status(404).json({ error: "Not allowed" });
        }

        note = await Note.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
        res.status(202).json(note);


    } catch (err) {
        console.log(err);
        res.status(404).json(err);
    }
});

// Delete Note
router.delete('/:id', verify, async (req, res) => {
    try {

        let note = await Note.findById(req.params.id);
        if (!note) {
            return res.status(404).json({ error: "Not found" });
        }
        if (note.user.toString() !== req.user.id) {
            return res.status(404).json({ error: "Not allowed" });
        }
        note = await Note.findByIdAndDelete(req.params.id);
        console.log(note);
        res.status(200).json({ success: "Note has been deleted" });

    } catch (err) {
        console.log(err);
        return res.status(404).json(err);

    }

});
=======
// update
// router.put('/:id', async (req, res) => {
//     try {

//         const user = await User.findOne({ email: req.body.email });
//         // console.log(findUserEmail);
//         if (!user) {
//             return res.status(403).json({ error: 'Please fill correct details!' });
//         }

//         const comparePass = await bcrypt.compare(req.body.password,user.password);
//         if (!comparePass) {
//             return res.status(403).json({ error: 'Please fill correct details!' });
//         }
//         const jwtToken = jwt.sign({ user: user._id }, SECRET_KEY, { expiresIn: "10d" });
//         const { password, ...info } = user._doc;
//         console.log({ jwtToken, ...info });
//         res.status(404).json({ jwtToken, ...info });

//     } catch (err) {
//         console.log(err);
//         res.status(404).json(err);

//     }

// });

>>>>>>> dea058703f705727c670db120d2df91ba5eb1790

module.exports = router;