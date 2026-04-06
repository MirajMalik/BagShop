const express = require('express');
const ownersController = require('../controllers/ownersController');
const isloggedIn = require("../middlewares/isLoggedIn");
const router = express.Router();



router.get('/admin', isloggedIn, ownersController.adminPanel);
router.get('/admin/create-products', isloggedIn, ownersController.createProducts);




module.exports = router;


