let taskInput = document.querySelector('#taskInput');
let addTaskBtn = document.querySelector('#addTaskBtn');

addTaskBtn.addEventListener('click', (e)=>{

    e.preventDefault();
    console.log(taskInput.value);
    if(taskInput.value == ""){
        alert("Field can't be empty");
    }
    let ul = document.querySelector('#taskList');

    let li = document.createElement('li');
    li.innerHTML = taskInput.value;

    let check = document.createElement('input');
    check.type = "checkbox";

    check.className = "checkTask"

    let del = document.createElement('button');
    del.className = "deleteBtn border-2 vorder-black p-1 m-2";
    del.innerHTML = "Delete";

    li.appendChild(check);
    li.appendChild(del);
    ul.appendChild(li);


    check.addEventListener('change', ()=>{
        if(check.checked){
            li.style.textDecoration = 'line-through';
        }
    })
    taskInput.value = '';

    del.addEventListener('click', ()=>{
        ul.removeChild(li);

    })
});