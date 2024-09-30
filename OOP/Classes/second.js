// Using function to remove the error occured while using object

const player = (name, hp, mp, items)=>{
    name;
    hp;
    mp;
    items;

    return {name, hp, mp, items}
}

let will = player("Will", "1000", "0", ["sword"]);
let julius = player("Julius", "1000", "1000", ["wand",]);

console.log(`Player Will: `, will);
console.log(`Player Julius: `, julius);

console.log("After changing value using will variable: ");
console.log("Won't make changes in our another variable.");

will.name = "Will";
will.hp = "1000";
will.mp = "0";
will.items = ["sword", "bag"];

console.log(`Player Will: `, will);
console.log(`Player Julius: `, julius);