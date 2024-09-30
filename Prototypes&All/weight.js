let output = document.getElementById('output');
output.style.visibility="hidden";

let lbs = document.querySelector('#lbsInput');
lbs.addEventListener('input', (e)=>{
    output.style.visibility="visible";
    console.log(e);
    let pounds = e.target.value;
    // console.log(pounds);
    let gram = document.querySelector('#gramsOutput');
    gram.innerHTML = pounds/0.0022046;
    let kg = document.querySelector('#kgOutput');
    kg.innerHTML = pounds/2.2046;
    let ounce = document.querySelector('#ozOutput');
    ounce.innerHTML = pounds*16;
   });