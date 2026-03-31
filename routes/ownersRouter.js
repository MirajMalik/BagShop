const express = require('express');
const ownersController = require('../controllers/ownersController');
const router = express.Router();
const ownerModel = require('../models/owner.model');


router.get('/', ownersController.getOwner);
router.post('/create', ownersController.createOwner);




module.exports = router;


