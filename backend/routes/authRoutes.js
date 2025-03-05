const express = require('express');
const { signup, login, getUserProfile } = require('../controllers/authController'); // Added getUserProfile


const router = express.Router();

router.post('/signup', signup);
router.post('/login', login);
router.get('/profile', getUserProfile); // Added route for user profile


module.exports = router;
