// Code your crewMass function here:
function crewMass(crewArray) {
  let totalMass = 0;
  for (let i = 0; i < crewArray.length; i++) {
    totalMass += crewArray[i]['mass'];
  }
  return totalMass;
}

// Code your fuelRequired function here:
function fuelRequired(crewArray) {
  const rocketMass = 75000, fuelPerKg = 9.5;
  let combinedMass = rocketMass + crewMass(crewArray);
  let fuelMass = combinedMass * fuelPerKg;
  for (let i = 0; i < crewArray.length; i++) {
    if ((crewArray[i]['species'] === 'dog') || (crewArray[i]['species'] === 'cat')) {
      fuelMass += 200;
    } else {
      fuelMass += 100;
    }
  }
  fuelMass = Math.ceil(fuelMass);
  console.log(`The mission has a launch mass of ${combinedMass} kg and requires ${fuelMass} kg of fuel.`);
}

// The pre-selected crew is in the array at the end of this file.
// Feel free to add, remove, or switch crew members as you see fit.

let candidateA = {
   'name':'Gordon Shumway',
   'species':'alf',
   'mass':90,
   'o2Used':function(hrs){return 0.035*hrs},
   'astronautID':414
 };
 let candidateB = {
   'name':'Lassie',
   'species':'dog',
   'mass':19.1,
   'o2Used':function(hrs){return 0.030*hrs},
   'astronautID':503
 };
 let candidateC = {
   'name':'Jonsey',
   'species':'cat',
   'mass':3.6,
   'o2Used':function(hrs){return 0.022*hrs},
   'astronautID':796
 };
 let candidateD = {
   'name':'Paddington',
   'species':'bear',
   'mass':31.8,
   'o2Used':function(hrs){return 0.047*hrs},
   'astronautID':291
 };
 let candidateE = {
   'name':'Pete',
   'species':'tortoise',
   'mass':417,
   'o2Used':function(hrs){return 0.010*hrs},
   'astronautID':599
 };
 let candidateF = {
   'name':'Hugs',
   'species':'ball python',
   'mass':2.3,
   'o2Used':function(hrs){return 0.018*hrs},
   'astronautID':890
 };
 
 let crew = [candidateB,candidateD,candidateF];
 
//  console.log(fuelRequired(crewMass(crew)));
fuelRequired(crew);