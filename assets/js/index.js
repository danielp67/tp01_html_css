

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


	// Créé l'effet pour le menu slide (compatible partout)
	if(mainMenu.getAttribute("class") != "visible") {
		mainMenu.setAttribute("class", "visible");
	} else {
		mainMenu.setAttribute("class", "invisible");
	}
}, false);


//Map integration

let map = L.map('mapid').setView([47.762727, 7.289758], 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png?{foo}', {foo: 'bar', attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
maxZoom: 18,
id: 'mapbox/streets-v11',
tileSize: 512,
zoomOffset: -1,
accessToken: 'your.mapbox.access.token'
}).addTo(map);


//Map marker

L.marker([47.752727, 7.316758]).addTo(map);
