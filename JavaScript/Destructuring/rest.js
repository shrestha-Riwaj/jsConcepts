// Rest operator
// gather/collects items
// destructuring, functions
// placement important, careful with the same name
// rest when declare function, spread when invove the function

// arrays
const fruits = [
    'Apple', "Mango", 'Guava',
];

const [item1, item2, ...rest] = fruits;
console.log(item1, rest);


// spread
const person = {
    first: 'David',
    last: 'Villa',
    city: "Barcelona",
};
const {first} = person;
console.log(first);

// functions

