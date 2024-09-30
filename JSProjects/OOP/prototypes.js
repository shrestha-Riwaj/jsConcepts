// prototypes

function Book(title, author, year){
    this.title = title;
    this.author = author;
    this.year = year;
}

Book.prototype.getDetail = function(){
    return `The book named ${this.title} written by: ${this.author} in ${this.year}.`
}


Book.prototype.fullYear = function (){
    const currentYear = new Date().getFullYear() - this.year;
    return `${book2.title} has been in the market for ${currentYear} years.`
};

Book.prototype.revisedYear = function (revise_year){
    this.year = revise_year;
    revised = true;
    return `${book2.title} has been revised in the year ${this.year}`
}

const book1 = new Book("Book One", "ABC", "2021");
const book2 = new Book("Book Two", "XYZ", "2018");

console.log(book2.getDetail());
console.log(book2.fullYear());
console.log(book2.revisedYear('2022'));
