(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

const mercury = require("./p1-mercury");

mercury(document.getElementById("output"));





},{"./p1-mercury":2}],2:[function(require,module,exports){
"use strict";


const mercury = {
	"Name": "Mercury",
	"Discovered": "Prehistory",
	"Mass": "3.3011x10^23 kg",
	"Size": "6.083x10^10",
	"Orbit": "57 million km",
	"Atmosphere": "oxygen, sodium, hydrogen, helium, potassium, trace gases",
	"Satellites": "none",
	"Probes": "Mariner 10, MESSENGER"
};


function outputTo(domElement) {
    domElement.innerHTML += `<h3>${mercury.Name}</h3>
							<p>${mercury.Discovered}<br />
							${mercury.Mass}<br />
							${mercury.Size}<br />
							${mercury.Orbit}<br />
							${mercury.Atmosphere}<br />
							${mercury.Satellites}<br />
							${mercury.Probes}</p>`;
}

module.exports = outputTo;
},{}]},{},[1]);
