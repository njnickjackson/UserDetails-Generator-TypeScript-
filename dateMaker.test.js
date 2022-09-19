"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dateMaker_1 = __importDefault(require("./dateMaker"));
describe("generateDate() test", () => {
    it("determines if the returned data type is a string", () => {
        // act
        let date = (0, dateMaker_1.default)();
        // assert
        expect(typeof date).toBe("string");
    });
});
