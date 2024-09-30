let selectedOption = document.querySelector("#options");
let selectedDate = document.querySelector("#date-picker");
let div = document.querySelector("#app")
let save = document.querySelector("#save-button");


let selectedValue;
let dateValue;
// save data
save.addEventListener("click", handleSave);

function handleSave(){
    selectedValue = selectedOption.value;
    dateValue = selectedDate.value;

    let newP = document.createElement('p');
    newP.textContent = selectedValue;
    newP.style.color = "red";

    div.appendChild(newP);

    document.getElementById("selected-option").textContent = selectedValue;
    document.getElementById("selected-date").textContent = dateValue;

    saveData();
}

function saveData(){
    localStorage.setItem("option",selectedValue);
    localStorage.setItem("date",dateValue);
}

// display data

function displayData(){
    const savedOption = localStorage.getItem('option');
    const savedDate = localStorage.getItem('date');

    if (savedOption) {
        document.getElementById('selected-option').textContent = `Selected Option: ${savedOption}`;
    }
    if (savedDate) {
        document.getElementById('selected-date').textContent = `Selected Date: ${savedDate}`;
    }
}

displayData();