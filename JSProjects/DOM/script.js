// // Examine the document

// console.dir(document);
// console.log(document);
// console.log(document.domain);
// console.log(document.url);
// console.log(document.head);
// console.log(document.title);
// console.log(document.body);
// console.log(document.forms[0]);
// console.log(document.images);
// console.log(document.links);
// console.log(document.h2);
// console.log(document.all);
// console.log(document.all[12]);
// console.log(document.doctype);
// // document.h2.textContent = "New Item";
// // console.log(document.h2);
// document.all[12].textContent = "Items Changed";
// console.log(document.all[12]);

// Querying the element

// using id

var header = document.getElementById("header-title");
console.log(header);
header.textContent = "New";
header.innerText = "New Again";

header.innerHTML = "<h3>New Again Again</h3";

header.style.borderBottom = "solid 4px black";

// using classname

var items = document.getElementsByClassName('list-group-item');

items[2].textContent = "Change Item";
items[2].style.backgroundColor = "yellow";

// Errors
// items.style.backgroundColor = "red";

for(var i=0; i<items.length; i++){
    items[i].style.backgroundColor = "lightGray";
}

// same for class name


// querySelector

var input = document.querySelector('input');
input.value = "Hello Value!!!";

// although we have multiple input tag it selects the first one, to select the one we want we can do this:

var submit = document.querySelector("input[type='submit']");
submit.value = "SEND";

var li = document.querySelector('.list-group-item');
li.style.color = "blue";
// changes the color of the 1st class name.


var last = document.querySelector('.list-group-item:last-child');
last.style.color = "orange";

var second = document.querySelector('.list-group-item:nth-child(2)');
second.style.color = "red";

// querySelectorAll

var titles = document.querySelectorAll('.title');

titles[0].textContent = "New Title";

// var list = document.querySelectorAll('li');
var odd = document.querySelectorAll('li:nth-child(odd');
var even = document.querySelectorAll('li:nth-child(even');


for (let i = 0; i < odd.length; i++){
    if(odd){
        odd[i].style.backgroundColor = "green";
    }
}

for (let i = 0; i < even.length; i++){
            even[i].style.backgroundColor = "black";
    
}