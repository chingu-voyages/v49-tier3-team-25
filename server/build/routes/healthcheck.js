"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const healthcheck_1 = require("../controllers/healthcheck");
const router = (0, express_1.Router)();
exports.router = router;
router.get("/", healthcheck_1.healthcheck);
