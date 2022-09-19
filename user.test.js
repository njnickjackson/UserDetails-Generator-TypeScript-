"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
describe("user.ts test", () => {
    it("determines if the length of user Array is 4", () => {
        // act
        let length = index_1.userArr.length;
        // assert
        expect(length).toBe(4);
    });
});
