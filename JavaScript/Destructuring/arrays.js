// faster easier way to access/unpack variables from arrays, objects

const fruits = [
    'Apple', "Mango", 'Guava',
];

const people = [
    'Jack', "Daniel", "David", "Villa",
];

console.log(fruits);

fruits[0] = "Banana";

console.log(fruits);

const [first, , third,fourth,fifth] = people;
console.log(first, third, fourth, fifth);

let user1 = 'David';
let user2 = "Jack";

[user2, user1] = [user1, user2];
console.log(user1, user2);