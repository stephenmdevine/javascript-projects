// Code your selectRandomEntry function here:
function selectRandomEntry(numbers) {
  let selected = Math.floor(Math.random()*numbers.length);
  return numbers[selected];
}

// Code your buildCrewArray function here:

let idNumbers = [291, 414, 503, 599, 796, 890];

let newArray = [];
let nextEntry;
for (let i = 0; i < 3; i++) {
  nextEntry = selectRandomEntry(idNumbers);
  while(newArray.includes(nextEntry)) {
    nextEntry = selectRandomEntry(idNumbers);
  }
  newArray.push(nextEntry);
}

// Here are the candidates and the 'animals' array:
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

let animals = [candidateA,candidateB,candidateC,candidateD,candidateE,candidateF];

function buildCrewArray(randIds, candidates) {
  let arr = [];
  for (let i = 0; i < randIds.length; i++) {
    for (let j = 0; j < candidates.length; j++) {
      if (randIds[i] === candidates[j]['astronautID']) {
        arr.push(candidates[j]['name']);
      }
    }
  }
  return arr;
}

// Code your template literal and console.log statements:

luckyWinners = buildCrewArray(newArray, animals);
console.log(`${luckyWinners[0]}, ${luckyWinners[1]}, and ${luckyWinners[2]} are going to space!`);
