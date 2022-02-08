
const plant1 = {
    name: "Plants",
    subtype: "Basic Plant",
    type: "Live plants",
    material:"Live Plant",
    carbon:"Add CO2 to water",
    image: "images/carpet.jpg",
    source: "https://buceplant.com/products/eleocharis-belem-aquatic-farmer-tissue-culture"


};

const plant2 = {
    name: "Rocks",
    subtype: "Large Rocks",
    type: "Anywhere as long as you ensure they are secure, not sharp and will not trap animals preventing them from moving.",
    material:"Hardscapes",
    carbon:"Rinse rocks and brush with bristle brush to remove debris",
    image:"images/elephant.jpg",
    source: "https://buceplant.com/collections/aquarium-hardscape/products/elephant-skin-stone"


};

const plant3 = {
    name: "Driftwood",
    subtype: "Driftwood",
    type: "Hardscape Materials",
    material:"Hardscapes",
    carbon:"Rinse wood and brush with bristle brush to remove debris",
    image: "images/drift.jpg",
    source: "https://buceplant.com/collections/wood"


};

const plant4 = {
    name: "Substrate",
    subtype: "Dirt & Pebbles",
    type: "Dirt, pebbles, or sand",
    material:"Hardscapes",
    carbon:"Soak sand first to prevent bubbles",
    image: "images/tnak.jpg",
    source: "https://buceplant.com/collections/substrate",


};

const plant5 = {
    name: "Co2",
    subtype: "Tank",
    type: "Co2 gas injector",
    material:"Hardscapes",
    carbon:"You'll need to find an injector or carbon pellets that work with your planted tank",
    image: "images/co2.jpg",
  
    source: "https://buceplant.com/collections/co2-accessories"


};



function display(){
    let html = `<h2>${plant1.name}</h2>` +
    `<h3>${plant1.subtype}</h3>` + `<img src = ${plant1.image}>` +
    `<h3>Tips & Tricks</h3>` +
    `<p>${plant1.carbon}</p>` + `<h3>Material Type</h3>` +
    `<p>${plant1.type}</p>` + `<h3>Source</h3>` +
    `<p>${plant1.source}</p>`;

    document.getElementById('ob1').innerHTML = html;

   
}


function display2(){
    let html2 = `<h2>${plant2.name}</h2>` +
    `<h3>${plant2.subtype}</h3>` + `<img src = ${plant2.image}>` +
    `<h3>Tips & Tricks</h3>` +
    `<p>${plant2.carbon}</p>` + `<h3>Material Type</h3>` +
    `<p>${plant2.type}</p>` + `<h3>CO2 Injection</h3>` +
    `<p>${plant2.source}</p>`;

    document.getElementById('ob2').innerHTML = html2;
}

function display3(){
    let html3 = `<h2>${plant3.name}</h2>` +
    `<h3>${plant3.subtype}</h3>` + `<img src = ${plant3.image}>` +
    `<h3>Tips & Tricks</h3>` +
    `<p>${plant3.carbon}</p>` + `<h3>Material Type</h3>` +
    `<p>${plant3.type}</p>` + `<h3>Source</h3>` +
    `<p>${plant3.source}</p>`;

    document.getElementById('ob3').innerHTML = html3;
}


function display4(){
    let html4 = `<h2>${plant4.name}</h2>` +
    `<h3>${plant4.subtype}</h3>` + `<img src = ${plant4.image}>` +
    `<h3>Tips & Tricks</h3>` +
    `<p>${plant4.carbon}</p>` + `<h3>Material Type</h3>` +
    `<p>${plant4.type}</p>` + `<h3>Source</h3>` +
    `<p>${plant4.source}</p>`;

    document.getElementById('ob4').innerHTML = html4;
}


function display5(){
    let html5 = `<h2>${plant5.name}</h2>` +
    `<h3>${plant5.subtype}</h3>` + `<img src = ${plant5.image}>` +
    `<h3>Tips & Tricks</h3>` +
    `<p>${plant5.carbon}</p>` + `<h3>Material Type</h3>` +
    `<p>${plant5.type}</p>` + `<h3>Source</h3>` +
    `<p>${plant5.source}</p>`;

    document.getElementById('ob5').innerHTML = html5;
}


