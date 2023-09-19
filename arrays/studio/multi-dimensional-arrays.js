const input = require('readline-sync');

let food = "water bottles,meal packs,snacks,chocolate";
let equipment = "space suits,jet packs,tool belts,thermal detonators";
let pets = "parrots,cats,moose,alien eggs";
let sleepAids = "blankets,pillows,eyepatches,alarm clocks";

//1) Use split to convert the strings into four cabinet arrays. Alphabetize the contents of each cabinet.
let foodArr = food.split(",").sort();
let equipArr = equipment.split(",").sort();
let petsArr = pets.split(",").sort();
let sleepAidsArr = sleepAids.split(",").sort();

//2) Initialize a cargoHold array and add the cabinet arrays to it. Print cargoHold to verify its structure.
let cargoHold = [foodArr, equipArr, petsArr, sleepAidsArr];
console.log(cargoHold);

//3) Query the user to select a cabinet (0 - 3) in the cargoHold.
let cabinetInput = input.question("Select a cabinet in the cargo hold (0 - 3): ");

//4) Use bracket notation and a template literal to display the contents of the selected cabinet. If the user entered an invalid number, print an error message.
// console.log(`Your cabinet contains ${cargoHold[cabinetInput]}`)
if (!Boolean(cargoHold[cabinetInput])) {
    console.log("Error. Selection out of range.");
}   else {
    console.log(`Your cabinet contains ${cargoHold[cabinetInput]}`);
}

//5) Modify the code to query the user for BOTH a cabinet in cargoHold AND a particular item. Use the 'includes' method to check if the cabinet contains the selected item, then print “Cabinet ____ DOES/DOES NOT contain ____.”
let item = input.question("which item are you looking for? ");

