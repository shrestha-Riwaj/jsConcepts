

function setup(){

    createCanvas(600,300);
    // noCanvas();
    // background(255,0,255);
    const counter = new Counter(200, 500);
    // counter.start();
    let button = createButton("Click Me");
    button.mousePressed(counter.stop());

}

class Counter{
    constructor(start, wait){
        this.count = start;
        this.p = createP('p');
        this.wait=wait;
        // this.p =createP('p');
    }

    start(){
        setInterval(()=>{
            this.incCount();
        }, this.wait)
    }

    incCount(){
        this.count ++;
        this.p.html(this.count);
    }

    stop(){
        this.count = start;
        this.p.html("Stoped the count");
    }
}

