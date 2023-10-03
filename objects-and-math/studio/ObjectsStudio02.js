// Code your orbitCircumference function here:
function orbitCircumference(radius) {
  return Math.round(Math.PI * radius *2);
}

// Code your missionDuration function here:
function missionDuration(orbits, radius = 2000, speed = 28000) {
  let time = Math.round((orbits * (orbitCircumference(radius) / speed)) *100) /100;
  console.log(`The mission will travel ${orbitCircumference(radius)} km around the planet, and it will take ${time} hours to complete.`);
  return time;
}

// Copy/paste your selectRandomEntry function here:
function selectRandomEntry(numbersArray) {
  let selected = Math.floor(Math.random()*numbersArray.length);
  return numbersArray[selected];
}

function idBecomesCandidate(randId, candidates) {
  let selectee;
    for (let i = 0; i < candidates.length; i++) {
      if (randId === candidates[i]['astronautID']) {
        selectee = candidates[i];
      }
    }
  return selectee;
}


// Code your oxygenExpended function here:
function oxygenExpended(spaceWalker, radius = 2000, speed = 28000) {
  let hours = missionDuration(3, radius, speed);
  let o2Spent = Math.round(spaceWalker.o2Used(hours) *1000) /1000;
  console.log(`${spaceWalker.name} will perform the spacewalk, which will last ${hours} hours and require ${o2Spent} kg of oxygen.`);
  return o2Spent;
}

// Candidate data & crew array.
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
 
 let crew = [candidateA,candidateC,candidateE];
 let idNumbers = [291, 414, 503, 599, 796, 890];
 let animals = [candidateA,candidateB,candidateC,candidateD,candidateE,candidateF];
 
//  missionDuration(5);
//  idBecomesCandidate(selectRandomEntry(idNumbers), animals);
 oxygenExpended(idBecomesCandidate(selectRandomEntry(idNumbers), animals));