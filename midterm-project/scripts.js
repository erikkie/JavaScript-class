function colorDrop(){	
	let today = new Date();
    document.getElementById("myDate").innerHTML = today;
	document.getElementById("selection").value = "1";
}

const beachPalette = ["#BFABA3", "#2990C2", "#15B3C2", "#ffffff", "#30C2A9", "#C29764"];
const forestPalette = ["#2A5E56", "#2E694F",  "#4FA166", "#ffffff", "#3B873B", "#3F632C"];
const kaliedoscopePalette = ["#70115C", "#BDA842",  "#BD309F", "#ffffff", "#1CBDB8", "#91C4C3"];
const cabinPalette = ["#8F6404", "#995C05",  "#82400A", "#ffffff", "#993205", "#8F1A04"];
const gasPalette = ["#B61CBA", "#791DC4",  "#3323AD", "#ffffff", "#6180C7",  "#498399"];
const waterfallPalette = ["#0E5D61", "#65DFE6",  "#1FD7E0", "#ffffff",  "#2B5E61", "#18A6AD"];

function beach(){
	document.getElementById('color1').style.background = beachPalette[0];
	document.getElementById('color2').style.background = beachPalette[1];
	document.getElementById('color3').style.background = beachPalette[2];
	document.getElementById('color4').style.background = beachPalette[3];
	document.getElementById('color5').style.background = beachPalette[4];
	document.getElementById('color6').style.background = beachPalette[5];
    document.getElementById("select2").style.display = "block";
    document.getElementById("select3").style.display = "block";
	document.getElementById("select4").style.display = "block";
	document.getElementById("select5").style.display = "block";
	document.getElementById("select6").style.display = "block";
    document.getElementsByClassName("pcr-button")[0].style.setProperty('--pcr-color', beachPalette[0]);
    document.getElementsByClassName("pcr-button")[1].style.setProperty('--pcr-color', beachPalette[1]);
    document.getElementsByClassName("pcr-button")[2].style.setProperty('--pcr-color', beachPalette[2]);
    document.getElementsByClassName("pcr-button")[3].style.setProperty('--pcr-color', beachPalette[3]);
    document.getElementsByClassName("pcr-button")[4].style.setProperty('--pcr-color', beachPalette[4]);
    document.getElementsByClassName("pcr-button")[5].style.setProperty('--pcr-color', beachPalette[5]);
    
};

function forest(){
	document.getElementById('color1').style.background = forestPalette[0];
	document.getElementById('color2').style.background = forestPalette[1];
	document.getElementById('color3').style.background = forestPalette[2];
	document.getElementById('color4').style.background = forestPalette[3];
	document.getElementById('color5').style.background = forestPalette[4];
	document.getElementById('color6').style.background = forestPalette[5];
    document.getElementById("select2").style.display = "block";
    document.getElementById("select3").style.display = "block";
	document.getElementById("select4").style.display = "block";
	document.getElementById("select5").style.display = "block";
	document.getElementById("select6").style.display = "block";
    document.getElementsByClassName("pcr-button")[0].style.setProperty('--pcr-color', forestPalette[0]);
    document.getElementsByClassName("pcr-button")[1].style.setProperty('--pcr-color', forestPalette[1]);
    document.getElementsByClassName("pcr-button")[2].style.setProperty('--pcr-color', forestPalette[2]);
    document.getElementsByClassName("pcr-button")[3].style.setProperty('--pcr-color', forestPalette[3]);
    document.getElementsByClassName("pcr-button")[4].style.setProperty('--pcr-color', forestPalette[4]);
    document.getElementsByClassName("pcr-button")[5].style.setProperty('--pcr-color', forestPalette[5]);
};

function kaliedo(){
	document.getElementById('color1').style.background = kaliedoscopePalette[0];
	document.getElementById('color2').style.background = kaliedoscopePalette[1];
	document.getElementById('color3').style.background = kaliedoscopePalette[2];
	document.getElementById('color4').style.background = kaliedoscopePalette[3];
	document.getElementById('color5').style.background = kaliedoscopePalette[4];
	document.getElementById('color6').style.background = kaliedoscopePalette[5];
    document.getElementById("select2").style.display = "block";
    document.getElementById("select3").style.display = "block";
	document.getElementById("select4").style.display = "block";
	document.getElementById("select5").style.display = "block";
	document.getElementById("select6").style.display = "block";
    document.getElementsByClassName("pcr-button")[0].style.setProperty('--pcr-color', kaliedoscopePalette[0]);
    document.getElementsByClassName("pcr-button")[1].style.setProperty('--pcr-color', kaliedoscopePalette[1]);
    document.getElementsByClassName("pcr-button")[2].style.setProperty('--pcr-color', kaliedoscopePalette[2]);
    document.getElementsByClassName("pcr-button")[3].style.setProperty('--pcr-color', kaliedoscopePalette[3]);
    document.getElementsByClassName("pcr-button")[4].style.setProperty('--pcr-color', kaliedoscopePalette[4]);
    document.getElementsByClassName("pcr-button")[5].style.setProperty('--pcr-color', kaliedoscopePalette[5]);
};

