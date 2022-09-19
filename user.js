"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const randomstring_1 = __importDefault(require("randomstring"));
const passwordGenerator_1 = __importDefault(require("./passwordGenerator"));
const dateMaker_1 = __importDefault(require("./dateMaker"));
const index_1 = require("./index");
class User {
    constructor(username) {
        this.userId = randomstring_1.default.generate({
            length: 4,
            charset: "numeric"
        });
        this.username = username;
        this.password = (0, passwordGenerator_1.default)();
        this.createdDate = (0, dateMaker_1.default)();
    }
    static prettyPrint() {
        index_1.userArr.forEach(user => {
            console.log("___");
            console.log(`ID: ${user.userId}`);
            console.log(`Username: ${user.username}`);
            console.log(`Password: ${user.password}`);
            console.log(`Created On: ${user.createdDate}\n`);
        });
    }
}
exports.User = User;
