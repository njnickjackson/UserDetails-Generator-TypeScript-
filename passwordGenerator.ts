import randomstring from "randomstring";

export default function generatePassword(): string {
    let password: string = randomstring.generate({
        length: 15,
        charset: "alphanumeric"
    });
    
    return password;
}