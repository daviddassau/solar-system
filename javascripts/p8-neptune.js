"use strict";


const neptune = {
    "Name": "Neptune",
    "Discovered": "1846, Johann Galle and Urbain Le Verrier",
    "Mass": "1.0243 x 10^26 kg",
    "Size": "6.254 x 10^13 km^3",
    "Orbit": "4.5 billion km",
    "Atmosphere": "hydrogen, helium, methane, trace gases",
    "Satellites": "Naiad, Thalassa, Despina, Galatea, Larissa, Proteus, Triton, Nereid, Halimede, Sao, Laomedeia, Psamathe, Neso, 1 unnamed",
    "Probes": "Voyager 2"
};


function outputTo(domElement) {
    domElement.innerHTML += `<div class="col-md-3">
                            <h3>${neptune.Name}</h3>
                            <p>${neptune.Discovered}<br />
                            ${neptune.Mass}<br />
                            ${neptune.Size}<br />
                            ${neptune.Orbit}<br />
                            ${neptune.Atmosphere}<br />
                            ${neptune.Satellites}<br />
                            ${neptune.Probes}</p>
                            </div>`;
}

module.exports = outputTo;