"use strict";


const venus = {
	"Name": "Venus",
	"Discovered": "Prehistory",
	"Mass": "4.8675 x 10^24 kg",
	"Size": "9.2843 x 10^11 km^3",
	"Orbit": "108 million km",
	"Atmosphere": "carbon dioxide, nitrogen, trace gases",
	"Satellites": "none",
	"Probes": "various Venera and Mariner, Vega 1 and 2, Magellan, Venus Express, Akatsuki, IKAROS"
};


function outputTo(domElement) {
    domElement.innerHTML += `<div class="col-md-3">
    						<h3>${venus.Name}</h3>
							<p><strong>Year Discovered:</strong> ${venus.Discovered}<br />
							<strong>Mass:</strong> ${venus.Mass}<br />
							<strong>Size:</strong> ${venus.Size}<br />
							<strong>Distance from Sun:</strong> ${venus.Orbit}<br />
							<strong>Atmosphere Composition:</strong> ${venus.Atmosphere}<br />
							<strong>Satellites:</strong> ${venus.Satellites}<br />
							<strong>Probes/Orbiters/Explorers:</strong> ${venus.Probes}</p>
							</div>`;
}

module.exports = outputTo;