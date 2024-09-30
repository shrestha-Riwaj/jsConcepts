// constructor

function Book(title, author, year){
    this.title = title;
    this.author = author;
    this.year = year;
    this.getDetail = function (){
        return `The book named ${this.title} written by: ${this.author} in ${this.year}.`
    }
}

const book1 = new Book("Book One", "ABC", "2021");
const book2 = new Book("Book Two", "XYZ", "2023");
console.log(book1);
console.log(book1);
console.log(book1.getDetail());
console.log(`Book 1 author: ${book1.author}`);
console.log(`Book 2 title: ${book2.title}`);