// Using a object first

const player = {
    userName: "Will",
    hp: "1000",
    mp: "0",
    items: ["Sword"],
}

let will = player;
let julius = player;

console.log(`Player Will: `, will);
console.log(`Player Julius: `, julius);

julius.userName = "Julius";
julius.hp = "1000";
julius.mp = "1000";
julius.items = ["Wand"];

console.log("After changing value using the julius variable: ");
console.log("Will change any other variable that we have set to that object. ");

console.log(`Player Will: `, will);
console.log(`Player Julius: `, julius);