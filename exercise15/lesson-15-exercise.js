import dayjs from "https://unpkg.com/dayjs@1.11.10/esm/index.js";
import isWeekend from "./test-isWeekend.js";

const today = dayjs();
console.log(today);
const newDay = today.format("dddd")
console.log(newDay);
const fiveAhead = today.subtract(2, 'month')
console.log(fiveAhead.format('MMMM, D, dddd'))

console.log('hi')



console.log(isWeekend(fiveAhead));