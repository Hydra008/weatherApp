
//get the requirements

const https = require("https");
const http = require("http");
const api = require("./api");

function getWeatherUpdates (location) {
    const weather = https.get(`https://api.wunderground.com/api/${api.key}/geolookup/conditions/q/${location}.json`, response => {
    console.log(response.statusCode);
    });
}


module.exports.get = getWeatherUpdates;