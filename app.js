const weatherApp = require("./weatherApp");

const location  = process.argv.splice(2).join("_")
console.log(location)
weatherApp.get(location);