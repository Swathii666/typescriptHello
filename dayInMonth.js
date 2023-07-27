/*
Thirty days hath Spetember,
April, june and November
All the rest hath 31
Except February 28 in fine ,
And 29 on leap , because Bill forgot the rhyme
*/
//January =1
// Februray =2
//
//DEcember =12 
var monthNum = 2;
var isLeapYear = true;
var days;
var monthDays = [31, isLeapYear ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
if (monthNum >= 1 && monthNum <= 12) {
    days = monthDays[monthNum - 1];
    console.log("The number of days in Month:", { days: days });
}
else {
    console.log("Incorrect Month. Please enter between 1 and 12");
}
// Your job is to print the number of days in monthNum.
//Just print it, using console.log
// Ypu only need one if/else structure ( maybe with multiple else ifs)
// one more thing ! I need you to put typescriptHello to github
