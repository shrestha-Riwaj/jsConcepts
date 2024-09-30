
let userInput = document.querySelector("#add-task");
let userList = document.querySelector(".todo-list");
let priorityList = document.querySelector("#priority")

const addTask = ()=>{

    if(userInput.value === ""){
        alert("Add a task")
    }

    else{

        let checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.className = 'task-checkbox';

        let li = document.createElement('li');
        li.className = "items";

        let taskText = document.createTextNode(userInput.value);
        // li.innerHTML = userInput.value;

        let button = document.createElement('button');
        button.className = "delete-btn";
        button.textContent = "Delete";

        let select = document.createElement('select');
        select.className="select-priority";

        let low = document.createElement('option');
        low.value= "low";
        low.text="Low"
        select.appendChild(low);

        let med = document.createElement('option');
        med.value= "medium";
        med.text="Medium";
        select.appendChild(med);

        let high = document.createElement('option');
        high.value= "high";
        high.text="High"
        select.appendChild(high);

        // select.value=;

        let dueDate = document.createElement('input');
        dueDate.type = 'date';
        dueDate.className = "due-date";

        
        
        // select.value=priorityList.value;

        li.appendChild(checkbox);
        li.appendChild(taskText);
        li.appendChild(button);
        li.appendChild(select);
        li.appendChild(dueDate);
      
        userList.appendChild(li);
    }

    userInput.value = "";
    saveData();
}


userList.addEventListener("click", (e)=>{
    if(e.target.tagName === "BUTTON"){
        e.target.parentElement.remove();
        saveData();
    }
    else if(e.target.type === "checkbox"){
        e.target.parentElement.classList.toggle("checked");
        saveData();
    }
})

const saveData = ()=>{
    console.log(userList.innerHTML);
    localStorage.setItem("data", userList.innerHTML);
}

const displayTask = () => {
    userList.innerHTML = localStorage.getItem("data");
}

displayTask();