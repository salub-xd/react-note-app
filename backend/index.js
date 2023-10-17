const express = require('express');
const mongoose = require("./db/conn");
const dotenv = require('dotenv').config();
const cors = require('cors');
const cookieParser = require('cookie-parser');
const app = express();
let PORT = 5000;
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(cookieParser());

// app.use('*',cors({
//     origin:true,
//     credentials:true,
// }));

app.use('/api/auth', require('./routes/users'));
app.use('/api/notes', require('./routes/notes'));


app.get('/', (req, res) => {
    res.send("Hellow");
})

app.listen(PORT, () => {
    console.log(`Backend server is running on ${PORT}`);
})