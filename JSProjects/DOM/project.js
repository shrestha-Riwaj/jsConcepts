let form = document.getElementById('addForm');
let ul = document.querySelector("#items");

let filter = document.getElementById('filter');

filter.addEventListener('keyup', (e)=>{
    // convert to lower
    let text = e.target.value.toLowerCase();
    var items = ul.getElementsByTagName('li');

    // /conver collection to array

    Array.from(items).forEach((item)=>{
        let itemName = item.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(text) != -1){
            item.style.display="block";
        }
        else{
            item.style.display = "none";
        }
    })
});

// removeitem

ul.addEventListener('click',(e)=>{
    if(e.target.classList.contains('delete')){
        console.log(1);
        if(confirm('Are you sure?')){
            let li = e.target.parentElement;
            ul.removeChild(li);
        }
    
    }
    
});

// add item

form .addEventListener('submit', (e)=> {

    e.preventDefault();

    // Get input value

    let newItem = document.getElementById("item");


    // create new li 

    let li = document.createElement('li');
    li.className="list-group-item";

    // add text node 

    li.appendChild(document.createTextNode(newItem.value));
    ul.appendChild(li);

    // create button
    let del = document.createElement('button');
    del.className = "btn btn-danger btn-sm delete";
    del.appendChild(document.createTextNode("X"));

    li.appendChild(del);


})