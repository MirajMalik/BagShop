const express = require('express');
const productsController = require('../controllers/productsController');
const router = express.Router();


router.get('/', productsController.getproducts);




module.exports = router;