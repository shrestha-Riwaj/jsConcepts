//  traversing the DOM


// var items_list = document.querySelector('#items');
// console.log(items_list);

// parent Node
// console.log(items_list.parentNode);
// console.log(items_list.parentNode.parentNode);

// parent Element

// console.log(items_list.parentElement);
// console.log(items_list.parentElement.parentNode);
// console.log(items_list.parentNode.parentElement);

// child node

// console.log(items_list.childNodes);
// console.log(items_list.childNodes[1]);
// console.log(items_list.childNodes[1].innerHTML);


// children

// console.log(items_list.children);
// console.log(items_list.children[0]);
// console.log(items_list.children[2].textContent = "New");
// console.log(items_list.children[2].style.backgroundColor = 'red');

// first child, last chile, next sibiling, previous sibiling

// console.log(items_list.firstChild);
// console.log(items_list.lastChild);
// console.log(items_list.nextSibiling);
// will give us undefined in case there isn't any like in the nextSibiling cas.
// console.log(items_list.previousSibling);


// element child/sibiling

// console.log(items_list.firstElementChild);
// console.log(items_list.lastElementChild);
// console.log(items_list.nextElementSibling);
// console.log(items_list.previousElementSibling);

// console.log(items_list.previousElementSibling.style.color = "green");


// createElement

var newDiv = document.createElement('div');
console.log(newDiv);

// set class name and id name
newDiv.className = "div-class";
newDiv.id = "div-id";

// set attribute
newDiv.setAttribute('title', "Some title");

// create text node
var text = document.createTextNode("New text");

// append it

newDiv.appendChild(text);
console.log(newDiv);

// add to dom

// select where to add
// let container = document.querySelector('header .container');

// specific position like before a certain tag
// let h1 = document.querySelector('header h1');


// inserting before the h1 tag
// container.insertBefore(newDiv, h1);
// console.log(newDiv);

// newDiv.style.fontWeight = "bold";
// newDiv.style.fontSize = "30px";