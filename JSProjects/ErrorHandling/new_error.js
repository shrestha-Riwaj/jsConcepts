try{

    const user = {
        userName: "ABC",
        age:22,
    }
    console.log(user.userName);
    console.log(user.profile.hobby);
    console.log("Doesn't run as there's error above");
}catch(error){
    console.log("Error below: ");
    console.log(error);
}
console.log("After the error handling block");