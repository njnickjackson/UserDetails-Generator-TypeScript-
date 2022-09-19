"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const passwordGenerator_1 = __importDefault(require("./passwordGenerator"));
describe("generatePassword() tests", () => {
    it("determines if the data type is a string", () => {
        // act
        let password = (0, passwordGenerator_1.default)();
        // assert
        expect(typeof password).toBe("string");
    });
    it("determines if the length of the password is 15 characters", () => {
        // act
        let password = (0, passwordGenerator_1.default)();
        // assert
        expect(password.length).toBe(15);
    });
});
