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
                            <p><strong>Year Discovered:</strong> ${saturn.Discovered}<br />
                            <strong>Mass:</strong> ${saturn.Mass}<br />
                            <strong>Size:</strong> ${saturn.Size}<br />
                            <strong>Distance from Sun:</strong> ${saturn.Orbit}<br />
                            <strong>Atmosphere Composition:</strong> ${saturn.Atmosphere}<br />
                            <strong>Satellites:</strong> ${saturn.Satellites}<br />
                            <strong>Probes/Orbiters/Explorers:</strong> ${saturn.Probes}</p>
                            </div>`;
}

module.exports = outputTo;