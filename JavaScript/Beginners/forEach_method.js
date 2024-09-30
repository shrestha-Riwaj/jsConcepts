// forEach() -  higher order function in JavaScript which can be used to loop over an array in JavaScript.
// higher order function - when a function takes an function as an argument.

let names = ['John', 'Steve', 'Mike', "Merry"];
console.log(names);

// Using for of loop
// console.log("Using for of loop");
// for(let user of names){
//     if (user === "Mike"){
        
//         continue;
//     }
//     console.log(`Student name is ${user}`);
// }


// for each iteration, forEach method will pass the value for element, index, and arr parameter
// forEach method will execute the callback function for each iteration.
// from the 3 parameter, the last 2 parameter (index, arr) are optional.
// we can't use continue or break statement inside the forEach method.
// console.log("Using forEach loop");
// names.forEach(function (elem, index, arr){
//     console.log(`At index ${index}, Student name is: ${elem} from [${arr}]`);
// });