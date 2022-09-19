import moment from "moment";

export default function generateDate(): string {
    let date: string = moment().format("LLLL");
    return date;
}