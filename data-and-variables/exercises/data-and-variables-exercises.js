// Declare and assign the variables below
let shuttleName = "Determination"; //Name of the space shuttle
let shuttleSpeed = 17500; //Shuttle speed in mph
let marsDistance = 225000000; //Distance to Mars in km
let moonDistance = 384400; //Distance to Moon in km
const mpkm = 0.621; //Miles per kilometer

// Use console.log to print the 'typeof' each variable. Print one item per line.
console.log(typeof(shuttleName));
console.log(typeof(shuttleSpeed));
console.log(typeof(marsDistance));
console.log(typeof(moonDistance));
console.log(typeof(mpkm));

// Calculate a space mission below
let milesToMars = marsDistance * mpkm; //Convert km to Mars into Miles
let timeToMars = milesToMars / shuttleSpeed; //Hours to get to Mars
let daysToMars = timeToMars / 24; //Days to Mars

// Print the results of the space mission calculations below
console.log(shuttleName + " will take " + daysToMars + " days to reach Mars.");

// Calculate a trip to the moon below
let milesToMoon = moonDistance * mpkm; //Convert km to Moon into miles
let hoursToMoon = milesToMoon / shuttleSpeed; //Hours to get to Moon
let daysToMoon = hoursToMoon / 24; //Days to Moon

// Print the results of the trip to the moon below
console.log(shuttleName + " will take " + daysToMoon + " days to reach the Moon.");
