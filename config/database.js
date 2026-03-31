const mongoose = require('mongoose');
const config = require('./config');


async function connectDB () {
    try {
        await mongoose.connect(config.MONGO_URI);
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Failed to connect to MongoDB');
    }
}


module.exports = connectDB;