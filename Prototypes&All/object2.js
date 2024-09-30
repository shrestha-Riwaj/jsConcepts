function createNewEmployee(fname, age, designation,){
    const emp3 = {};
    emp3.fname = fname;
    emp3.age = age;
    emp3.designation = designation;
    return emp3;

}

let emp = new createNewEmployee("a", 1, "B");
console.log(emp);

function CreateNewEmployee1(fname, age, designation,){
    
    this.fname = fname;
    this.age = age;
    this.designation = designation;
    

}

let emp4 =  CreateNewEmployee1("Someone", 0, "Marketing");
console.log(`Using constructor to: ${emp4} ` , emp4);