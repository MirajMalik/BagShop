const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/bagshop");

const productSchema = new mongoose.Schema({
    image: String,
    name: {
        type: String,
        required: [true, "Fullname need to be provided"],
    },
    price: Number,
    discount: {
        type: Number,
        default: 0,
    },
    bgColor: String,
    panelColor: String,
    textColor: String,
});

const productModel = mongoose.model("Product", productSchema);

module.exports = productModel