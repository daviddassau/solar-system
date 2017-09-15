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