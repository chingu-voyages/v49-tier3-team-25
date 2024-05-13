"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isAuthenticated = void 0;
const isAuthenticated = (req, res, next) => {
    // Check user authentication
    next();
};
exports.isAuthenticated = isAuthenticated;
