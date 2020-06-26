

// Récupération des blocs
let mainMenu = document.querySelector("#nav_menu");
let burgerMenu = document.querySelector("#menu_burger");

/*===============================*/
/*=== Clic sur le menu burger ===*/
/*===============================*/
// Vérifie si l'événement touchstart existe et est le premier déclenché
let clickedEvent = "click"; // Au clic si "touchstart" n'est pas détecté
window.addEventListener('touchstart', function detectTouch() {
	clickedEvent = "touchstart"; // Transforme l'événement en "touchstart"
	window.removeEventListener('touchstart', detectTouch, false);
}, false);

// Créé un "toggle class" en Javascrit natif (compatible partout)
burgerMenu.addEventListener(clickedEvent, function(evt) {
	console.log(clickedEvent);
	// Modification du menu burger
	if(!this.getAttribute("class")) {
		this.setAttribute("class", "clicked");
	} else {
		this.removeAttribute("class");
	}
	// Variante avec x.classList (ou DOMTokenList), pas 100% compatible avant IE 11...
	// burgerMenu.classList.toggle("clicked");

	// Créé l'effet pour le menu slide (compatible partout)
	if(mainMenu.getAttribute("class") != "visible") {
		mainMenu.setAttribute("class", "visible");
	} else {
		mainMenu.setAttribute("class", "invisible");
	}
}, false);


//Map integration

let map = L.map('mapid').setView([47.752727, 7.276758], 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png?{foo}', {foo: 'bar', attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
maxZoom: 18,
id: 'mapbox/streets-v11',
tileSize: 512,
zoomOffset: -1,
accessToken: 'your.mapbox.access.token'
}).addTo(map);


//Map marker

L.marker([47.752727, 7.316758]).addTo(map);

/*
//Map overflow
L.Control.textbox = L.Control.extend({
    onAdd: function(map) {
        
    var text = L.DomUtil.create('div');
    text.id = "info_text";
    text.innerHTML = "<strong>text here</strong>"
    return text;
    },

    onRemove: function(map) {
        // Nothing to do here
    }
});
L.control.textbox = function(opts) { return new L.Control.textbox(opts);}
L.control.textbox({ position: 'bottomleft' }).addTo(map);
/*
map.on('move', repositionMask) ;

map.fire('move');


function repositionMask() {
    var po = map.getPixelOrigin(),
        pb = map.getPixelBounds(),
        offset = map.getPixelOrigin().subtract(map.getPixelBounds().min);

    $(layer02._container).css({
        clip: 'rect(' + (overlay.top - offset.y) + 'px,' + (overlay.left + overlay.width - offset.x) + 'px,' + (overlay.top + overlay.height - offset.y) + 'px,' + (overlay.left - offset.x) + 'px)'
    });
}



const overlay = document.getElementById("overlay");
let imageBounds = [[47.752727, 7.16758], [47.752727, 7.316758]];

L.imageOverlay(overlay,imageBounds).addTo(map);
L.imageOverlay(overlay,imageBounds).bringToFront();

/*
let littleton = L.marker([47.752727, 7.316758]).bindPopup('This is Littleton, CO.');
let cities = L.layerGroup([littleton]);

var grayscale = L.tileLayer(mapboxUrl, {id: 'mapid', tileSize: 512, zoomOffset: -1, attribution: mapboxAttribution}),
    streets   = L.tileLayer(mapboxUrl, {id: 'mapid', tileSize: 512, zoomOffset: -1, attribution: mapboxAttribution});

var map = L.map('mapid', {
    center: [47.752727, 7.316758],
    zoom: 10,
    layers: [grayscale, cities]
});


var baseMaps = {
    "Grayscale": grayscale,
    "Streets": streets
};

var overlayMaps = {
    "Cities": cities
};

L.control.layers(baseMaps, overlayMaps).addTo(map);


var baseMaps = {
    "<span style='color: gray'>Grayscale</span>": grayscale,
    "Streets": streets
};


*/