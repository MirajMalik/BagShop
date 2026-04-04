const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
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
    cart: [
        {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
        }
    ],
    orders: {
        type: Array,
        default: [],
    },
    contact: Number,
    picture: String,

});

module.exports = mongoose.model("User", userSchema);

