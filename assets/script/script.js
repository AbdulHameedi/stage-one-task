const utcTime = document.querySelector('[data-testid="currentUTCTime"]')
const currentDay = document.querySelector('[data-testid="currentDayOfTheWeek"]')

// current UTC Time
const currentTimeInMs = new Date().getTime();
utcTime.innerHTML = currentTimeInMs


// current day of the week
const currentDate = new Date();
const dayOfWeek = currentDate.getDay();

const daysOfWeek = ["Sunday" , "Monday", "Tuesday", "Wednesday", "Thursday" , "Friday", "Saturday"];
const currentDayOfWeek = daysOfWeek[dayOfWeek]

currentDay.innerHTML = currentDayOfWeek