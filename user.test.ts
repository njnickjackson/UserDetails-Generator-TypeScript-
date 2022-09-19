import { userArr } from "./index";

describe("user.ts test", () => {

    it("determines if the length of user Array is 4", () => {
        // act
        let length = userArr.length

        // assert
        expect(length).toBe(4);

    });

})