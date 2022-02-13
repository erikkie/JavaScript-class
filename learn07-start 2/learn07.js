

function start(){
        document.getElementById("test-heading").style.color = "#ededed";
    /*
        read/watch the associated reference and complete the directions in the comments.

    */

    /* JS Numbers: https://www.w3schools.com/js/js_numbers.asp
        We will focus on the things with numbers that are significantly
        different than python. Please read the page linked to above before 
        completing the following:
    */

    /* Write a line of code demonstrating what will happen if 
       you try to add a number and a string. Use console.log() to 
       display both the equation and the results. 
    */

       let a = 100;
       let b = "100";
       let numberString = [a + b];
        console.log("[a + b]", numberString);
    /*
        JS Number Methods: https://www.w3schools.com/js/js_number_methods.asp
    */

    // Demonstrate the use of toString()
    let d = 123;
    d.toString();
    (123).toString();
    (100 + 23).toString();

    console.log(d);

    // Demonstrate the use of toExponential()
    let e = 231.9;
    e.toExponential(2); 
    e.toExponential(3);  
    e.toExponential(9);

    console.log(e);

    // Demonstrate the use of toFixed()
    let f = 2022
    f.toFixed(2);
    f.toFixed(3);
    f.toFixed(1);
    f.toFixed(9);

    console.log(f);

    // Demonstrate the use of toPrecision()
    let g = 2319;
    g.toPrecision();
    g.toPrecision(23);
    g.toPrecision(1);
    g.toPrecision(9);

    console.log(g);

    
    // Demonstrate the use of parseInt()
    parseInt("-23");
    parseInt("-23.19");
    parseInt("23");
    parseInt("23.19");
    parseInt("23 24 25");
    parseInt("23 years");
    parseInt("year 23");

    // Demonstrate the use of parseFloat()
    parseFloat("23.19");
    parseFloat("23 24 25");
    parseFloat("23 years");
    parseFloat("year 23");



    // Watch Simple Comparisons: https://www.linkedin.com/learning/learning-the-javascript-language-2/simple-comparisons?autoplay=true&resume=false&u=69317474

    /* In a comment explain your understanding of the difference between using == and ===  (You will probably
    need to do an additional web search to really get it.)

    // == is when you are doing equations, and is equal to something else, === is checking if something is the same/identical, so === is strict while == is more relaxed</br>
    //

    // Watch Arithmetic Operators: https://www.linkedin.com/learning/learning-the-javascript-language-2/arithmetic-operators?autoplay=true&resume=false&u=69317474
    // Watch Logical Operators: https://www.linkedin.com/learning/learning-the-javascript-language-2/logical-operators?autoplay=true&resume=false&u=69317474
    // In a comment describe the order of precedence for and / or operators

    /* The order for Arithmetic Operators are  */
       //  the following{ ** * / % + -} //

       /* The order for And / or Operators are  */
       /*  the following{ & ^ | && || } */

    // Watch Conditional If: https://www.linkedin.com/learning/learning-the-javascript-language-2/logical-operators?autoplay=true&resume=false&u=69317474
    // Watch Conditionals Switch: https://www.linkedin.com/learning/learning-the-javascript-language-2/conditionals-switch?autoplay=true&resume=false&u=69317474


    // Write code to demonstrate the use of the switch statement
    
    var color = window.prompt("Pick a color, any color!");
        switch (color) {
            case "Yellow":
              console.log("You said yellow");
              break;
            case "Orange":
                console.log("You said orange");
                break;
            case "Red":
                console.log("You said red");
                 break;
            default:
                console.log("Clear, I like it.")
                break;
        }

    // Watch Terse ifs: https://www.linkedin.com/learning/learning-the-javascript-language-2/terse-ifs?autoAdvance=true&autoSkip=true&autoplay=true&resume=false&u=69317474
    // Watch Ternary Operator:https://www.linkedin.com/learning/learning-the-javascript-language-2/ternary-operator?autoplay=true&resume=false&u=69317474
    // Write code to demonstrate the use of the ternary operator
        var fish = "betta"
        // fish = 'goby';

        fish ==="betta"
        ? console.log("You will need a mnimum of a 5 gallon tank, a heater and filter.")
        : console.log("you need to do more research on fish.");

        var tank = (fish === "betta") ? ("five gallon") : ("more research");
       


    }