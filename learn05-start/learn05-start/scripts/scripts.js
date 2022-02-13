// Functions, objects, and events

    //Betta Objects
    const betta1 = {
            heading: "One Red Betta",
            image: "images/betta1.png",
            caption: "Angry Dance",
            altTag: "red betta fish on blakc background"
    };
    const betta2 = {
        heading: "Two Bright Betta",
        image: "images/betta2.png",
        caption: "Angry Dancing",
        altTag: "two multi-colored betta fish on blakc background"
    };
    const betta3 = {
        heading: "Two Red Betta",
        image: "images/betta3.png",
        caption: "Angry Dances",
        altTag: "two red betta fish on blakc background"
    };
    const betta4 = {
        heading: "Two Blue Betta",
        image: "images/betta4.png",
        caption: "Angry Dancer",
        altTag: "two blue betta fish on black background"
    };

    function chooseBetta(betta) {
        if (betta == 1) {
            document.getElementById("toggle1").style.display = "none";
            document.getElementById("card1").style.display = "block";
            loadMe(betta1, 1) // 
        }   
        else if(betta == 2){
            document.getElementById("toggle2").style.display = "none";
            document.getElementById("card2").style.display = "block";
            loadMe(betta2, 2);
        }
        else if(betta == 3){
            document.getElementById("toggle3").style.display = "none";
            document.getElementById("card3").style.display = "block";
            loadMe(betta3, 3);
        }
        else if(betta == 4){
            document.getElementById("toggle4").style.display = "none";
            document.getElementById("card4").style.display = "block";
            loadMe(betta4, 4);
           
        }
    }
  
   
    function loadMe(betta, bettaNum) {
        document.getElementById("heading" + bettaNum).innerHTML = betta.heading;
        document.getElementById("img" + bettaNum).src = betta.image;
        document.getElementById("img" + bettaNum).style.display = "block";
        document.getElementById("p" + bettaNum).innerHTML = betta.caption;
        document.getElementById("img" + bettaNum).setAttribute('alt', betta.altTag);
    }