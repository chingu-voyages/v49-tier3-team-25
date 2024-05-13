"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.signUp = void 0;
const user_1 = require("../models/user");
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
