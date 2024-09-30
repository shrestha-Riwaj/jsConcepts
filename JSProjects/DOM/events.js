// let button = document.querySelector("#button");
// button.addEventListener('click', buttonClick);
// let output = document.querySelector('#output');
// function buttonClick(e){

//     // console.log(button);
//     document.querySelector('#header-title').textContent = "New";

//     console.log(e);
//     console.log(e.target);
//     console.log(e.target.id);
//     console.log(e.target.className);
//     console.log(e.target.classList);
//     console.log(e);
//     output.innerHTML = "<h3>"+e.target.id+"</h3>"
//     console.log(e.type);
//     console.log(e.clientX);
//     console.log(e.clientY);
//     console.log(e.offsetX);
//     console.log(e.offsetY);
//     console.log("a");
//     console.log(e.altKey);
//     console.log(e.ctrlKey);
//     console.log(e.shiftKey);

// }


// mouse

// let button1 = document.querySelector("#button");
// button1.addEventListener('click', runEvent);
// button1.addEventListener('dblclick', runEvent);
// button1.addEventListener('mousedown', runEvent);
// button1.addEventListener('mouseup', runEvent);

// let box = document.getElementById("box");
// box.addEventListener("mouseenter", runEvent);
// box.addEventListener("mouseleave", runEvent);
// box.addEventListener("mouseover", runEvent);
// box.addEventListener("mouseout", runEvent);



// box.addEventListener("mousemove", runEvent);
// button.addEventListener('click',runEvent);

// function positionEvent(e){
//     let posX = e.offsetX;
//     console.log(posX);
//     return posX
// }

// function runEvent (e){

//     // console.log(e.type);
//     // output.textContent = "Mouse Position: " + e.offsetX;
    
//     // let posX = button.e.offsetX;
//     box.style.backgroundColor = "rgba("+e.offsetX+","+e.offsetY+",40)";
// }



// Keyboard

// let input  = document.querySelector('input[type="text"]');
// let select = document.querySelector('select');
// select.addEventListener('change', (e)=>{
//     console.log(e.target.value);
// });

let form1 = document.querySelector('form');
form1.addEventListener('submit', (e)=>{
    e.preventDefault();
    document.body.style.background = "green";
})


// var ulist = document.getElementsByTagName('ul');
// var li = document.createElement('li');
let out = document.getElementById("output");

// input.addEventListener('keydown', keyEvent);
// input.addEventListener('keyup', keyEvent);
// input.addEventListener('keypress', keyEvent);

// input.addEventListener('focus', keyEvent);
// input.addEventListener('blur', keyEvent);

// input.addEventListener('cut', keyEvent);
// input.addEventListener('paste', keyEvent);


// input.addEventListener('input', keyEvent);
// input.addEventListener('paste', keyEvent);

function keyEvent(e){
    console.log(e.type);
    console.log(e.target.value);
    console.log("Value: " , input.value);
    // li.textContent = input.value;
    out.innerText = input.value;
    // document.body.style.display = "none";
    
}

