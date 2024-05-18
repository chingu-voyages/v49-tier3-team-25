import jwt from "jsonwebtoken";
import httpStatus from "http-status";

import { User } from "../models";

import { comparePassword } from "../helpers";
import { ApiError, catchAsync } from "../utils";

export const signUp = catchAsync(async (req, res) => {
    const fullName = req.body.fullName;
    const email = req.body.email;
    const password = req.body.password
    
    const foundUser = await User.findOne({ email });
    if (foundUser) throw new ApiError(httpStatus.BAD_REQUEST, 'Email already registered');

    const user = new User({ fullName, email, password });
    const result = await user.save();

    const response = { 
        message: "Signup successful.",
        data: {
            fullName: result.fullName,
            email: result.email,
        },
    };

    res.status(httpStatus.CREATED).send(response);
});

export const login = catchAsync(async (req, res) => {
    const email = req.body.email;
    const password = req.body.password

    const foundUser = await User.findOne({ email });
    if (!foundUser) throw new ApiError(httpStatus.NOT_FOUND, "Email not found");
    
    const authenticated = comparePassword(foundUser.password, password);
    if (!authenticated) throw new ApiError(httpStatus.UNAUTHORIZED, "Invalid password");

    const token = jwt.sign({ 
        email: foundUser.email, 
        userId: foundUser._id.toString()
    }, 'supersecretkey', 
    { expiresIn: '1h' });

    const response = {
        message: "Login successful.",
        token,
        data: {
            fullName: foundUser.fullName,
            email: foundUser.email
        }
    }
    
    res.status(httpStatus.OK).send(response);
});