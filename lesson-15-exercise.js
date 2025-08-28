import dayjs from "https://unpkg.com/dayjs@1.11.10/esm/index.js";

const today = dayjs();
console.log(today);
const newDay = today.format("dddd")
console.log(newDay);
const fiveAhead = today.subtract(2, 'month')
console.log(fiveAhead.format('MMMM, D, dddd'))

console.log('hi')

function isWeekend(date) {
  //check if date given on Saturday or Sunday
  const dayOfWeek = date.format("dddd")
  if (dayOfWeek === 'Saturday' || dayOfWeek === 'Sunday') {
    //return true if it is, else false 
    return true 
  } else {
    return false
  };
};

console.log(isWeekend(fiveAhead));