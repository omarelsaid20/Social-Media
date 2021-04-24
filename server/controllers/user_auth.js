const bcrypt = require('bcryptjs');
const { validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');

const User = require('../models/user');
const HttpError = require('../models/http-error');

require('dotenv').config();

exports.Signup = async (req, res, next) => {

    // Geting data from the formData
    const { userName, country, email, password } = req.body;


    // check if there is any errors in the form
    const errors = validationResult(req);
    console.log(errors);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    //check if this email is realy exist in the database 
    let existingUser;
    try {
        existingUser = await User.findOne({ email: email });
    } catch (err) {
        const error = new HttpError(
            'Signing up failed, please try again later.',
            500
        );
        return next(error);
    }

    if (existingUser) {
        return res.status(400).json({
            errors: [{
                msg: "This email is already exist"
            }]
        })
    }

    // incrypt the password before saving in the database

    let hashedPassword;
    try {
        hashedPassword = await bcrypt.hash(password, 12);
    } catch (err) {
        const error = new HttpError(
            'Could not create user, please try again.',
            500
        );
        return next(error);
    }
    const createdUser = new User({
        userName: userName,
        country: country,
        email: email,
        password: hashedPassword
    });

    try {
        await createdUser.save();
    } catch (err) {
        const error = new HttpError(
            'Signing up failed, please try again later.',
            500
        );
        return next(error);
    }

    let token;
    try {
        token = jwt.sign(
            { userId: createdUser._id, email: createdUser.email },
            process.env.ACCESS_TOKEN_SECRET,
            { expiresIn: '24h' }
        );
    } catch (err) {
        const error = new HttpError(
            'Signing up failed, please try again later "creating token".',
            500
        );
        return next(error);
    }
    res
        .status(201)
        .json({ userId: createdUser.id, email: createdUser.email, token: token })
};

exports.login = async (req, res, next) => {
    const { email, password } = req.body;

    // check if there is any errors in the form
    const errors = validationResult(req);
    console.log(errors);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    //check if this email is realy exist in the database 
    let existingUser;
    try {
        existingUser = await User.findOne({ email: email });
    } catch (err) {
        const error = new HttpError(
            'Signing up failed, please try again later.',
            500
        );
        return next(error);
    }

    if (!existingUser) {
        return res.status(400).json({
            errors: [{
                msg: "This email not exist"
            }]
        })
    };

    let isValidPassword = false;
    try {
        isValidPassword = await bcrypt.compare(password, existingUser.password);
    } catch (err) {
        const error = new HttpError(
            'Could not log you in, please check your credentials and try again.',
            500
        );
        return next(error);
    }

    if (!isValidPassword) {
        return res.status(401).json({
            errors: [{
                msg: 'Password is incorrect, Please enter a valid password'
            }]
        })
    }

    let token;
    try {
        token = jwt.sign(
            { userId: existingUser.id, email: existingUser.email },
            process.env.ACCESS_TOKEN_SECRET,
            { expiresIn: '24h' }
        );
    } catch (err) {
        const error = new HttpError(
            'Logging in failed, please try again later.',
            500
        );
        return next(error);
    }

    res.json({
        msg: 'User logged in successfully',
        userId: existingUser.id,
        email: existingUser.email,
        token: token
    });

}