export function isDayInPast (dayNumber: number): boolean { 
  // const dayOfMonth = new Date().getDate();
  const dayOfMonth = 5;
  return dayNumber < dayOfMonth;
}

