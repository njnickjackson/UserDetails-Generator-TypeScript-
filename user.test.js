"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = require("./user");
it("Hopefully Xander sees something....", () => {
    let testObj = new user_1.User("Nick");
    expect(testObj.username).toBe("Nick");
});
