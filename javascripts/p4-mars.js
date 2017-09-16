"use strict";


const mars = {
    "Name": "Mars",
    "Discovered": "Prehistory",
    "Mass": "6.4171 x 10^23 kg",
    "Size": "1.6318 x 10^11 km^3",
    "Orbit": "228 million km",
    "Atmosphere": "CO2, argon, nitrogen, oxygen, CO",
    "Satellites": "Phobos, Deimos (fear and dread, mythical sons of Mars (war) which accompanied him)",
    "Probes": "various Mariner and Mars probes, Viking 1 and 2, Mars Global Surveyor"
};


function outputTo(domElement) {
    domElement.innerHTML += `<div class="col-md-3">
                            <h3>${mars.Name}</h3>
                            <p>${mars.Discovered}<br />
                            ${mars.Mass}<br />
                            ${mars.Size}<br />
                            ${mars.Orbit}<br />
                            ${mars.Atmosphere}<br />
                            ${mars.Satellites}<br />
                            ${mars.Probes}</p>
                            </div>`;
}

module.exports = outputTo;