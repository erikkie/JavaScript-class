// for loop - https://www.w3schools.com/js/js_loop_for.asp
// Write 99 bottles of beer on the wall using a for loop
// hints - decrement at the end, create a variable, save the song lyrics from
// the loop to the variable. use <br> instead of \n with the inner html. 

let text = "";
let i = 99;
while (i > 0) {
  text += "There's " + i + " bottles of beer on the wall!" + "<br>";
  i--;
}
document.getElementById("beer").innerHTML = text;



//for in: https://www.w3schools.com/js/js_loop_forin.asp
// create an array of months and use the for in
// command to print them to the for-in paragraph
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

let month = '';
for(let x in months) {
    month += months[x] + "<br>";
}
document.getElementById("for-in").innerHTML = month;


// For of: https://www.w3schools.com/js/js_loop_forof.asp
// demonstrate the use of For Of to print letters from a string. 
// Create your own string variable of at least 5 letters
// print the results in the for-of paragraph

let word = "Supercalifragiliticexpiallidocious";

let poppins = "";
for(let x of word) {
    poppins += x + "<br>";

}
document.getElementById("for-of").innerHTML = word + "<br>" + poppins;


// While loop: https://www.w3schools.com/js/js_loop_while.asp
// Create a while loop to print the numbers 1 to 50
// print the results in the while paragraph

let loop = "";

let a = 1;
while (a < 51) {
  loop += "<br>#" + a;
  a++;
}
document.getElementById("while").innerHTML = loop;