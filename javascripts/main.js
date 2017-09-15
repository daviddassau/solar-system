"use strict";

const AllDaPlanets = require('./planet-generator');
console.log(AllDaPlanets);

document.getElementById("planetButtons").addEventListener('click', (event) => {
	let planetSelected;
	if(event.target.id === 'planetButtons'){
		planetSelected = 'mercury';
	}
	document.getElementById("planetsDiv").innerHTML = AllDaPlanets[planetSelected]();
});