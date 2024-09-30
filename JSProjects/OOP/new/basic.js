// constructor

// function Person(userName, birthYear, city){
//     this.userName = userName;
//     this.birthYear = birthYear;
//     this.city = city;

//     this.getAge = function (){
//         let date = new Date().getFullYear();
//         let age = date - birthYear;
//         return (age);
//     }
// }

// let person1 = new Person("Blank", "2000", "Kathmandu");
// person1.getAge();

// let person2 = new Person("Gray", "2002", "Lalitpur")
// console.log(`${person2.userName} born on ${person2.birthYear} is ${person2.getAge()} years and lives in ${person2.city}`);


// Prototype

function Person(userName, birthYear, city){
    this.userName = userName;
    this.birthYear = birthYear;
    this.city = city;
}



Person.prototype.getAge = function(){
    let date = new Date().getFullYear();
    let age = date-this.birthYear;
    return age
}

Person.prototype.country = "Nepal";

function NewPerson (fname, birthYear, city){
    this.fname = fname;
    this.birthYear = birthYear;
    this.city = city;
}



NewPerson.prototype = Object.create(Person.prototype);

NewPerson.prototype.constructor = NewPerson;

let np = new NewPerson("Alice", "1999", "Bhaktapur");

console.log("Hello", np.getAge());

let person1 = new Person("Blank", "2000", "Kathmandu");

console.log(person1.getAge());

let person2 = new Person("Gray", "2002", "Lalitpur")
console.log(`${person2.userName} born on ${person2.birthYear} is ${person2.getAge()} years and lives in ${person2.city}`);


let person3 = new Person("Anna", "2001", "Pokhara");
console.log(person3.country);

class Employee{

    constructor(department, salary,year){
        this.department = department;
        this.salary =salary
    }

    workingYears(startDate){
        this.year = startDate;
        let date = new Date().getFullYear();
        let working = date - this.year;
        console.log(working);
    }
}

let emp = new Employee("Animation", "20000");
console.log(emp.workingYears("2010"));

const obj = {
    user: "ABC",
    age: "22",
    birthYear: function (age){
        this.age=age;
        let currentDate =new Date().getFullYear();
        birthDate = currentDate - String(age);
        console.log(birthDate);
    }
}

obj.birthYear();