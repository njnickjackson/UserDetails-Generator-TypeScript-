import { userArr } from "./index";

describe("user.ts test", () => {

    it("determines if the User class has the proper number of properties", () => {
        // act
        let length = userArr.length

        // assert
        expect(length).toBe(4);

    });

})