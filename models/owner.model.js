const mongoose = require('mongoose');


const ownerSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: [true, "Fullname need to be provided"],
    },
    email: {
        type: String,
        required: [true, "Email need to be provided"],
    },
    password: {
        type: String,
        required: [true, "Password need to be provided"],
    },
    products: {
        type: Array,
        default: [],
    },
    contact: Number,
    picture: String,

});

module.exports = mongoose.model('Owner',ownerSchema);