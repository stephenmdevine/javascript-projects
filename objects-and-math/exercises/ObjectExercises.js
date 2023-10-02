let superChimpOne = {
   name: "Chad",
   species: "Chimpanzee",
   mass: 9,
   age: 6,
   astronautID: 1,
   move: function() {
      return Math.floor(Math.random()*11)
   }
};

let salamander = {
   name: "Lacey",
   species: "Axolotl Salamander",
   mass: 0.1,
   age: 5,
   astronautID: 2,
   move: function() {
      return Math.floor(Math.random()*11)
   }
};

let superChimpTwo = {
   name: "Brad",
   species: "Chimpanzee",
   mass: 11,
   age: 6,
   astronautID: 3,
   move: function() {
      return Math.floor(Math.random()*11)
   }
};

let doggo = {
   name: "Leroy",
   species: "Beagle",
   mass: 14,
   age: 5,
   astronautID: 4,
   move: function() {
      return Math.floor(Math.random()*11)
   }
};

let waterBear = {
   name: "Almina",
   species: "Tardigrade",
   mass: 0.0000000001,
   age: 1,
   astronautID: 5,
   move: function() {
      return Math.floor(Math.random()*11)
   }
};

// After you have created the other object literals, add the astronautID property to each one.

// Create an array to hold the animal objects.
let crew = [superChimpOne, superChimpTwo, salamander, doggo, waterBear];

// Print out the relevant information about each animal.
function crewReports(crewMember) {
   console.log(`${crewMember.name} is a ${crewMember.species}. They are ${crewMember.age} years old and ${crewMember.mass} kilograms. Their ID is ${crewMember.astronautID}.`);
}

crewReports(waterBear);

// console.log(waterBear.move());
// console.log(timeOfRace(waterBear, 20));

// Start an animal race!
// Function to find the amount of turns to complete a race of a number of steps.
function timeOfRace(crewMember, finish) {
   let turns = 0, distance = 0;
   while (distance < finish) {
      distance += crewMember.move();
      turns++;
   }
   return turns;
}

// Function to test the members of the crew in a race of 20 steps.
function fitnessTest(crewArray) {
   let results = [];
   for (let i = 0; i < crewArray.length; i++) {
      results.push(`${crewArray[i].name} took ${timeOfRace(crewArray[i], 20)} turns to take 20 steps.`)
   }
   return results;
}

console.log(fitnessTest(crew));