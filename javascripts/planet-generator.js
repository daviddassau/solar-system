"use strict";

const mercury = require('./p1-mercury');
const venus = require('./p2-venus');
const earth = require('./p3-earth');
const mars = require('./p4-mars');
const jupiter = require('./p5-jupiter');
const saturn = require('./p6-saturn');
const uranus = require('./p7-uranus');
const neptune = require('./p8-neptune');


const allMyPlanetsExceptForPluto = {
	mercury, venus, earth, mars, jupiter, saturn, uranus, neptune
};

module.exports = allMyPlanetsExceptForPluto;