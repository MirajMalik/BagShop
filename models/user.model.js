const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/bagshop");

const userSchema = new mongoose.Schema({
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
    cart: {
        type: Array,
        default: [],
    },
    isAdmin: Boolean,
    orders: {
        type: Array,
        default: [],
    },
    contact: Number,
    picture: String,

});

const userModel = mongoose.model("User", userSchema);

module.exports = userModel