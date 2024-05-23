import bcrypt from "bcrypt";
import jwt, { JwtPayload } from "jsonwebtoken";

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
    const token = jwt.sign(payload, 'supersecretkey', { expiresIn: '1h' });

    return token;
};

export const verifyToken = (token: string): string | JwtPayload => {
    const decodedToken =  jwt.verify(token, 'supersecretkey');
    return decodedToken;
}