"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
var express_1 = require("express");
var auth_1 = require("../controllers/auth");
var router = (0, express_1.Router)();
exports.router = router;
router.put('/signup', auth_1.signUp);
