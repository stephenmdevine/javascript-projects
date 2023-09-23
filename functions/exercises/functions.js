function makeLine(size, char = "#") {
    let line = "";

    for (let i = 0; i < size; i++) {
        line += char;
    }
    
    return line;
}

function makeSquare(size, char = "#") {
    let square = "";

    for (let i = 0; i < size; i++) {
        square = square + makeLine(size, char) + "\n";
    }

    return square.slice(0, -1);
}

function makeRectangle(width, height, char = "#") {
    let rectangle = "";

    for (let i = 0; i < height; i++) {
        rectangle = rectangle + makeLine(width, char) + "\n";
    }

    return rectangle.slice(0, -1);
}

function makeDownwardStairs(height, char = "#") {
    let stairs = "";

    for (let i = 0; i < height; i++) {
        stairs = stairs + makeLine(i + 1, char) + "\n";
    }

    return stairs.slice(0, -1);
}

function makeSpaceLine(numSpaces, numChars, char = "#") {
    let line = "";

    for (let i = 0; i < numSpaces; i++) {
        line += " ";
    }
    
    for (let i = 0; i < numChars; i++) {
        line += char;
    }

    for (let i = 0; i < numSpaces; i++) {
        line += " ";
    }

    return line;
}

function makeIsoscelesTriangle(height, char = "#") {
    let triangle = "";

    for (let i = 0; i < height; i++) {
        triangle = triangle + makeSpaceLine(height - (i + 1), (2 * i) + 1, char) + "\n";
    }

    return triangle.slice(0, -1);
}

function reverse(str) {
    let lettersArray = str.split('');
    let reversedLettersArray = lettersArray.reverse();
    return reversedLettersArray.join('');
 }

 function makeDiamond(height, char = "#") {
    let diamond = "";
    diamond += makeIsoscelesTriangle(height, char) + "\n";
    diamond += reverse(makeIsoscelesTriangle(height, char));
    return diamond;
 }

// console.log(makeLine(5, "d"));
// console.log(makeSquare(5, "d"));
// console.log(makeRectangle(5, 3, "d"));
// console.log(makeDownwardStairs(5, "d"));
// console.log(makeSpaceLine(2, 5, "d"));
// console.log(makeIsoscelesTriangle(5, "d"));
// console.log(makeDiamond(3, "d"));