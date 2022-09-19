import generatePassword from "./passwordGenerator";

describe("generatePassword() tests", () => {

    it("determines if the data type is a string", () => {
        // act
        let password = generatePassword();

        // assert
        expect(typeof password).toBe("string");

    });

    it("determines if the length of the password is 15 characters", () => {
        // act
        let password = generatePassword();

        // assert
        expect(password.length).toBe(15);
    })
})