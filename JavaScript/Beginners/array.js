// //  Array methods in JS
// let students= [

//     {
//         username: "John", pswd:"12345", gender:"Male", marks:[10,20,30,40],
//         username: "Steve", pswd:"12345", gender:"Male", marks:[10,30,30,10],
//         username: "Mike", pswd:"12345", gender:"Male", marks:[10,10,30,20],
//         username: "Merry", pswd:"12345", gender:"Female", marks:[40,30,30,40],
//     }
// ];

// let names = ['John', 'Steve', 'Mike', "Merry"];
// console.log(names);

// // Slice () - extract the part of an array without changing the original array.

// let slicedArray = names.slice(2);
// console.log('sliced method');
// console.log(slicedArray);
// console.log(names.slice(1,3));
// console.log('Negative index in slice methods');
// console.log(names.slice(-1));
// console.log(names.slice(-3));
// console.log(names.slice(-1,2));
// console.log(names.slice(0,-1));
// console.log(names.slice(0,-2));
// console.log(names);

// names.push("Gray");
// // Creating Shallow Copy of an Array

// console.log("Shallow Copy");
// let shallowCopy = names.slice();

// console.log(shallowCopy);
// shallowCopy.push("Anna");
// console.log(names);
// console.log(shallowCopy);

// // Creating Shallow Copy of an Array using Spread Operator

// console.log("Shallow Copy Using Spread Operator");
// let shallowCopy2 = [...names];
// console.log(shallowCopy2);
// console.log(names);

// // Slice () - extract the part of an array which changes the original array as well. 

// console.log("Spliced Array");
// let splicedArray = names.splice(2);
// console.log(splicedArray);
// console.log(names);

// // deleting last element from the array using splice method
// console.log(names.splice(-1));
// console.log(names);

// // Reverse() - reverse the order of an element in the array, this too makes changes in the original array as well.

// console.log("Using Reverse");
// let vowels = ['a', 'e', 'i', 'o', 'u'];
// console.log(vowels);
// console.log(vowels.reverse());
// console.log(vowels);

// // Concat() - joins two array into a single array

// let arr1 = [1, 2, 3];
// let arr2 = [4, 5];
// let arr = arr1.concat(arr2);
// console.log(arr);

// let newArr = [...arr1, 10, ...arr2];
// console.log(newArr);

// join - joins the elements into a string using a separator thats been passed.
// if no separator is passed , is given by default.
// default separator = ,
console.log("Joining Array");
let str = ["Learning", "arrays", "in", "javascript"];
let numbers = [7, 12, 20, 200];

let joinedString = str.join(' ');
let joinedNum = numbers.join();
// the join method will first convert this numbers into a string and then join them.
console.log(joinedString);
console.log(joinedNum);