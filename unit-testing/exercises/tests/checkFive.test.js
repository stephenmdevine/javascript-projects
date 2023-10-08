const checkFive = require('../checkFive.js');

describe("checkFive", function(){

    test("should return that the number is less than 5", function() {
        let output = checkFive(2);
        expect(output).toEqual("2 is less than 5.");
    });

    test("should return that the number is greater than 5", function() {
        let output = checkFive(7);
        expect(output).toEqual("7 is greater than 5.");
    });

    test("should return that the number is equal to 5", function() {
        let output = checkFive(5);
        expect(output).toEqual("5 is equal to 5.");
    });
});