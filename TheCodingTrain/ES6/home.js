// basic let var const

// var
// console.log(`A: ${a}`); 
// // hoisting so gives us undefined doesnt throw error
// var a=10;
// console.log(`A: ${a}`);
// {
// a=20;
// console.log(`A: ${a}`);
// }
// console.log(`A: ${a}`);
// // global scope so takes the latest values given
// var a= 55;
// // can redeclare and reinitialize it
// console.log(`A: ${a}`);


// let
// console.log(`B: ${b}`);
// b not defined so doesnt know what to log

// let b=10;
// console.log(`B: ${b}`);
// {
// let b=20;
// console.log(`B: ${b}`);
// // value limited to its scope only, can redeclare the b variable beacause its in different scope
// }
// console.log(`B: ${b}`);

// // let b=10;
// // already declared so can't redeclare but can reinitialize it:
// b =23
// console.log(`B: ${b}`);

// const
// const obj = {
//     fname:"abc",
//     age:20
// }
// console.log(obj);
// obj.age=23;
// // can change the value inside of it
// console.log(obj);
// obj.hobby = "playing";
// // can add more values in it
// console.log(obj);

// const obj = {name:"123", age:22}
// // cant redeclare it
// console.log(obj);

// obj = "hello";
// // cant reinitialize it
// console.log(obj);


// function setup(){
//     createCanvas(600, 300);
//     background(0);
//     let button = createButton("press");
//     // button.mousePressed(changeBackground);
//     button.mousePressed(()=>background(random(255)));
// }

// function changeBackground(){
//     background(random(255));
// }


// arrow function 2

// function setup(){
//     noCanvas();
//     const counter = new Counter(200,500);
//     counter.start();
//     const counter2 = new Counter(600,300);
//     counter2.start();
//     const counter3 = new Counter(300,700);
//     counter3.start();
// }

// class Counter{

//     constructor(start, wait){
//         this.count = start;
//         this.p = createP('p');

//         this.wait = wait;



        // setInterval(()=>{
        //     console.log(this);
        //     this.count++;
        //     this.p.html(this.count);
        // }, wait);
//     }

//     start(){
//         setInterval(()=>{
//             this.countIt();
//         }, this.wait)
//     }
//     countIt(){
//         this.count ++;
//         this.p.html(this.count);

//     }
// }