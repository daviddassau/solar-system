"use strict";

var Planets = (function(oldPlanet){
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

	oldPlanet.outputTo = function(domElement){
		domElement.innerHTML = `<h3>${mercury.Name}</h3>
								<p>${mercury.Discovered}</p>
								<p>${mercury.Mass}</p>
								<p>${mercury.Size}</p>
								<p>${mercury.Orbit}</p>
								<p>${mercury.Atmosphere}</p>
								<p>${mercury.Satellites}</p>
								<p>${mercury.Probes}</p>`;
	};

	return oldPlanet;
})(Planets || {});


module.exports = Planets;