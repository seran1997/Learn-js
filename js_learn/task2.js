let year = 2100;
if(year % 400 == 0 || (year % 4 == 0 && year % 4 !== 0)) {
    console.log(year + " год — високосный");
} else {
    console.log(year + " год — не високосный");
}