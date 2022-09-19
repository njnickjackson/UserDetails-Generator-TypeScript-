"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userArr = void 0;
const user_1 = __importDefault(require("./user"));
let userOne = new user_1.default("Bob Robertson");
let userTwo = new user_1.default("Will Williamson");
let userThree = new user_1.default("Vali Valison");
let userFour = new user_1.default("Joyefully Joye");
exports.userArr = [userOne, userTwo, userThree, userFour];
user_1.default.prettyPrint();
