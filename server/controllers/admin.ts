import httpStatus from "http-status";

import { Admin } from "../models";

import { encryptPassword, comparePassword, createToken, validateObjectId } from "../helpers";
import { ApiError, catchAsync } from "../utils";

export const signUp = catchAsync(async (req, res) => {
    const fullName = req.body.fullName;
    const email = req.body.email;
    const password = req.body.password
    
    const foundAdmin = await Admin.findOne({ email });
    if (foundAdmin) throw new ApiError(httpStatus.BAD_REQUEST, 'Email already registered');

    const encryptedPassword = await encryptPassword(password);
    
    const admin = new Admin({ fullName, email, password: encryptedPassword });
    const result = await admin.save();

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

    const foundAdmin = await Admin.findOne({ email });
    if (!foundAdmin) throw new ApiError(httpStatus.NOT_FOUND, "Email not found");
    
    const isMatched  = await comparePassword(foundAdmin.password, password);
    if (!isMatched ) throw new ApiError(httpStatus.UNAUTHORIZED, "Invalid password");

    const token = createToken(foundAdmin._id.toString(), foundAdmin.email, 'admin');

    const response = {
        message: "Login successful.",
        data: {
            fullName: foundAdmin.fullName,
            email: foundAdmin.email,
            token,
        }
    }
    
    res.status(httpStatus.OK).send(response);
});

export const getMyProfile = catchAsync(async (req, res) => {
    const decodedAdmin = (req as any).decoded;

    const foundAdmin = await Admin.findById(decodedAdmin._id, '-password -__v')

    const response = {
        message: "Get my profile successful.",
        data: foundAdmin,
    }
    
    res.status(httpStatus.OK).send(response);
});

export const getAdmins = catchAsync(async (req, res) => {
    const admins = await Admin.find().select('-password');

    const response = {
        message: "Get all admins successful.",
        data: admins,
    }
    
    res.status(httpStatus.OK).send(response);
});

export const getAdminById = catchAsync(async (req, res) => {
    const id = validateObjectId(req.params.id);
    
    const admin = await Admin.findById(id, '-password');
    if (!admin) throw new ApiError(httpStatus.NOT_FOUND, "Admin not found");

    const response = {
        message: "Get admin successful.",
        data: admin,
    }
    
    res.status(httpStatus.OK).send(response);
});

export const deleteAdminById = catchAsync(async (req, res) => {
    const id = validateObjectId(req.params.id);
    
    const admin = await Admin.findByIdAndDelete(id);
    if (!admin) throw new ApiError(httpStatus.NOT_FOUND, "Admin not found");

    const response = {
        message: "Delete admin successful.",
    }
    
    res.status(httpStatus.OK).send(response);
});

export const updateAdminById = catchAsync(async (req, res) => {
    const id = validateObjectId(req.params.id);
    
    const fullName = req.body.fullName;
    const email = req.body.email;
    const password = req.body.password ? await encryptPassword(req.body.password) : undefined;
    
    const admin = await Admin.findByIdAndUpdate(id, 
        { $set: { fullName, email, password } },
        { new: true, select: "-password" }
    );

    if (!admin) throw new ApiError(httpStatus.NOT_FOUND, "Admin not found");

    const response = {
        message: "Update admin successful.",
        data: admin,
    }
    
    res.status(httpStatus.OK).send(response);
});