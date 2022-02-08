function start() {
    // follow the directions in the comments
    // print to the index page

    // print your name to the name heading
    document.getElementById("name").innerHTML = "Erika";

    // from JavaScript Strings: https://www.w3schools.com/js/js_strings.asp


    // String length: calculate the string length and print to the length paragraph
    
    let text = "Be it ever so humble, there is no place like home."
    document.getElementById("length").innerHTML = text.length;


    // Escape sequences
    // print a string to the escape paragraph that uses three different escape sequences (look at the web page)
    let text2 = "You should \"definitely\" eat that identified mushroom you found in the forest.";
    document.getElementById("escape").innerHTML = text2; 

    // JavaScript String Methods https://www.w3schools.com/js/js_string_methods.asp

    // create a variable named 'name' and store your complete name in it
    let name = "Erika, Danielle, Howell";   

    // Use the JavaScript slice function to display your first name to first paragraph

    document.getElementById("first").innerHTML = name.slice(0,5); 
     
    // Use the Javascript substring Method to display your middle name to the middle paragraph
    document.getElementById("middle").innerHTML = name.substring(6,15);

    // Use the JavaScript subst Method to display your last name to the last paragraph
    document.getElementById("last").innerHTML = name.substr(16,20);


    // replacing string content - in the following variable use the replace method to put your major 
    // in a new string and print to the major paragraph
    
    // convert the following variable to upper case then print to the upper paragraph
   
    
    // Use the trim() method to remove white spaces from the following variable and print to the
    // trim paragraph

    let trimText = "                  McHenry County College                ";
    let text7 = trimText.trim();
    
 document.getElementById("trim").innerHTML =
    "Length trim Text=" + trimText.length + " Length2 text7=" + text7.length;
   
    // use the indexOf() method to get the index of 'May' and print the index number to the index paragraph

    let months = "January, February, March, April, May, June, July, August, September, October, November, December";
    let result = months.indexOf("May");

    document.getElementById("index").innerHTML = result;
    
    // JavaScript Template Literals   https://www.w3schools.com/js/js_string_templates.asp

    // create a template literals for both your first and last name (name the variables first and last)
 let first = `Erika`;
 let last = ` Howell`;

document.getElementById("names").innerHTML = first + last;

    // Use Variable substitutions to create a greeting that incorporates your first and last name and 
    // print to the greeting paragraph

let firstName = "Erika";
let lastName = "Howell";

let greetings = `Good Morning, ${firstName} ${lastName} the earth says hello!`;
document.getElementById("greeting").innerHTML = greetings;


}
