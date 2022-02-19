function start() {
    // Math: https://www.w3schools.com/js/js_math.asp
    // Demonstrate the use of round, ceil, floor, trunc, sign
    // pow, min, and random and display to the appropriate paragraphs
    const pi = 3.14

    document.getElementById("round").innerHTML = Math.round(pi);
    document.getElementById("ceil").innerHTML = Math.ceil(pi);
    document.getElementById("floor").innerHTML = Math.floor(pi);
    document.getElementById("trunc").innerHTML = Math.trunc(pi);
    document.getElementById("sign").innerHTML = Math.sign(pi);
    document.getElementById("pow").innerHTML = Math.pow(pi, pi);
    document.getElementById("min").innerHTML = Math.min(pi);
    document.getElementById("random").innerHTML = Math.random(pi);
    
    

    // Random: https://www.w3schools.com/js/js_random.asp
    // create a random integer between 1 and 100 and display in the random2 paragraph
     
     document.getElementById("random2").innerHTML = Math.random(1, 100);

    // Booleans: https://www.w3schools.com/js/js_booleans.asp
    // read the reference


    // Comparisons: https://www.w3schools.com/js/js_comparisons.asp
    // demonstrate and explain the difference between == and === in the
    // comparisons paragraph
    document.getElementById("comparisons").innerHTML = "When two equal signs, such as these == are present that means if the answer is equal to, while === means the answer is the EXACT same, in case, numbers, everything";



    // Conditions: https://www.w3schools.com/js/js_if_else.asp
    // Read the conditions page
}