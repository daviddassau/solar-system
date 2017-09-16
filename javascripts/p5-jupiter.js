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
                            <p><strong>Year Discovered:</strong> ${jupiter.Discovered}<br />
                            <strong>Mass:</strong> ${jupiter.Mass}<br />
                            <strong>Size:</strong> ${jupiter.Size}<br />
                            <strong>Distance from Sun:</strong> ${jupiter.Orbit}<br />
                            <strong>Atmosphere Composition:</strong> ${jupiter.Atmosphere}<br />
                            <strong>Satellites:</strong> ${jupiter.Satellites}<br />
                            <strong>Probes/Orbiters/Explorers:</strong> ${jupiter.Probes}</p>
                            </div>`;
}

module.exports = outputTo;