"use strict";


const mercury = {
	"Name": "Mercury",
	"Discovered": "Prehistory",
	"Mass": "3.3011x10^23 kg",
	"Size": "6.083x10^10",
	"Orbit": "57 million km",
	"Atmosphere": "oxygen, sodium, hydrogen, helium, potassium, trace gases",
	"Satellites": "none",
	"Probes": "Mariner 10, MESSENGER"
};


function outputTo(domElement) {
    domElement.innerHTML += `<div class="col-md-3">
    						<h3>${mercury.Name}</h3>
							<p><strong>Year Discovered:</strong> ${mercury.Discovered}<br />
							<strong>Mass:</strong> ${mercury.Mass}<br />
							<strong>Size:</strong> ${mercury.Size}<br />
							<strong>Distance from Sun:</strong> ${mercury.Orbit}<br />
							<strong>Atmosphere Composition:</strong> ${mercury.Atmosphere}<br />
							<strong>Satellites:</strong> ${mercury.Satellites}<br />
							<strong>Probes/Orbiters/Explorers:</strong> ${mercury.Probes}</p>
							</div>`;
}

module.exports = outputTo;