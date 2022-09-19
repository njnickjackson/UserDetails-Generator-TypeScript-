import generateDate from "./dateMaker";

describe("generateDate() test", () => {

    it("determines if the returned data type is a string", () => {
        // act
        let date = generateDate();

        // assert
        expect(typeof date).toBe("string");

    });

})