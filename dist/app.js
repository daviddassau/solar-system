(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

const AllDaPlanets = require('./planet-generator');
console.log(AllDaPlanets);

document.getElementById("planetButtons").addEventListener('click', (event) => {
	let planetSelected;
	if(event.target.id === 'planetButtons'){
		planetSelected = 'mercury';
	} else {
		planetSelected = event.target.id;
	}
	document.getElementById("planetsDiv").innerHTML = AllDaPlanets[planetSelected]();
});


// Error is saying: AllDaPlanets[planetSelected] is not a function
},{"./planet-generator":10}],2:[function(require,module,exports){
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
},{}],3:[function(require,module,exports){

},{}],4:[function(require,module,exports){
arguments[4][3][0].apply(exports,arguments)
},{"dup":3}],5:[function(require,module,exports){
"use strict";

var Planet = (function(oldPlanet){

    const mars = {
        "Name": "Mars",
        "Discovered": "Prehistory",
        "Mass": "6.4171 x 10^23 kg",
        "Volume": "1.6318 x 10^11 km³",
        "Orbit": "228 million km",
        "Atmosphere": ["CO2", "argon", "nitrogen", "oxygen", "CO"],
        "Moons": ["Phobos", "Deimos"],
        "Probes": ["various Mariner and Mars probes", "Viking 1 and 2", "Mars Global Surveyor", "Mars Pathfinder", "Sojourner", "2001 Mars Odyssey", "Mars Express", "Spirit", "Opportunity", "Mars Reconnaissance Orbiter", "Phoenix", "Dawn", "Curiosity", "Mars Orbiter Mission", "MAVEN", "ExoMars TGO", "Schiaparelli"]
    };

    oldPlanet.outputTo = function(domElement) {
        domElement.innerHTML = `<h1>${mars.Name}</h1><h4>Discovered in ${mars.Discovered}</h4><br>Mass: ${mars.Mass}<br>Volume: ${mars.Volume}<br>Orbital distance: ${mars.Orbit}<br>`;
        
        let lists = ["Atmosphere", "Moons", "Probes"];

        lists.forEach(function(val){
            domElement.innerHTML += `${val}: `;
            mars[val].forEach(function(value, index){
                if (index === mars[val].length - 1) {
                    domElement.innerHTML += `${value}<br>`;
                } else {
                    domElement.innerHTML += `${value}, `;
                }
            });
        });
    };

    return oldPlanet;

})(Planet || {});
},{}],6:[function(require,module,exports){
arguments[4][3][0].apply(exports,arguments)
},{"dup":3}],7:[function(require,module,exports){
arguments[4][3][0].apply(exports,arguments)
},{"dup":3}],8:[function(require,module,exports){
arguments[4][3][0].apply(exports,arguments)
},{"dup":3}],9:[function(require,module,exports){
arguments[4][3][0].apply(exports,arguments)
},{"dup":3}],10:[function(require,module,exports){
"use strict";

const mercury = require('./p1-mercury');
const venus = require('./p2-venus');
const earth = require('./p3-earth');
const mars = require('./p4-mars');
const jupiter = require('./p5-jupiter');
const saturn = require('./p6-saturn');
const uranus = require('./p7-uranus');
const neptune = require('./p8-neptune');


const allMyPlanetsExceptForPluto = {
	mercury
};

module.exports = allMyPlanetsExceptForPluto;
},{"./p1-mercury":2,"./p2-venus":3,"./p3-earth":4,"./p4-mars":5,"./p5-jupiter":6,"./p6-saturn":7,"./p7-uranus":8,"./p8-neptune":9}]},{},[1]);
