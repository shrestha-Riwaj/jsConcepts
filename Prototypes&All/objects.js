// normal obj creations

const emp1 = {
    fname:"Hello",
    age:100,
    address:{
        street:"Dunno",
        city:"Manchester"
    },
    designation: "Developer"
};
console.log(`Displaying emp1: ${emp1.address.city}`);
// creating using .

const emp2 = {};

emp2.fname = "World";
emp2.age = 1000;
emp2.designation = "Animator";

console.log(`Displaying emp1: ${emp2}`);

// creating using functions

function createNewEmployee(fname, age, designation,){
    const emp3 = {};
    emp3.fname = fname;
    emp3.age = age;
    emp3.designation = designation;
    return emp3;

}

let emp3 = createNewEmployee("Someone", 0, "Marketing");
console.log(`Created using functions ${emp3}`);
console.log(emp3);

// short way for the fucntion -> using a constructor
// create constructiore using new keyword

function CreateNewEmployee1(fname, age, designation,){
    
    this.fname = fname;
    this.age = age;
    this.designation = designation;
    

}

let emp4 = new CreateNewEmployee1("Someone", 0, "Marketing");
console.log(`Using constructor to: ${emp4} ` , emp4);