const express = require('express');
const { body } = require('express-validator');

const router = express.Router();

const userAuthController = require('../controllers/user_auth');
const userController = require('../controllers/user');
const userVerify = require('../models/verify-user');

// router.post('/add-resume', )

router.post('/user-signup',
    [
        body('email')
            .isEmail()
            .withMessage('Please enter a valid email address'),
        body('password', 'Password has to be valid.')
            .isLength({ min: 5 })
            .isAlphanumeric()
            .trim(),
        body('userName')
            .notEmpty(),
        body('country')
            .notEmpty()
    ]
    , userAuthController.Signup);

router.post('/login', [
    body('email')
        .isEmail()
        .withMessage('Please enter a valid email address'),
    body('password', 'Password has to be valid.')
        .isLength({ min: 5 })
        .isAlphanumeric()
        .trim(),
],
userAuthController.login);

router.post('/add-post', userVerify, userController.addPost);
router.post('/edit-post', userVerify, userController.editPost);

module.exports = router;