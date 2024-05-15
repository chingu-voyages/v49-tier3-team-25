"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = exports.signUp = void 0;
const user_1 = require("../models/user");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const signUp = (req, res, next) => {
    const email = req.body.email;
    const userName = req.body.userName;
    const password = req.body.password;
    const user = new user_1.User({
        username: userName,
        email: email,
        password: password
    });
    return user.save()
        .then(result => {
        res.status(201).json({
            message: 'user created!',
            userId: result._id
        });
    })
        .catch(err => {
        console.log(err);
    });
};
exports.signUp = signUp;
const login = (req, res, next) => {
    console.log('hoi');
    const email = req.body.email;
    const password = req.body.password;
    user_1.User.findOne({ email: email })
        .then(user => {
        if (!user) {
            const err = new Error('Email not found');
            throw err;
        }
        if (user.password !== password) {
            const err = new Error('Password not found');
            throw err;
        }
        const token = jsonwebtoken_1.default.sign({
            email: user.email,
            userId: user._id.toString()
        }, 'supersecretkey', { expiresIn: '1h' });
        res.status(200).json({ token: token, userId: user._id.toString() });
    })
        .catch(err => {
        console.log(err);
        res.status = (err.status || 500);
        res.json({
            error: {
                message: err.message
            }
        });
    });
};
exports.login = login;
