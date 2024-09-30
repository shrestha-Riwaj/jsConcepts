// document.addEventListener('DOMContentLoaded', function)

let form = document.querySelector("#addForm");
let age = document.querySelector('#age');
let sum = document.querySelector("#sum")
let terms = document.querySelector('#select')
let date = document.querySelector('#date');

let newDiv = document.querySelector('#amount');

form.addEventListener('submit', (e)=>{
    
    e.preventDefault();
    console.log("1");
    let userAge = age.value;
    let amt = sum.value;
    let select = terms.value;
    let dateValue = date.value;
    let total;
    let today = new Date().getFullYear();
    let ageUser = today-dateValue;
    console.log(dateValue);
    console.log(ageUser);
    if(isNaN(userAge) || isNaN(amt) || isNaN(select)){
       alert("Please enter a value");
    }
    else if (userAge > 10 && select >3){
        total = amt*1.01;
    }
    else{
        total = amt
    }
    let newText = document.createElement("p")
    newText.textContent = total;

    newDiv.appendChild(newText);
    form.reset();

});