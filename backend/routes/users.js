const router = require('express').Router();
const bcrypt = require('bcrypt');
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const { body, validationResult } = require('express-validator');

const SECRET_KEY = process.env.SECRET_KEY;

// Register
router.post('/register', async (req, res) => {
    try {
        let success = false;
        // checking user's details if they already exists then give res
        const findUsername = await User.findOne({ username: req.body.username });
        // console.log(findUsername);
        if (findUsername) {
            return res.status(403).json({ error: 'Username already exists!' });
        }

        const findUserEmail = await User.findOne({ email: req.body.email });
        // console.log(findUserEmail);
        if (findUserEmail) {
            return res.status(403).json({ error: 'Email already exists!' });
        }

        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(req.body.password, salt);
        const user = new User({
            username: req.body.username,
            email: req.body.email,
            password: hash,
        });
        const data = {
            user: {
                id: user.id,
            }
<<<<<<< HEAD
=======

>>>>>>> dea058703f705727c670db120d2df91ba5eb1790
        }
        const newUser = await user.save();
        const jwtToken = jwt.sign(data, SECRET_KEY, { expiresIn: "10d" });
        // const jwtToken = jwt.sign({ user: user.id }, SECRET_KEY, { expiresIn: "10d" });
        res.cookie("jwtToken", jwtToken, {
            httpOnly: true,
        })
        // console.log(req.cookies.jwtToken);
        success = true;
        const { password, ...info } = user._doc;
        console.log({ jwtToken, ...info });
        res.status(201).json({ success,jwtToken, ...info });

    } catch (err) {
        console.log(err);
        res.status(404).json(err);

    }

});

// Login
router.post('/login', async (req, res) => {
    try {
        let success = false;
        const user = await User.findOne({ email: req.body.email });
        // console.log(findUserEmail);
        if (!user) {
            return res.status(403).json({ error: 'Please fill correct details!' });
        }

        const comparePass = await bcrypt.compare(req.body.password, user.password);
        if (!comparePass) {
            return res.status(403).json({ error: 'Please fill correct details!' });
        }
        const data = {
            user: {
                id: user.id,
            }
        }
        const jwtToken = jwt.sign(data, SECRET_KEY, { expiresIn: "10d" });
        // const jwtToken = jwt.sign({ user: { id: user.id } }, SECRET_KEY, { expiresIn: "10d" });
        // const jwtToken = jwt.sign({ user: user.id }, SECRET_KEY, { expiresIn: "10d" });
        res.cookie("jwtToken", jwtToken, {
            httpOnly: true,
            expires: new Date(Date.now() + 30000),
        })
        // console.log(req.cookies);
        // console.log(req.signedCookies);
        success = true;
        const { password, ...info } = user._doc;
        console.log({ jwtToken, ...info });
        res.status(202).json({ success, jwtToken, ...info });
<<<<<<< HEAD
        // res.send('/')
=======
        // res.render('/')
>>>>>>> dea058703f705727c670db120d2df91ba5eb1790

    } catch (err) {
        console.log(err);
        res.status(404).json(err);

    }

});


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


module.exports = router;