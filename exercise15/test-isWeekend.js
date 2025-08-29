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

export default isWeekend;