function cabin(){
	document.getElementById('color1').style.background = cabinPalette[0];
	document.getElementById('color2').style.background = cabinPalette[1];
	document.getElementById('color3').style.background = cabinPalette[2];
	document.getElementById('color4').style.background = cabinPalette[3];
	document.getElementById('color5').style.background = cabinPalette[4];
	document.getElementById('color6').style.background = cabinPalette[5];
    document.getElementById("select2").style.display = "block";
    document.getElementById("select3").style.display = "block";
	document.getElementById("select4").style.display = "block";
	document.getElementById("select5").style.display = "block";
	document.getElementById("select6").style.display = "block";
    document.getElementsByClassName("pcr-button")[0].style.setProperty('--pcr-color', cabinPalette[0]);
    document.getElementsByClassName("pcr-button")[1].style.setProperty('--pcr-color', cabinPalette[1]);
    document.getElementsByClassName("pcr-button")[2].style.setProperty('--pcr-color', cabinPalette[2]);
    document.getElementsByClassName("pcr-button")[3].style.setProperty('--pcr-color', cabinPalette[3]);
    document.getElementsByClassName("pcr-button")[4].style.setProperty('--pcr-color', cabinPalette[4]);
    document.getElementsByClassName("pcr-button")[5].style.setProperty('--pcr-color', cabinPalette[5]);
};

function gas(){
	document.getElementById('color1').style.background = gasPalette[0];
	document.getElementById('color2').style.background = gasPalette[1];
	document.getElementById('color3').style.background = gasPalette[2];
	document.getElementById('color4').style.background = gasPalette[3];
	document.getElementById('color5').style.background = gasPalette[4];
	document.getElementById('color6').style.background = gasPalette[5];
    document.getElementById("select2").style.display = "block";
    document.getElementById("select3").style.display = "block";
	document.getElementById("select4").style.display = "block";
	document.getElementById("select5").style.display = "block";
	document.getElementById("select6").style.display = "block";
    document.getElementsByClassName("pcr-button")[0].style.setProperty('--pcr-color', gasPalette[0]);
    document.getElementsByClassName("pcr-button")[1].style.setProperty('--pcr-color', gasPalette[1]);
    document.getElementsByClassName("pcr-button")[2].style.setProperty('--pcr-color', gasPalette[2]);
    document.getElementsByClassName("pcr-button")[3].style.setProperty('--pcr-color', gasPalette[3]);
    document.getElementsByClassName("pcr-button")[4].style.setProperty('--pcr-color', gasPalette[4]);
    document.getElementsByClassName("pcr-button")[5].style.setProperty('--pcr-color', gasPalette[5]);
};

function waterfall(){
	document.getElementById('color1').style.background = waterfallPalette[0];
	document.getElementById('color2').style.background = waterfallPalette[1];
	document.getElementById('color3').style.background = waterfallPalette[2];
	document.getElementById('color4').style.background = waterfallPalette[3];
	document.getElementById('color5').style.background = waterfallPalette[4];
	document.getElementById('color6').style.background = waterfallPalette[5];
    document.getElementById("select2").style.display = "block";
    document.getElementById("select3").style.display = "block";
	document.getElementById("select4").style.display = "block";
	document.getElementById("select5").style.display = "block";
	document.getElementById("select6").style.display = "block";
    document.getElementsByClassName("pcr-button")[0].style.setProperty('--pcr-color', waterfallPalette[0]);
    document.getElementsByClassName("pcr-button")[1].style.setProperty('--pcr-color', waterfallPalette[1]);
    document.getElementsByClassName("pcr-button")[2].style.setProperty('--pcr-color', waterfallPalette[2]);
    document.getElementsByClassName("pcr-button")[3].style.setProperty('--pcr-color', waterfallPalette[3]);
    document.getElementsByClassName("pcr-button")[4].style.setProperty('--pcr-color', waterfallPalette[4]);
    document.getElementsByClassName("pcr-button")[5].style.setProperty('--pcr-color', waterfallPalette[5]);
};

// if extra palettes are needed to be added
// function colorPalettes(){
	// document.getElementById('color1').style.background = color1;
	// document.getElementById('color2').style.background = color2;
	// document.getElementById('color3').style.background = color3;
	// document.getElementById('color4').style.background = color4;
	// document.getElementById('color5').style.background = color5;
	// document.getElementById('color6').style.background = color6;
		
//}


