const express = require('express');
const usersController = require('../controllers/usersController');
const authController = require('../controllers/authController');
const router = express.Router();


router.get('/', usersController.getUser);
router.post('/register', authController.registerUser);




module.exports = router;