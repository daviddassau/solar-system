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
    domElement.innerHTML += `<h3>${mercury.Name}</h3>
							<p>${mercury.Discovered}<br />
							${mercury.Mass}<br />
							${mercury.Size}<br />
							${mercury.Orbit}<br />
							${mercury.Atmosphere}<br />
							${mercury.Satellites}<br />
							${mercury.Probes}</p>`;
}

module.exports = outputTo;