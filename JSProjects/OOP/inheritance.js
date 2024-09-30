// inheritance

function Book(title, author, year){
    this.title = title;
    this.author = author;
    this.year = year;
}

Book.prototype.getDetail = function(){
    return `The book named ${this.title} written by: ${this.author} in ${this.year}.`
}


// Magazine constructor

function Magazine(title, author, year, month){
    Book.call(this, title, author, year);
    this.month = month;
}

// get book prototype

Magazine.prototype = Object.create(Book.prototype);

// use mag own constructor

Magazine.prototype.constructor = Magazine;

const mag = new Magazine("Book 1", "ABC", "2022", "4");
console.log(mag);
console.log(mag.getDetail());
