class Player{

    constructor (name, hp, mp, items){
        this.name = name;
        this.hp = hp;
        this.mp = mp;
        this.items = items;
    }
}

let will = new Player();
let julius = new Player();

console.log(will);
console.log(Object.getOwnPropertyNames(will));
console.log(Object.getOwnPropertyNames(will.__proto__));