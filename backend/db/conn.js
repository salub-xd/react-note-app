const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const mongodb_Url = process.env.MONGO_URL;
mongoose.connect(mongodb_Url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("MongoDb connected successfully");
}).catch((err) => {
    console.log(err);
})

module.exports = mongoose;