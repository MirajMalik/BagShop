const express = require('express');
const ownersController = require('../controllers/ownersController');
const router = express.Router();



router.get('/admin', ownersController.adminPanel);
router.post('/create', ownersController.createOwner);




module.exports = router;


