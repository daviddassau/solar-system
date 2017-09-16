"use strict";


const jupiter = {
    "Name": "Jupiter",
    "Discovered": "Prehistory",
    "Mass": "1.8986 x 10^27 kg",
    "Size": "1.4313 x 10^15 km^3",
    "Orbit": "778 million km",
    "Atmosphere": "hydrogen, helium, methane, ammonia, trace gases",
    "Satellites": "69 known - Io, Europa, Ganymede, Callisto, Amalthea, Himalia, Elara, Pasiphae, Sinope, Lysithea, Carme",
    "Probes": "Pioneer 10 and 11, Voyager 1 and 2, Ulysses, Galileo, Cassini, New Horizons, Juno"
};


function outputTo(domElement) {
    domElement.innerHTML += `<div class="col-md-3">
                            <h3>${jupiter.Name}</h3>
                            <p>${jupiter.Discovered}<br />
                            ${jupiter.Mass}<br />
                            ${jupiter.Size}<br />
                            ${jupiter.Orbit}<br />
                            ${jupiter.Atmosphere}<br />
                            ${jupiter.Satellites}<br />
                            ${jupiter.Probes}</p>
                            </div>`;
}

module.exports = outputTo;