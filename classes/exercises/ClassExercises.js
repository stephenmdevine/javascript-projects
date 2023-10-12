// Define your Book class here:
class Book {
    constructor (title, author, copyrightDate, isbn, numberOfPages, numberOfCheckouts, isDiscarded) {
        this.title = title;
        this.author = author;
        this.copyrightDate = copyrightDate;
        this.isbn = isbn;
        this.numberOfPages = numberOfPages;
        this.numberOfCheckouts = numberOfCheckouts;
        this.isDiscarded = isDiscarded;
     }

     checkOut(num = 1) {
        this.numberOfCheckouts += num;
     }
}

// Define your Manual and Novel classes here:
class Manual extends Book {
    constructor (title, author, copyrightDate, isbn, numberOfPages, numberOfCheckouts, isDiscarded) {
        super(title, author, copyrightDate, isbn, numberOfPages, numberOfCheckouts, isDiscarded);
        // properties
     }

     bookDisposal(year) {
        if (this.copyrightDate + 5 < year) {
            this.isDiscarded = 'Yes';
        }
     }
}

class Novel extends Book {
    constructor (title, author, copyrightDate, isbn, numberOfPages, numberOfCheckouts, isDiscarded) {
        super(title, author, copyrightDate, isbn, numberOfPages, numberOfCheckouts, isDiscarded);
        // properties
     }

     bookDisposal() {
        if (this.numberOfCheckouts > 100) {
            this.isDiscarded = 'Yes';
        }
     }
}

// Declare the objects for exercises 2 and 3 here:
let prideAnd = new Novel('Pride and Prejudice', 'Jane Austen', 1813, '1111111111111', 432, 32, 'No');
let topSecret = new Manual('Top Secret Shuttle Building Manual', 'Redacted', 2013, '0000000000000', 1147, 1, 'No');

// Code exercises 4 & 5 here:
topSecret.bookDisposal(2023);
prideAnd.checkOut(5);

// Module exports
module.exports = {
    Book: Book,
    Manual: Manual,
    Novel: Novel,
    prideAnd: prideAnd,
    topSecret: topSecret
}