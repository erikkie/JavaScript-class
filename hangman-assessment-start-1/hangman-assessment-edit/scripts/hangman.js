// declare and initialize array
let game = ["BETTA", "GOBY", "PLECO", "SHRIMP", "TANK", "SNAIL", "MOSS", "DUCKWEED", "ANUBIAS", "JAVAMOSS"];
let choice = Math.floor(Math.random() * 10);
let answer = game[choice];
let myLength = answer.length;
let display = [myLength];
let win = myLength;
let letters = answer.split('');
let attemptsLeft = 6;
let output = '';
let userLetter = '';
let found = false;
let incorrect = '';

const photos = ["images/02.png","images/03.png", "images/04.png", "images/05.png", "images/06.png", "images/07.png"]

// game setup works fine --steffen
function setup() {
    alert(answer);
    for (let i = 0; i < answer.length; i++) {
        display[i] = "_ ";
        output = output + display[i];
    }
    document.getElementById("word").innerHTML = output;
}



// Issue below here
// noticed if we uncomment below it reveals all letter for the hangman

document.getElementById("submit").addEventListener("click", function(event){

    event.preventDefault();
    output = '';
    userLetter = document.getElementById("guess").value;
    document.getElementById("guess").value = ''; //would this reset value to null
    found = false;
    for (let c = 0; c < answer.length; c++) {
        //alert(letters[c]);

        if (userLetter.toUpperCase() == letters[c]) {
            found = true;
            display[c] = userLetter.toUpperCase();
            win--;
                                          
        }
        output = output + display[c] + ' ';
    }

    if (found == false){        
        listB = incorrect += userLetter + ' , ';
        document.getElementById("guessed").innerHTML = listB;
        attemptsLeft --;  
         
        /*listA = []         
        listA = list(map(userLetter).strip().split(','))
        print(listA)*/
    } 
    if (attemptsLeft < 6){
        document.getElementById("hangman1").style.display = "none";
        document.getElementById("hangman2").style.display = "block";
        
    }
    if (attemptsLeft < 5){
        document.getElementById("hangman2").style.display = "none";
        document.getElementById("hangman3").style.display = "block";
        
    }
    if (attemptsLeft < 4){
        document.getElementById("hangman3").style.display = "none";
        document.getElementById("hangman4").style.display = "block";
        
    }
    if (attemptsLeft < 3){
        document.getElementById("hangman4").style.display = "none";
        document.getElementById("hangman5").style.display = "block";
        
    }
    if (attemptsLeft < 2){
        document.getElementById("hangman5").style.display = "none";
        document.getElementById("hangman6").style.display = "block";
        
    }
    if (attemptsLeft < 2){
        document.getElementById("hangman6").style.display = "none";
        document.getElementById("hangman7").style.display = "block";
        
    }
    
    /*if (found == false){
        
    }
    if (found == false){
      
    }
     
    if (found == false){
       
    }*/

    if (win < 1) {
         document.getElementById("guesses").innerHTML = 'YOU WIN!!!';
    } else if (attemptsLeft < 1) {
        document.getElementById("guesses").innerHTML = 'YOU LOSE!!!';
    } else {
            document.getElementById("guesses").innerHTML = 'You have ' + attemptsLeft + ' guesses left';
    }
          
    document.getElementById("word").innerHTML = output;
    output = '';
    

});

//scirpt connected fine somereason the button and the script are not registering.*/