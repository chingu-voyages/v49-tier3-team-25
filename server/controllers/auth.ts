import { User } from "../models/user";
import { Request, Response, NextFunction } from "express";

import jwt from "jsonwebtoken";

export const signUp = (req: Request, res: Response, next: NextFunction) => {
    const email = req.body.email;
    const userName = req.body.userName;
    const password = req.body.password

    const user = new User({
        username: userName,
        email: email,
        password: password
    });
    return user.save()
        .then(result => {
            res.status(201).json({
                message: 'user created!',
                userId: result._id
            })
        })
        .catch(err => {
            console.log(err);
        })

}

export const login = (req: Request, res: Response, next: NextFunction) => {
    console.log('hoi');
    const email = req.body.email;
    const password = req.body.password

    User.findOne({ email: email })
        .then(user => {
            if (!user) {
                const err = new Error('Email not found');
                throw err;
            }
            if (user.password !== password) {
                const err = new Error('Password not found');
                throw err;
            }
            const token = jwt.sign({
                email: user.email,
                userId: user._id.toString()
            },
                'supersecretkey',
                { expiresIn: '1h' }
            );
            res.status(200).json({ token: token, userId: user._id.toString() });
        })
        .catch(err => {
            console.log(err);
            res.status = (err.status||500);
            res.json({
                error: {
                    message: err.message
                }
            });
        })
}