let quizForm = document.querySelector('#quizForm');
let quizTitle = document.querySelector('#quizTitle');
let question = document.querySelector('#question');
let answer1 = document.querySelector('#answer1');
let answer2 = document.querySelector('#answer2');
let answer3 = document.querySelector('#answer3');
let correcrAnswer = document.querySelector('#correctAnswer');
let button = document.querySelector('#addQuestionBtn');

let quizList = document.querySelector('#quizList');
let quizDisplay = document.querySelector('#quizDisplay');
let submit = document.querySelector('#submitQuizBtn');
let quizResult = document.querySelector('#quizResults');
let resultContent = document.querySelector('#resultContent');



quizForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    let title = quizTitle.value;
    let que = question.value;
    let ans1 = answer1.value;
    let ans2 = answer2.value;
    let ans3 = answer3.value;

    if(title === '' || que === '' || ans1 === "" || ans2 === '' ||  ans3===''){
        alert('Please fill all the field');
    }
    else{
        quizDisplay.style.display = "block";
        addingQue(title, que,ans1,ans2,ans3);
    }
})

const addingQue = (title, que, ans1, ans2, ans3)=>{
    console.log(title);
    let li = document.createElement("li");
    li.innerHTML = `
    <h2>${title}</h2>
        <p>${que}</p>
        <ul>
            <li>${ans1}</li>
            <li>${ans2}</li>
            <li>${ans3}</li>
        </ul>
    `;
    let ul = quizList.querySelector('ul');
    ul.appendChild(li);

    quizTitle.value= '';
    question.value = '';
    answer1.value = '';
    answer2.value = '';
    answer3.value = '';
}