//Declare a class called CrewCandidate with a constructor that takes three parameters—name, mass, and scores. Note that scores will be an array of test results.
class CrewCandidate {
    constructor(name, mass, scores) {
        this.name = name;
        this.mass = mass;
        this.scores = scores;
    }
    addScore(newScore) {
        this.scores.push(newScore);
    }
    average() {
        let sum = 0;
        for (let i = 0; i < this.scores.length; i++) {
            sum += this.scores[i];
        }
        return Math.round(10 * sum / this.scores.length) / 10;
    }
    status(avg) {
        let status = "";
        if (avg >= 90) {
            status = "Accepted";
        }   else if (avg >= 80) {
            status = "Reserve";
        }   else if (avg >= 70) {
            status = "Probationary";
        }   else {
            status = "Rejected";
        }
        return `${this.name} earned an average test score of ${avg}% and has a status of ${status}.`;
    }
}

let bubba = new CrewCandidate("Bubba Bear", 135, [88, 85, 90]);
let merry = new CrewCandidate("Merry Maltese", 1.5, [93, 88, 97]);
let glad = new CrewCandidate("Glad Gator", 225, [75, 78, 62]);
// console.log(bubba);
// console.log(merry);
// console.log(glad);
glad.addScore(100);
glad.addScore(100);
glad.addScore(100);
glad.addScore(100);
glad.addScore(100);
glad.addScore(100);
console.log(glad.status(glad.average()));

glad.scores = [75, 78, 62];

while (glad.average() <= 90) {
    glad.addScore(100);
}
console.log(glad);
console.log(glad.average());

//Add methods for adding scores, averaging scores and determining candidate status as described in the studio activity.



//Part 4 - Use the methods to boost Glad Gator’s status to Reserve or higher. How many tests will it take to reach Reserve status? How many to reach Accepted? Remember, scores cannot exceed 100%.