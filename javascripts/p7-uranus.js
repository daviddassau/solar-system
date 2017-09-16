"use strict";


const uranus = {
    "Name": "Uranus",
    "Discovered": "1781, William Herschel",
    "Mass": "8.6810 x 10^25 kg",
    "Size": "6.833 x 10^13 km^3",
    "Orbit": "2.9 billion km",
    "Atmosphere": "hydrogen, helium, methane, trace gases",
    "Satellites": "27 known - Ariel, Umbriel, Titania, Oberon, Miranda, Cordelia, Ophelia, Bianca, Cressida",
    "Probes": "Voyager 2"
};


function outputTo(domElement) {
    domElement.innerHTML += `<div class="col-md-3">
                            <h3>${uranus.Name}</h3>
                            <p><strong>Year Discovered:</strong> ${uranus.Discovered}<br />
                            <strong>Mass:</strong> ${uranus.Mass}<br />
                            <strong>Size:</strong> ${uranus.Size}<br />
                            <strong>Distance from Sun:</strong> ${uranus.Orbit}<br />
                            <strong>Atmosphere Composition:</strong> ${uranus.Atmosphere}<br />
                            <strong>Satellites:</strong> ${uranus.Satellites}<br />
                            <strong>Probes/Orbiters/Explorers:</strong> ${uranus.Probes}</p>
                            </div>`;
}

module.exports = outputTo;