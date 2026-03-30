const express = require('express');
const ownersController = require('../controllers/ownersController');
const router = express.Router();


router.get('/', ownersController.getOwner);




module.exports = router;


