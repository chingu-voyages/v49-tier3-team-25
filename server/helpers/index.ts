import bcrypt from "bcrypt";
import jwt, { JwtPayload } from "jsonwebtoken";
import httpStatus from "http-status";
import mongoose from "mongoose";

import { ApiError } from "../utils";

export const encryptPassword = async (plainPassword: string): Promise<string> => {
    const salt = await bcrypt.genSalt(10);
    const encryptedPassword = await bcrypt.hash(plainPassword, salt);
    
    return encryptedPassword;
};

export const comparePassword = async (encryptedPassword: string, plainPassword: string): Promise<boolean> => {
    const isAuthenticated = await bcrypt.compare(plainPassword, encryptedPassword);
    
    return isAuthenticated;
};

export const createToken = (userId: string, email: string, role: 'user' | 'admin'): string => {    
    const payload = { _id: userId, email, role };
    const token = jwt.sign(payload, String(process.env.JWT_SECRET), { expiresIn: '24h' });

    return token;
};

export const verifyToken = (token: string): string | JwtPayload => {
    const decodedToken =  jwt.verify(token, String(process.env.JWT_SECRET));
    return decodedToken;
}

export const validateObjectId = (id: string) => {
    if (!mongoose.Types.ObjectId.isValid(id)) throw new ApiError(httpStatus.BAD_REQUEST, "Invalid ID format");
    return id;
}

enum OrderStatus {
    PENDING = 'PENDING',
    CONFIRMED = 'CONFIRMED',
    PROCESSING = 'PROCESSING',
    ON_DELIVERY = 'ON_DELIVERY',
    DELIVERED = 'DELIVERED',
    CANCELED = 'CANCELED',
}

export const isValidTransition = (currentStatus: OrderStatus, newStatus: OrderStatus) => {
    const validTransitions = {
        PENDING: ['CONFIRMED'],     
        CONFIRMED: ['PROCESSING'], 
        PROCESSING: ['ON_DELIVERY'],   
        ON_DELIVERY: ['DELIVERED'],
        DELIVERED: [''],
        CANCELED: [''],
    };

    return validTransitions[currentStatus].includes(newStatus)
}

export const generateGenres = (genres: string[], limit: number) => {
    const genreCounts: { [key: string]: number } = genres.reduce((acc: { [key: string]: number }, genre: string) => {
        acc[genre] = (acc[genre] || 0) + 1;
        return acc;
    }, {});

    const sortedGenres = Object.entries(genreCounts)
        .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
        .map(([genre]) => genre);
        
    return sortedGenres.slice(0, limit);;
}


