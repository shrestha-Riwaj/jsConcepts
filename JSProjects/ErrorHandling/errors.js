// throw

// throw("Throwing error!!!");
// console.log("Can't run this duw to error being throen above");

// try catch

// try{
//     const message = "Good Error!!!";
//     console.log(message);
//     throw("Throwing error inside the try block");
// }catch(error){
//     console.log(`Error catched: ${error}`);
// }
// console.error("After the try and catch block");

// Error Object

try{
    const user = "Name";
    console.log(`User name is: ${user}`);
    throw new Error("Using error object");
}catch(error){
    console.log(error);
    console.log("Caughted an error");
}
console.log("After the error handling block");