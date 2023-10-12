const classExercises = require('../ClassExercises.js');

describe("Exercises on Class: Book, Novel, and Manual assignment checks", () => {

    test("prideAnd title should be 'Pride and Prejudice'", () => {
        expect(classExercises.prideAnd.title).toEqual('Pride and Prejudice');
    });

    test("topSecret author should be 'Redacted'", () => {
        expect(classExercises.topSecret.author).toEqual('Redacted');
    });

    test("prideAnd page count should be 432", () => {
        expect(classExercises.prideAnd.numberOfPages).toBe(432);
    });

    test("topSecret check outs should be 1", () => {
        expect(classExercises.topSecret.numberOfCheckouts).toBe(1);
    });

    test("prideAnd discard should be 'No'", () => {
        expect(classExercises.prideAnd.isDiscarded).toEqual('No');
    });
});

describe("Exercises on Class: checks on class methods", () => {

    test("should add one book return using checkOut", () => {
        classExercises.prideAnd.checkOut();
        let output = classExercises.prideAnd.numberOfCheckouts;
        expect(output).toBe(38);
    });

    test("topSecret manual should be discarded", () => {
        classExercises.topSecret.bookDisposal(2023);
        expect(classExercises.topSecret.isDiscarded).toEqual('Yes');
    });
});