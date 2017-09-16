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
                            <p>${uranus.Discovered}<br />
                            ${uranus.Mass}<br />
                            ${uranus.Size}<br />
                            ${uranus.Orbit}<br />
                            ${uranus.Atmosphere}<br />
                            ${uranus.Satellites}<br />
                            ${uranus.Probes}</p>
                            </div>`;
}

module.exports = outputTo;