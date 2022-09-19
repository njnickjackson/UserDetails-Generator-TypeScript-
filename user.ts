import randomstring from "randomstring";
import generatePassword from "./passwordGenerator";
import generateDate from "./dateMaker";
import { userArr } from "./index";

export default class User {
    userId: string;
    username: string;
    password: string;
    createdDate: string;

    constructor(username: string) {
        this.userId = randomstring.generate({
            length: 4,
            charset: "numeric"
        });
        this.username = username;
        this.password = generatePassword();
        this.createdDate = generateDate();
    }

    static prettyPrint(): void {
        userArr.forEach(user => {
            console.log("___");
            console.log(`ID: ${user.userId}`);
            console.log(`Username: ${user.username}`);
            console.log(`Password: ${user.password}`);
            console.log(`Created On: ${user.createdDate}\n`);
        })
    }

}