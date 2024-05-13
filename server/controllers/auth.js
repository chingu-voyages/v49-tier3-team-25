"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.signUp = void 0;
var user_1 = require("../models/user");
var signUp = function (req, res, next) {
    var email = req.body.email;
    var userName = req.body.userName;
    var password = req.body.password;
    var user = new user_1.User({
        username: userName,
        email: email,
        password: password
    });
    return user.save()
        .then(function (result) {
        res.status(201).json({
            message: 'user created!',
            userId: result._id
        });
    })
        .catch(function (err) {
        console.log(err);
    });
};
exports.signUp = signUp;
