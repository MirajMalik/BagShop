const express = require('express');
const router = express.Router();
const isloggedIn = require('../middlewares/isLoggedIn');
const productModel = require('../models/product.model');

router.get("/", (req,res) => {
    let error = req.flash("error");
    res.render("index", {error, loggedin: false });
});

router.get("/shop", isloggedIn, async (req,res) => {
    let products = await productModel.find();
    console.log(products[0]);
    res.render("shop", {products : products});
});

module.exports = router;