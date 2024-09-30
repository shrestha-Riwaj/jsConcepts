function Bicycle(cadence, speed, gear, tirePressure){
    this.cadence = cadence;
    this.speed = speed;
    this.gear = gear;
    this.tirepressure = tirePressure;
    this.inflateTires = function(){
        this.tirepressure +=3
    }
}

let bicycle1 = new Bicycle(50, 20, 4, 25);
bicycle1.inflateTires();
console.log(bicycle1);
bicycle1.inflateTires();
console.log(bicycle1);

let bicycle2 = new Bicycle(50, 20, 4, 5);
bicycle2.inflateTires();
console.log(bicycle2);