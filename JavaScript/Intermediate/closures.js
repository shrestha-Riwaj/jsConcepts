// Create private variables using closures.
const privateVar = ()=>{
    let number = 10;
    return function (num2){
        let sum;
        sum = num2 + number;
        return sum;
    }
    
}

const func = privateVar();
console.log(func(11));
