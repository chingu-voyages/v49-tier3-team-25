import httpStatus from "http-status";
import { ApiError, catchAsync } from "../utils"
import { verifyToken } from "../helpers";

export const isAuthenticated = catchAsync(async (req , res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) throw new ApiError(httpStatus.UNAUTHORIZED, 'Token is not exist in headers of Authorization');

  const token = authHeader.slice(7);

  const decoded = verifyToken(token);

  (req as any).decoded = decoded;

  next();
})