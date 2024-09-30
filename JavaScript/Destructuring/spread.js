// Spread operator
// Allows and iterable to spread/expand individually inside reciever
// Split into single items and copy them

const udemy = 'udemy';
const character = [...udemy];
console.log(character);
const boys = ['john', 'david', 'peter'];
const girls = ['alice', 'anna'];

const friend = ['rock'];

const people = [...boys, ...friend, ...girls,];
console.log(people);

// reference
// const newPeople = people;
// newPeople[0] = "Hello";
// console.log(newPeople);
// console.log(people);

// copy
const newPeople = [...people];
newPeople[0] = "Hiii";
console.log(newPeople);
console.log(people);


// ES8 objects

const person = {name: 'john', job: 'animator'};

const newPerson = {...person, city:"Barcelona", job:"Developer"};

console.log(person);
console.log(newPerson);