"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const randomstring_1 = __importDefault(require("randomstring"));
function generatePassword() {
    let password = randomstring_1.default.generate({
        length: 15,
        charset: "alphanumeric"
    });
    return password;
}
exports.default = generatePassword;