function showScreen() {
    colorSelect = document.getElementById("selection").value;
    if (colorSelect == 1) {
        document.getElementById("select2").style.display = "none";
        document.getElementById("select3").style.display = "none";
		document.getElementById("select4").style.display = "none";
		document.getElementById("select5").style.display = "none";
		document.getElementById("select6").style.display = "none";
    } 
    else if (colorSelect == 2) {
        document.getElementById("select2").style.display = "block";
        document.getElementById("select3").style.display = "none";
		document.getElementById("select4").style.display = "none";
		document.getElementById("select5").style.display = "none";
		document.getElementById("select6").style.display = "none";
    } 
    else if (colorSelect == 3) {
        document.getElementById("select2").style.display = "block";
        document.getElementById("select3").style.display = "block";
		document.getElementById("select4").style.display = "none";
		document.getElementById("select5").style.display = "none";
		document.getElementById("select6").style.display = "none";
    }
	else if (colorSelect == 4) {
        document.getElementById("select2").style.display = "block";
        document.getElementById("select3").style.display = "block";
		document.getElementById("select4").style.display = "block";
		document.getElementById("select5").style.display = "none";
		document.getElementById("select6").style.display = "none";
    }
	else if (colorSelect == 5) {
        document.getElementById("select2").style.display = "block";
        document.getElementById("select3").style.display = "block";
		document.getElementById("select4").style.display = "block";
		document.getElementById("select5").style.display = "block";
		document.getElementById("select6").style.display = "none";
    }
	else if (colorSelect == 6) {
        document.getElementById("select2").style.display = "block";
        document.getElementById("select3").style.display = "block";
		document.getElementById("select4").style.display = "block";
		document.getElementById("select5").style.display = "block";
		document.getElementById("select6").style.display = "block";
    }

}

// Simple example, see optional options for more configuration.
const pickr = Pickr.create({
    el: '.color-picker',
    theme: 'classic', // or 'monolith', or 'nano'
	default: '#da6c5b',

    swatches: [
        'rgba(244, 67, 54, 1)'
        
    ],

    components: {

        // Main components
        preview: true,
        opacity: true,
        hue: true,

        // Input / output Options
        interaction: {
            hex: true,
            rgba: true,
            cmyk: true,
            input: true,
            clear: true,
            
        }
    }
});

const pickr2 = Pickr.create({
    el: '.color-picker2',
    theme: 'classic', // or 'monolith', or 'nano'
	default:'#facab0',	

    swatches: [
        'rgba(244, 67, 54, 1)'
        
    ],

    components: {

        // Main components
        preview: true,
        opacity: true,
        hue: true,

        // Input / output Options
        interaction: {
            hex: true,
            rgba: true,
            cmyk: true,
            input: true,
            clear: true,
            
        }
    }
});

const pickr3 = Pickr.create({
    el: '.color-picker3',
    theme: 'classic', // or 'monolith', or 'nano'
	default:'#afadac',
	
    swatches: [
        'rgba(244, 67, 54, 1)'
        
    ],

    components: {

        // Main components
        preview: true,
        opacity: true,
        hue: true,

        // Input / output Options
        interaction: {
            hex: true,
            rgba: true,
            cmyk: true,
            input: true,
            clear: true,
            
        }
    }
});

const pickr4 = Pickr.create({
    el: '.color-picker4',
    theme: 'classic', // or 'monolith', or 'nano'
	default:'#ededed',
	
    swatches: [
        'rgba(244, 67, 54, 1)'
        
    ],

    components: {

        // Main components
        preview: true,
        opacity: true,
        hue: true,

        // Input / output Options
        interaction: {
            hex: true,
            rgba: true,
            cmyk: true,
            input: true,
            clear: true,
            
        }
    }
});

const pickr5 = Pickr.create({
    el: '.color-picker5',
    theme: 'classic', // or 'monolith', or 'nano'
	default:'#6a313e',
	
    swatches: [
        'rgba(244, 67, 54, 1)'
        
    ],

    components: {

        // Main components
        preview: true,
        opacity: true,
        hue: true,

        // Input / output Options
        interaction: {
            hex: true,
            rgba: true,
            cmyk: true,
            input: true,
            clear: true,
            
        }
    }
});

const pickr6 = Pickr.create({
    el: '.color-picker6',
    theme: 'classic', // or 'monolith', or 'nano'
	default:'#6a313e',
	
    swatches: [
        'rgba(244, 67, 54, 1)'
        
    ],

    components: {

        // Main components
        preview: true,
        opacity: true,
        hue: true,

        // Input / output Options
        interaction: {
            hex: true,
            rgba: true,
            cmyk: true,
            input: true,
            clear: true,
            
        }
    }
});


pickr.on('change', (color, instance) => {
  	const colorSelect = color.toRGBA().toString(2);
	document.getElementById('color1').style.background = colorSelect;
	
	
});

pickr2.on('change', (color, instance) => {
	const colorSelect2 = color.toRGBA().toString(2);
	document.getElementById('color2').style.background = colorSelect2;
});
pickr3.on('change', (color, instance) => {
	const colorSelect3 = color.toRGBA().toString(2);
  document.getElementById('color3').style.background = colorSelect3;
});

pickr4.on('change', (color, instance) => {
  const colorSelect4 = color.toRGBA().toString(2);
  document.getElementById('color4').style.background = colorSelect4;
});

pickr5.on('change', (color, instance) => {
	const colorSelect5 = color.toRGBA().toString(2);
	document.getElementById('color5').style.background = colorSelect5;
  });

pickr6.on('change', (color, instance) => {
	const colorSelect6 = color.toRGBA().toString(2);
	document.getElementById('color6').style.background = colorSelect6;
  });





