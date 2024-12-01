const month = new Date().getMonth() + 1;
const dayOfMonth = new Date().getDate();

export function isDayInPast (dayNumber: number): boolean { 
  return dayNumber < dayOfMonth && month === 12;
}

export function isToday(dayNumber: number): boolean {
  console.log("dayNumber: ", dayNumber);
  console.log("dayOfMonth: ", dayOfMonth);
  console.log("month: ", month);
  return dayNumber <= dayOfMonth && month === 12;
}
