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
							<p>${venus.Discovered}<br />
							${venus.Mass}<br />
							${venus.Size}<br />
							${venus.Orbit}<br />
							${venus.Atmosphere}<br />
							${venus.Satellites}<br />
							${venus.Probes}</p>
							</div>`;
}

module.exports = outputTo;