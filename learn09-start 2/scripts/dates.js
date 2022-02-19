/* JavaScript Dates: https://www.w3schools.com/js/js_dates.asp */

// Create a variable, assign it to a new date object
// display the variable in the basic paragraph
const aday = new Date();
document.getElementById("basic").innerHTML = aday;

// create a new date variable and load the information for today into it
// display the results in the today paragraph (Year, Month, Day)
const bday = Date(2022, 2, 19);
document.getElementById("today").innerHTML = bday;


// Create a new date variable based on the dateString and store your birthday in it
// display the variable in the birthday paragraph
const cday = new Date("July 26, 1993")
document.getElementById("birthday").innerHTML = cday;

// Convert your basic date to the ISO string format and display the result
// in the iso paragraph
document.getElementById("iso").innerHTML = aday.toISOString();


//  Date Formats: https://www.w3schools.com/js/js_date_formats.asp
// Demonstrate 3 date formats of your choice to date1, date2, and date3 paragraphs
const date1 = new Date("07/26/1993");
const date2 = new Date("2014-11-07");
const date3 = new Date("1999/03/05");

document.getElementById("date1").innerHTML = date1;
document.getElementById("date2").innerHTML = date2;
document.getElementById("date3").innerHTML = date3;


//  getDate() Methods: https://www.w3schools.com/js/js_date_methods.asp
// Demonstrate 4 get date methods of your choice to get1-get4 paragraphs
const d = new Date("07/26/1993");
const m = new Date("06/27/1993");
const y = new Date("05/28/1993");

d.getDay();
m.getMonth();
y.getYear();

document.getElementById("get1").innerHTML = d;
document.getElementById("get2").innerHTML = m;
document.getElementById("get3").innerHTML = y;

// set date methods: https://www.w3schools.com/js/js_date_methods_set.asp
// Demonstrate 4 set date methods of your choice to set1-set4 paragraphs

const e = new Date();
e.setFullYear(2022);
document.getElementById("set1").innerHTML = e;

const f = new Date();
f.setDate(22);
document.getElementById("set2").innerHTML = f;

const g = new Date();
g.setHours(20);
document.getElementById("set3").innerHTML = g;

const h = new Date();
h.setMinutes(15);
document.getElementById("set4").innerHTML = h;
