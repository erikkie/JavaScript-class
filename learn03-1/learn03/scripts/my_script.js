// Global Variables
//  global variables are declared with var
//  local variables are declared wih let
//  
var name1 = "Meri";


// myName = "Meredith Louise Engel" - Allowed but frowned upon

function names() {
    var name = "Beba";
    //fix the errors
   
    document.getElementById("name").innerHTML = name1;
    document.getElementById("full-name").innerHTML = firstName + " " + lastName;
    var firstName = "Doctor";
    
    document.getElementById("first").innerHTML = name;
    document.getElementById("nick-name").innerHTML = firstName;

}

function scope() {
    //fix the errors
    var firstName = "Meredith",
        lastName = "Engel";
    const taxRate = .07; // This is a constant
    document.getElementById("global").innerHTML = name;
    document.getElementById("local").innerHtml = firstName;
    document.getElementById("tax").innerHTML = taxRate;
    // taxRate = .08
    document.getElementById("new-tax").innerHTML = taxRate;
}


function letMe() {
    // Fix the errors
    let dog1 = "Ollie";
    dog2 = "Nessie";
    //dog2 = "Nessie";
    var dog3 = "Paisley";
    var dog2;
    
    document.getElementById("dog1").innerHTML = dog1;
    document.getElementById("dog2").innerHTML = dog2;
    document.getElementById("dog3").innerHTML = dog3;
    var dog2 = "Gizmo"
    document.getElementById("dog1-2").innerHTML = dog2;
}

function constants() {
    // fix the errors
    const PI = 3.14;
    const dogs = ["Ollie", "Nessie", "Gizmo"];
    document.getElementById("doggos").innerHTML = dogs;
    dogs[0] = "Ollie Bear";
    document.getElementById("new-doggos").innerHTML = dogs;
    const breeds = ["Shepherd", "Collie", "Yorkie-Poo"];
    document.getElementById("pi").innerHTML = PI;
    document.getElementById("breeds").innerHTML = breeds;
}

function myMath() {
    // create statements demonstrating the use of each operator
  let addition = 20 + 30
  document.getElementById("addition").innerHTML = "20 + 30 = " + addition;

  let subtraction = 30 - 20
  document.getElementById("subtraction").innerHTML = "30 - 20 = " + subtraction;

  let multiplication = 3 * 2
  document.getElementById("multiplication").innerHTML = " 3 * 2 = " + multiplication;

  let exponent = 4 ** 2
  document.getElementById("exponent").innerHTML = " 4 ** 2 = " + exponent;

  let division = 6 / 2
  document.getElementById("division").innerHTML = " 6 / 2 = " + division;

  let modulus = 6 % 4
  document.getElementById("modulus").innerHTML = " 6 % 4 = " + modulus;
  
  let increment = 4
  increment++;
  document.getElementById("increment").innerHTML = " 4++ = " + increment;

  
  let decrement = 4
  decrement--;
  document.getElementById("decrement").innerHTML = " 4-- = " + decrement
 

}

function assignments() {
    // create statements demonstrating the use of each assignment type
     var x = 10
    document.getElementById("equals").innerHTML = "x = 10 =" + "x = " + x;

    x += 1
    document.getElementById("plus-equals").innerHTML = "x += 1" + "x = " + x;

    var x = 10
    x -= 1
    document.getElementById("minus-equals").innerHTML = "x - 1" + "x = " + x;

    var x = 10
    x *= 1
    document.getElementById("times-equals").innerHTML = "x *= 1" + "x = " + x;

    var x = 10
    x /= 1
    document.getElementById("divide-equals").innerHTML = "x /= 1" + "x = " + x;

    var x = 10
    x %= 1
    document.getElementById("modulus-equals").innerHTML = "x %= 1" + "x = " + x;
    
}

function dataTypes() {
    // create samples of each of the data types from the
    // index page and display them in the Data Types section
    const games = { rpgGame : "Skyrim", puzzleGame : "Portal", cozyGame : "Animal Crossing",};
    document.getElementById("array").innerHTML = games;

    document.getElementById("object").innerHTML = games.rpgGame + " is an example of a RPG game, while " + games.puzzleGame + " is an example of a puzzle game and " + games.cozyGame + " is an example of a cozy game.";
}

