"use strict";


const earth = {
	"Name": "Earth",
	"Discovered": "6000 years ago according to creationists",
	"Mass": "5.9724 x 10^24 kg",
	"Size": "1.0832 x 10^12 km^3",
	"Orbit": "150 million km",
	"Atmosphere": "Nitrogen, oxygen, water, argon, CO2",
	"Satellites": "Moon",
	"Probes": "Everything ever created by humans"
};


function outputTo(domElement) {
    domElement.innerHTML += `<div class="col-md-3">
    						<h3>${earth.Name}</h3>
							<p><strong>Year Discovered:</strong> ${earth.Discovered}<br />
							<strong>Mass:</strong> ${earth.Mass}<br />
							<strong>Size:</strong> ${earth.Size}<br />
							<strong>Distance from Sun:</strong> ${earth.Orbit}<br />
							<strong>Atmosphere Composition:</strong> ${earth.Atmosphere}<br />
							<strong>Satellites:</strong> ${earth.Satellites}<br />
							<strong>Probes/Orbiters/Explorers:</strong> ${earth.Probes}</p>
							</div>`;
}

module.exports = outputTo;