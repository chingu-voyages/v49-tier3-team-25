import httpStatus from "http-status";
import { ApiError, catchAsync } from "../utils"
import { verifyToken } from "../helpers";

export const isAuthenticated = (role: 'user' | 'admin') => catchAsync(async (req , res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) throw new ApiError(httpStatus.UNAUTHORIZED, 'Token is not exist in headers of Authorization');

  const token = authHeader.slice(7);

  const decoded = verifyToken(token);

  if (!(decoded as any).role) throw new ApiError(httpStatus.FORBIDDEN, 'No role specified in token');
  if ((decoded as any).role !== role) throw new ApiError(httpStatus.FORBIDDEN, `Expected role '${role}', but token has role '${(decoded as any).role}'`);

  (req as any).decoded = decoded;

  next();
})