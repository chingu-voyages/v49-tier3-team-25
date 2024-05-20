import mongoose from "mongoose";
import httpStatus from "http-status";

import { logger } from "../config/logger";
import { ApiError } from "../utils";

// @ts-ignore
export const errorConverter = (err, req, res, next) => {
    let error = err;

    if (!(error instanceof ApiError)) {
      const statusCode = error.statusCode || error instanceof mongoose.Error ? httpStatus.BAD_REQUEST : httpStatus.INTERNAL_SERVER_ERROR;
      const message = error.message || httpStatus[statusCode];
      error = new ApiError(statusCode, message, false, err.stack);
    }
    
    next(error);
};

// @ts-ignore
export const errorHandler = (err, req, res, next) => {
    let { statusCode, message } = err;

    if (process.env.NODE_ENV === 'production' && !err.isOperational) {
      statusCode = httpStatus.INTERNAL_SERVER_ERROR;
      message = httpStatus[httpStatus.INTERNAL_SERVER_ERROR];
    }
  
    res.locals.errorMessage = err.message;
  
    const response = {
      code: statusCode,
      message,
      ...(process.env.NODE_ENV === 'development' && { stack: err.stack }),
    };
  
    if (process.env.NODE_ENV === 'development') {
      logger.error(err);
    }
  
    res.status(statusCode).send(response);
};


