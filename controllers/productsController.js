const upload = require("../config/multer-config");
const productModel = require("../models/product.model");

const getproducts = function (req,res) {
    res.send("Retrieving Products");
};


const createproducts = async function (req,res) {
    try {
        let { name, price, discount, bgColor, panelColor, textColor } = req.body;
        console.log(`bgcolor: ${bgColor}`);

        let product = await productModel.create({
            image: req.file.buffer,
            name,
            price,
            discount,
            bgColor,
            panelColor,
            textColor,
        });

        console.log(product);

        req.flash("success", "Products created succefully.");
        res.redirect("/owners/admin");
        } catch (error) {
            res.send(error.message);
        }
};



module.exports = {
getproducts,
createproducts,
};