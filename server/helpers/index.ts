import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const encryptPassword = async (plainPassword: string): Promise<string> => {
    const salt = await bcrypt.genSalt(10);
    const encryptedPassword = await bcrypt.hash(plainPassword, salt);
    
    return encryptedPassword;
};

export const comparePassword = async (encryptedPassword: string, plainPassword: string): Promise<boolean> => {
    const isAuthenticated = await bcrypt.compare(plainPassword, encryptedPassword);
    
    return isAuthenticated;
};

export const createToken = (userId: string, email: string): string => {    
    const payload = { _id: userId, email };
    const token = jwt.sign(payload, 'supersecretkey', { expiresIn: '1h' });

    return token;
};