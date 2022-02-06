function addDate() {
    let today = new Date();
    document.getElementById("myDate").innerHTML = today;

    document.getElementById("ordername").value = "";

    document.getElementById("doc").value = "";
    document.getElementById("fanta").value = "";
    document.getElementById("ginger").value = "";
    document.getElementById("sprite").value = "";
    document.getElementById("manzanita").value = "";
 
    document.getElementById("blt").value = "";
    document.getElementById("veggie").value = "";
    document.getElementById("reuben").value = "";
    document.getElementById("turkey").value = "";
    document.getElementById("tuna").value = "";
  
    document.getElementById("vanilla").value = "";
    document.getElementById("choco").value = "";
    document.getElementById("swirl").value = "";
    document.getElementById("strawberry").value = "";
    document.getElementById("oreo").value = "";

   

}

/*function showScreen() {
    numRooms = document.getElementById("rooms").value;
    if (numRooms == 1) {
        document.getElementById("room2").style.display = "none";
        document.getElementById("room3").style.display = "none";
    } 
    else if (numRooms == 2) {
        document.getElementById("room2").style.display = "block";
        document.getElementById("room3").style.display = "none";
    } 
    else if (numRooms == 3) {
        document.getElementById("room2").style.display = "block";
        document.getElementById("room3").style.display = "block";
    }

}
*/

function estimate() { 

    let name = document.getElementById("ordername").value;

    /*these are the drinks getting called and setting up variables for the Id's*/
    let doc1 = parseFloat(document.getElementById("doc").value);
    let fanta1 = parseFloat(document.getElementById("fanta").value);
    let ginger1 = parseFloat(document.getElementById("ginger").value);
    let sprite1 = parseFloat(document.getElementById("sprite").value);
    let manzanita1 = parseFloat(document.getElementById("manzanita").value);
    /*adding up the amount of each drinks ordered by the user*/
    let totalSqFt1 = doc1 + fanta1 + ginger1 + sprite1 + manzanita1;
    let cost1 = (totalSqFt1 * 2.00);
    document.getElementById("drinkcost").value = cost1;
    
     /*these are the sandwiches getting called and setting up variables for the Id's*/
    let blt2 = parseFloat(document.getElementById("blt").value);
    let veggie2 = parseFloat(document.getElementById("veggie").value);
    let reuben2 = parseFloat(document.getElementById("reuben").value);
    let turkey2 = parseFloat(document.getElementById("turkey").value);
    let tuna2 = parseFloat(document.getElementById("tuna").value);
    /*adding up the amount of each drinks ordered by the user*/
    let totalSqFt2 = blt2 + veggie2 + reuben2 + turkey2 + tuna2;
    let cost2 = (totalSqFt2 * 3.00);
    document.getElementById("subcost").value = cost2;
    
    /*these are the sandwiches getting called and setting up variables for the Id's*/
    let vanilla3 = parseFloat(document.getElementById("vanilla").value);
    let choco3 = parseFloat(document.getElementById("choco").value);
    let swirl3 = parseFloat(document.getElementById("swirl").value);
    let strawberry3 = parseFloat(document.getElementById("strawberry").value);
    let oreo3 = parseFloat(document.getElementById("oreo").value);

    let totalSqFt3 =  vanilla3 + choco3 + swirl3 + strawberry3 + oreo3;
    let cost3 = (totalSqFt3 * 1.50);
    document.getElementById("dessertcost").value = cost3;

    /*numRooms = document.getElementById("rooms").value;
    if (numRooms == 1) {
        var totalCost = cost1;
    }
    else if (numRooms == 2) {
        var totalCost = cost1 + cost2;
    }
    else if (numRooms == 3) {
        var totalCost = cost1 + cost2 + cost3;
    }
    */
var totalCost = cost1 + cost2 + cost3;
    document.getElementById("ordercost").innerHTML = (name + ",  your order total $ " + totalCost);
}
