"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userArr = void 0;
const user_1 = require("./user");
let userOne = new user_1.User("Bob Robertson");
let userTwo = new user_1.User("Will Williamson");
let userThree = new user_1.User("Vali Valison");
let userFour = new user_1.User("Joyefully Joye");
exports.userArr = [userOne, userTwo, userThree, userFour];
user_1.User.prettyPrint();
