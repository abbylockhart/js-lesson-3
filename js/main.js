let firstName = "Abby";
let favouriteBeach = "Tugun Beach";
let waterTemperature = 15.5; // Degrees in Celsius
let coldestTemperature = 8; // Degrees in Celsius
let longestSwim = 3; // Time in Minutes
let completedTrack = true; 
let favouriteWaterfalls = ["Cedar Creek Falls", "Cougal Cascades", "Killen Falls"];

//  expressions using operators and operands, output new data values to console
let waterDifference = waterTemperature - coldestTemperature;
console.log("Water temperature difference:", waterDifference);

let swimTimeRemaining = longestSwim - 1;
console.log("Remaining swim time:", swimTimeRemaining);

let trackStatusMessage = completedTrack ? "You have completed the track." : "You haven't completed the track.";
console.log(trackStatusMessage);

// create statements (if/else) and return value(s) in the console
if (favouriteWaterfalls.length > 1) {
    console.log("You have listed some favorite waterfalls.");
} else {
    console.log("You haven't listed any favorite waterfalls.");
}

if (waterTemperature <= 10) {
    console.warn("Water temperature is very cold. Please be cautious!");
} else if (waterTemperature >= 25) {
    console.warn("Water temperature is warm. Enjoy your swim!");
} else {
    console.warn("Water temperature is moderate. Have a good swim!");
}

if (completedTrack = true) {
        console.log(favouriteWaterfalls + " has been completed")
} else {
        console.log(favouriteWaterfalls + " has not been completed");
}
