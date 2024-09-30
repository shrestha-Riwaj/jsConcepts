let students= [
        {
            username: "John", pswd:"12345", gender:"Male", marks:[10,20,30,40, 50],
            username: "Steve", pswd:"12345", gender:"Male", marks:[10,30,30,10, 50],
            username: "Mike", pswd:"12345", gender:"Male", marks:[10,10,30,20, 50],
            username: "Merry", pswd:"12345", gender:"Female", marks:[40,30,30,40, 50],
        }
];
console.log(students[0].marks);
let maxMarks = 250;

function getTotalMarks(marks){
    let total = 0;
    for(let mark of marks){
        total += mark;
        console.log(total);
    }
    return total;
}
let tbody = document.querySelector('tbody');
function displayStudents(student){
    let totalMarks;

    for(let i=0;i<students.length;i++){
        totalMarks = getTotalMarks(student[i].marks);
    }
    
    let percentage = ((totalMarks/maxMarks) * 100).toFixed(0);
    let isPass = percentage >= 45?"pass":"fail";
    
    student.forEach((stu)=>{
        let details = `
        <tr>
            <td>${stu.username}</td>
            <td>${stu.gender}</td>
            <td>${totalMarks} </td>
            <td>${percentage}</td>
            <td>${isPass}</td>
        </tr>`;
        tbody.insertAdjacentHTML('beforeend', details);
    })
    
    
}

displayStudents(students);