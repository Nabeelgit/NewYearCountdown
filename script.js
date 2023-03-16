const day = document.getElementById('day');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');
const next_year = document.getElementById('next_year');
function isLeapYear(year){
    return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
}
const oneDay = 1000 * 60 * 60 * 24;
function setDay(){
    const date = new Date();
    next_year.innerText = date.getFullYear() + 1;
    let max_days = isLeapYear(date.getFullYear()) ? 366 : 365;
    const startOfYear = new Date(date.getFullYear(), 0, 0);
    const diff = date - startOfYear;
    const currentDay = Math.floor(diff / oneDay);
    let daysLeft = max_days - currentDay;
    let hours_left = 24 - date.getHours();
    let minutes_left = 60 - date.getMinutes();
    let seconds_left = 60 - date.getSeconds();
    day.innerText = daysLeft;
    hours.innerText = hours_left;
    minutes.innerText = minutes_left;
    seconds.innerText = seconds_left;
}
setDay();
setInterval(setDay, 1000);