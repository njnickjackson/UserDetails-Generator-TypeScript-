import User from "./user";

let userOne = new User("Bob Robertson");
let userTwo = new User("Will Williamson");
let userThree = new User("Vali Valison");
let userFour = new User("Joyefully Joye");

export let userArr = [userOne, userTwo, userThree, userFour];

User.prettyPrint();