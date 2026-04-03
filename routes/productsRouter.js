const express = require('express');
const productsController = require('../controllers/productsController');
const upload = require("../config/multer-config");
const isloggedIn = require('../middlewares/isLoggedIn');
const productModel = require('../models/product.model');
const router = express.Router();


router.get('/', productsController.getproducts);
router.post("/create", upload.single('image'), productsController.createproducts);
router.get("/get", isloggedIn, async (req, res) => {
    let products = await productModel.find();
    
    products.forEach(p => {
        console.log({
            name: p.name,
            bgColor: p.bgColor,
            panelColor: p.panelColor,
            textColor: p.textColor,
        });
    });

    res.render("shop", { products });
});




module.exports = router;