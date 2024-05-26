/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/
enum DaysOfWeek {
  Sunday = 0,
  Monday = 1,
  Tuesday = 2,
  Wednesday = 3,
  Thursday = 4,
  Friday = 5,
  Saturday = 6,
}

function isWeekend (day: DaysOfWeek): boolean {  
  if(day === DaysOfWeek.Sunday || day === DaysOfWeek.Saturday){
    return true
  } else {
    return false
  }
}