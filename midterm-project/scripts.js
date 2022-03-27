function colorDrop(){	
	let today = new Date();
    document.getElementById("myDate").innerHTML = today;
	document.getElementById("selection").value = "1";
}

class Palette {
	constructor (color1, color2, color3, color4, color5, color6){ 
		this.color1 = color1;
		this.color2 = color2;
		this.color3 = color3;
		this.color4 = color4;
		this.color5 = color5;
		this.color6 = color6;
	}
}

const beach = new Palette( '#BFABA3', '#2990C2', '#15B3C2', '', '#30C2A9', '#C29764');
const forest = new Palette('#2A5E56', '#2E694F',  '#4FA166', '', '#3B873B', '#3F632C');
const kaliedoscope = new Palette('#70115C', '#BDA842',  '#BD309F', '', '#1CBDB8', '#91C4C3');
const cabin = new Palette('#8F6404', '#995C05',  '#82400A', '', '#993205', '#8F1A04');
const gasstationatnight = new Palette('#B61CBA', '#791DC4',  '#3323AD', '', '#6180C7',  '#498399');
const waterfall = new Palette('#0E5D61', '#65DFE6',  '#1FD7E0', '',  '#2B5E61', '#18A6AD');

beach.swatch = function(){
	document.getElementById('color1').style.background = this.color1;
	document.getElementById('color2').style.background = this.color2;
	document.getElementById('color3').style.background = this.color3;
	document.getElementById('color4').style.background = this.color4;
	document.getElementById('color5').style.background = this.color5;
	document.getElementById('color6').style.background = this.color6;
};

// Palette Functions

function choosePalette(){
	if (choosePalette == 1){
		beach.swatch;
	}
	else if (choosePalette == 2){
		document.getElementById('color1').style.background = forest.swatch;
		
		loadMe(forest, 2);

	}
}


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





