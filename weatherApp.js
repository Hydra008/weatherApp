
//get the requirements

const https = require("https");
const http = require("http");
const api = require("./api");


function printError(error) {
    console.error(`The request cannot be completed due to ${error}`);
}

function printTempDetails(weatherData) {
    console.log(`
                  City : ${weatherData.location.city} 
                  Temperature (Celsius) : ${weatherData.current_observation.temp_c} 
                  Temperature Last updated : ${weatherData.current_observation.observation_time}
                  `)
}


try {
    function getWeatherUpdates(location) {
        let body = "";
        const weather = https.get(`https://api.wunderground.com/api/${api.key}/geolookup/conditions/q/${location}.json`, response => {
            if(response.statusCode === 200) {
                response.on('data', data_chunks => {
                    body += data_chunks;
                });
                response.on('end', () => {
                    let jsonData = JSON.parse(body.toString());
                    if (jsonData.location) {
                       printTempDetails(jsonData);
                    } else {
                        //if location is not found throw error
                        const locationError = `The application could not find ${location}`
                        printError(locationError)
                    }
                });
            } else  {
                let statusCodeError = `The request cannot be completed due to ${http.STATUS_CODES(response.statusCode)}`;
            }
        });

    }
} catch (error) {
    //catch URL errors
    printError(error.message);
}


module.exports.get = getWeatherUpdates;