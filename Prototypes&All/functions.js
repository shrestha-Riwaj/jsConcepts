// Method #1
function foo(){
    console.log("Method 1");
    console.log(this);
    // refers to the global object
}
foo();
// Method #2
const obj = {user:"This is user 1"};

obj.foo = function foo(){
    console.log("Method 2");
    console.log(this);
    // refers to the object it is associated with
}

obj.foo();

// Method #3

function foo1(){
    console.log("Method 1");
    console.log(this);
    // the new keyword will create an object thus will refer to the object
}
new foo1();