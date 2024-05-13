"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
var mongoose_1 = require("mongoose");
// Modify as needed
var userSchema = new mongoose_1.default.Schema({
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
