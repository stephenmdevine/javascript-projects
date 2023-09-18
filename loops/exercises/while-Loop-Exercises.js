//Define three variables for the LaunchCode shuttle - one for the starting fuel level, another for the number of astronauts aboard, and the third for the altitude the shuttle reaches.
const input = require('readline-sync');

let startingFuelLevel = 0, astronautNumber = 0, shuttleAltitude = 0;

/*Exercise #4: Construct while loops to do the following:
  a. Query the user for the starting fuel level. Validate that the user enters a positive, integer value greater than 5000 but less than 30000. */
while (startingFuelLevel <= 5000 || startingFuelLevel >= 30000){
  startingFuelLevel = input.question("Enter starting fuel (between 5000 and 30000): ");
  if (startingFuelLevel <= 5000) {
    console.log("Not enough fuel.");
  } else if (startingFuelLevel >= 30000) {
    console.log("Too much fuel.");
  } else {
    console.log(`Shuttle has ${startingFuelLevel} fuels.`);
  }
}

//b. Use a second loop to query the user for the number of astronauts (up to a maximum of 7). Validate the entry.
while (astronautNumber < 1 || astronautNumber > 7){
  astronautNumber = input.question("How many astronauts are aboard? ");
  if (astronautNumber < 1) {
    console.log("Not enough crew.");
  } else if (astronautNumber > 7) {
    console.log("Too many astronauts.");
  } else {
    console.log(`Shuttle has ${astronautNumber} crew aboard.`);
  }
}

//c. Use a final loop to monitor the fuel status and the altitude of the shuttle. Each iteration, decrease the fuel level by 100 units for each astronaut aboard. Also, increase the altitude by 50 kilometers.
while (startingFuelLevel >= (astronautNumber * 100)) {
  startingFuelLevel = startingFuelLevel - (astronautNumber * 100);
  shuttleAltitude = shuttleAltitude + 50;
}
console.log(`The shuttle reached ${shuttleAltitude}km with ${startingFuelLevel} fuels left.`);

/*Exercise #5: Output the result with the phrase, “The shuttle gained an altitude of ___ km.”

If the altitude is 2000 km or higher, add “Orbit achieved!” Otherwise add, “Failed to reach orbit.”*/
console.log(`The shuttle gained an altitude of ${shuttleAltitude}km.`);
if (shuttleAltitude >= 2000) {
  console.log("Orbit achieved!");
} else {
  console.log("Failed to reach orbit.");
}
