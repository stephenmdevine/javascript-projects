const input = require('readline-sync');
let str = "LaunchCode";

//1) Use string methods to remove the first three characters from the string and add them to the end.
//Hint - define another variable to hold the new string or reassign the new string to str.
newStr = str.slice(3) + str.slice(0,3);
console.log(newStr);

//Use a template literal to print the original and modified string in a descriptive phrase.
console.log(`My day always starts with ${str} and usually ends with ${newStr}.`);

//2) Modify your code to accept user input. Query the user to enter the number of letters that will be relocated.
let numberChange = input.question("How many letters should we move from the beginning to the end? ");
newStr2 = str.slice(numberChange) + str.slice(0, numberChange);
console.log(newStr2);

//3) Add validation to your code to deal with user inputs that are longer than the word. In such cases, default to moving 3 characters. Also, the template literal should note the error.
let tooMuch = "";
if (numberChange > str.length) {
    numberChange = 3;
    tooMuch = " (Your choice exceeded the total number of letters.)";
}

newStr2 = str.slice(numberChange) + str.slice(0, numberChange);
console.log(`My day always starts with ${str} and usually ends with ${newStr2}.${tooMuch}`);
