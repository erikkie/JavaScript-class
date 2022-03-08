/*
Iterables: https://www.w3schools.com/js/js_iterables.asp
Read the page
Demonstrate iteration of a list 
Create a list of movies, books, or games at least 5 items long and 
display them in the list paragraph
*/




alert("I am connected,yes!")
const games = ["Adventure Mart", "Abyss", "Sigrata"];

let text = "";
for (const x of games) {
    text += x + "<br>";
}

document.getElementById("list").innerHTML = text;



/*
JS Sets

https://www.w3schools.com/js/js_sets.asp

Create a set with at least 5 song titles in it
display the contents of the set in the set1 paragraph (use iteration)

*/
const songs = ["Frog Prince", "Untitled 1", "Strangers", "Night Train", "Perfect Symmetry"];

let music = "";
for (const x of songs) {
    music += x + "<br>";
}

document.getElementById("set1").innerHTML = music;

// add two more songs to the set then display in the set2 paragraph

songs.push("Walnut tree", "Runaway", "River");

document.getElementById("set2").innerHTML = songs;




/* 
Maps
https://www.w3schools.com/js/js_maps.asp

Maps are like dictionaries in python
Create a map with five names and emails in it.
Display the contents of the map in map1 use the forEach() method (bottom of
    the reference page)
*/

const contacts = new Map([
    ["Erika", "Erika@mcc.edu"],
    ["Meri", "Meri@mcc.edu"],
    ["Steffen", "Steffen@mcc.edu"]

]);

let address = "";
for (const x of contacts){
    address += x + "<br>";
}
document.getElementById("map1").innerHTML = address;




// add two new names and emails and display in map2 use the forEach() method
contacts.set("Ryan", "Ryan@mcc.edu");
contacts.set("Cammie", "Cammie@mcc.edu");


let address2 = ""
contacts.forEach (function(value, key){
    address2 += key + ', ' + value + '<br>';

})

document.getElementById("map2").innerHTML = address2;



// get and display the email of one person, display in map3

document.getElementById("map3").innerHTML = contacts.get("Meri");