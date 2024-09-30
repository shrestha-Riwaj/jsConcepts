let form = document.querySelector('#addForm');
let ul = document.querySelector('#items');

let filterItem = document. querySelector('#filter');

filterItem.addEventListener('keyup', (e)=>{

    let text = filterItem.value.toLowerCase();
    let items = ul.getElementsByTagName('li');

    Array.from(items).forEach((item)=>{
        let itemName = item.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(text) != -1){
            item.style.display = 'block';
        }
        else{
            item.style.display = 'none';
        }
    })

});

form.addEventListener('submit', (e)=>{


    e.preventDefault();
    let inputValue = document.querySelector('#item');
    let storeValue = document.createTextNode(inputValue.value);

    let li = document.createElement('li');
    li.className = "list-group-item";

    let del = document.createElement('button');
    del.className = "btn btn-danger btn-sm delete";

    del.textContent = "X";
    

    li.appendChild(storeValue);
    li.appendChild(del);
    ul.appendChild(li);



});

ul.addEventListener('click', (e)=>{
    // console.log(e.target.classList);
    if(e.target.classList.contains('delete')){
        let li = e.target.parentElement;
        ul.removeChild(li);
    }
})