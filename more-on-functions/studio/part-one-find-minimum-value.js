//1) Create a function with an array of numbers as its parameter. The function should iterate through the array and return the minimum value from the array. Hint: Use what you know about if statements to identify and store the smallest value within the array.
function lowestNumberPop(numArray) {
    let low = numArray[0];
    for (let i = 0; i < numArray.length; i++) {
        if (numArray[i] < low) {
            low = numArray[i];
        }
    }
    numArray.splice(numArray.indexOf(low), 1);
    return low;
}

function resortedArray(numArray) {
    let newArray = [];
    while (numArray.length > 0) {
        newArray.push(lowestNumberPop(numArray));
    }
    return newArray;
}

//Sample arrays for testing:
let nums1 = [5, 10, 2, 42];
let nums2 = [-2, 0, -10, -44, 5, 3, 0, 3];
let nums3 = [200, 5, 4, 10, 8, 5, -3.3, 4.4, 0];

//Using one of the test arrays as the argument, call your function inside the console.log statement below.

console.log(resortedArray(nums1));