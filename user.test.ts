import User from "./user";

it("Hopefully Xander sees something....", () => {

    let testObj = new User("Nick");

    expect(testObj.username).toBe("Nick");
})