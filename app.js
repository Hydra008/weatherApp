const weatherApp = require("./weatherApp");

//takes input from command line window
const location  = process.argv.splice(2).join("_")
weatherApp.get(location);