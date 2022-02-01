function addDate() {
    let today = new Date();
    document.getElementById("myDate").innerHTML = today;
    document.getElementById("name").value = "";
    document.getElementById("rm1length").value = "";
    document.getElementById("rm1width").value = "";
    document.getElementById("rm1height").value = "";
    document.getElementById("rm1cost").value = "";
    document.getElementById("rooms").value = "1";

}

function estimate() {
 
    let name = document.getElementById("name").value;
    let length = parseFloat(document.getElementById("rm1length").value);
    let width = parseFloat(document.getElementById("rm1width").value);
    let height = parseFloat(document.getElementById("rm1height").value);
    let totalSqFt = (length * height * 2) + (length * width * 2);
    let cost = (totalSqFt * .65);
    document.getElementById("rm1cost").value = cost;
    document.getElementById("room1").style.display = "block" ;
var totalCost = cost;
    document.getElementById("estimate").innerHTML = (name + ",  your estimate is" + totalCost);

}


function estimateTwo() {
 
    let name = document.getElementById("name").value;
    let length = parseFloat(document.getElementById("rm2length").value);
    let width = parseFloat(document.getElementById("rm2width").value);
    let height = parseFloat(document.getElementById("rm2height").value);
    let totalSqFt = (length * height * 2) + (length * width * 2);
    let cost = (totalSqFt * .93);
    document.getElementById("rm2cost").value = cost;
    document.getElementById("room2").style.display = "block" ;
var totalCost = cost;
    document.getElementById("estimate").innerHTML = (name + ",  your estimate is" + totalCost);

}

function estimateThree() {
 
    let name = document.getElementById("name").value;
    let length = parseFloat(document.getElementById("rm3length").value);
    let width = parseFloat(document.getElementById("rm3width").value);
    let height = parseFloat(document.getElementById("rm3height").value);
    let totalSqFt = (length * height * 2) + (length * width * 2);
    let cost = (totalSqFt * .85);
    document.getElementById("rm3cost").value = cost;
    document.getElementById("room3").style.display = "block" ;
var totalCost = cost;
    document.getElementById("estimate").innerHTML = (name + ",  your estimate is" + totalCost);

}

