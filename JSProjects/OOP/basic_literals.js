// basics literals

// const s1 = "Hello";

// const s2 = new String("Blah");

// console.log(typeof s1);
// console.log(typeof s2);

// console.log(window);

// alert("a");
// console.log(navigator.languages);

// object literals
const book1 = {
    title : "Book 1",
    author: "Blank",
    year: 2013,
    getDetail: function (){
        console.log(`The book ${this.title} is written by ${this.author} in ${this.year}`);
    }
}

const book2 = {
    title : "Book 2",
    author: "Alice",
    year: 2015,
    getDetail: function (){
        console.log(`The book ${this.title} is written by ${this.author} in ${this.year}`);
    }
}


console.log(book1);
console.log(book1.year);
book1.getDetail();

console.log('------------------------------');

console.log(book2);
console.log(book2.year);
book2.getDetail();