const mongoose = require('mongoose');


const ownerSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: [ true, 'Fullname is required' ],
        unique: [ true, 'Fullname must be unique'],
    },
    email: {
        type: String,
        required: [ true, 'Email is required' ],
        unique: [ true, 'Email must be unique' ],
    },
    password: {
        type: String,
        required: [ true, 'Password is required' ],
    },
    products: {
        type: Array,
        default: [],
    },
    contact: Number,
    picture: String,

});

module.exports = mongoose.model('Owner',ownerSchema);