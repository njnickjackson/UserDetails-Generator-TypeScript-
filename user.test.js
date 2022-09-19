"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
describe("user.ts test", () => {
    it("determines if the User class has the proper number of properties", () => {
        // act
        let length = index_1.userArr.length;
        // assert
        expect(length).toBe(4);
    });
});
