

class Witch {
        constructor (magic, hat, familiar) {
        this.magic = magic;
        this.hat = hat;
        this.familiar = familiar;
        }

        witchTypes() {
            return `This is a ${this.magic} Witch, with a ${this.hat} hat and has a ${this.familiar} familiar.`;
        }
}

const hedge = new Witch('plant', 'woodbark', 'hedgehog');
const sea = new Witch('water', 'coral', 'Nautilus');
const white = new Witch('crystals', 'ice', 'ferret');
const kitchen = new Witch('recipes', 'plaid', 'raven');

// console.log(hedge);
// console.log(hedge.witchTypes());
// console.log(sea);
// console.log(sea.witchTypes());

hedge.spell = function(){
return this.magic + "  magic " + " wears a hat made of " + this.hat + " and has a " + this.familiar + " familiar.";};

sea.spell = function(){
    return this.magic + "  magic " + " wears a hat made of " + this.hat + " and has a " + this.familiar + " familiar.";};

white.spell = function(){
    return this.magic + "  magic " + " wears a hat made of " + this.hat + " and has a " + this.familiar + " familiar.";};

kitchen.spell = function(){
    return this.magic + "  magic " + " wears a hat made of " + this.hat + " and has a " + this.familiar + " familiar.";};



document.getElementById("1").innerHTML = "A hedge witch uses " + hedge.spell();
document.getElementById("2").innerHTML = "A sea witch uses " + sea.spell();
document.getElementById("3").innerHTML = "A white witch uses " + white.spell();
document.getElementById("4").innerHTML = "A kitchen witch uses " + kitchen.spell();


 
        // document.getElementById("1").innerHTML = var hedge;
