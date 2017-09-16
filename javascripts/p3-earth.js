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
							<p>${earth.Discovered}<br />
							${earth.Mass}<br />
							${earth.Size}<br />
							${earth.Orbit}<br />
							${earth.Atmosphere}<br />
							${earth.Satellites}<br />
							${earth.Probes}</p>
							</div>`;
}

module.exports = outputTo;