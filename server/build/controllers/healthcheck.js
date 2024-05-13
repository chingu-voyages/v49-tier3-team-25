"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.healthcheck = void 0;
const healthcheck = (req, res) => {
    const timestamp = new Date();
    const data = {
        status: "ok",
        timestamp: timestamp.toISOString(),
    };
    res.status(200).json(data);
};
exports.healthcheck = healthcheck;
