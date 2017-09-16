"use strict";


const saturn = {
    "Name": "Saturn",
    "Discovered": "Prehistory",
    "Mass": "5.6836 x 10^26 kg",
    "Size": "8.2713 x 10^14 km^3",
    "Orbit": "1.4 billion km",
    "Atmosphere": "hydrogen, helium, methane, trace gases",
    "Satellites": "62 known - Mimas, Enceladus, Tethys, Dione, Rhea, Titan, Hyperion, Iapetus, Phoebe, Janus, Epimetheus, Helene, Telesto, Calypso",
    "Probes": "Pioneer 11, Voyager 1 and 2, Cassini"
};


function outputTo(domElement) {
    domElement.innerHTML += `<div class="col-md-3">
                            <h3>${saturn.Name}</h3>
                            <p>${saturn.Discovered}<br />
                            ${saturn.Mass}<br />
                            ${saturn.Size}<br />
                            ${saturn.Orbit}<br />
                            ${saturn.Atmosphere}<br />
                            ${saturn.Satellites}<br />
                            ${saturn.Probes}</p>
                            </div>`;
}

module.exports = outputTo;