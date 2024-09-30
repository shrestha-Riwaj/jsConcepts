// faster easier way to access/unpack variables from arrays, objects


const person = {
    first: 'David',
    last: 'Villa',
    city: "Barcelona",
    sibilings:{
        brother: "dunno"
    },
};
// const fname = person.first;
// const lname = person.last;
// const brother = person.sibilings.brother;

// console.log(fname, lname, brother);


const last = "new blah";
const {first, last:lname, city, country, sibilings:{brother:who}} = person;
console.log(first, city, last, country, lname, who);

// when using alias like last:lname, then we can't use last to get the object value.

function printPerson({first, city, sibilings:{brother}}){
    // const {first, city} = whoo
    // can use by passing a parameter like above
    console.log(first, city, brother);
}

printPerson(person);