"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
// Modify as needed
const userSchema = new mongoose_1.default.Schema({
    username: {
        type: String,
        unique: true,
        required: true,
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true,
    },
    cart: {
        items: [{
                bookId: mongoose_1.default.Schema.ObjectId,
                quantity: Number
            }]
    },
    wishList: {
        items: [{
                bookId: mongoose_1.default.Schema.ObjectId
            }]
    }
});
exports.User = mongoose_1.default.model("User", userSchema);
