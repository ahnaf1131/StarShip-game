let devH=window.innerHeight
let devW=window.innerWidth






let bubbles=[]


function setup(){
    createCanvas(devW,devH)
    
    noStroke()


    for(let i=0;i<20;i++){
        let ranX=random(0,devW)
        let ranY=random(0,devH)
        let ranR=random(5,10)
        let b=new Star(ranX,ranY,ranR)
        bubbles.push(b)
        
    }

 
    
}
function draw(){
    background(20,100,200)
    for(let i=0;i<bubbles.length;i++){
        bubbles[i].moveDown()
        bubbles[i].show()
        if(bubbles[i].y>devH){
            bubbles.splice(i,1)
            let ranX=random(0,devW)
            let ranY=0
            let ranR=random(5,10)
            let b=new Star(ranX,ranY,ranR)
            bubbles.push(b)
        }    
    }
    

    
}

class Star{
    constructor(x,y,r){
    this.x=x
    this.y=y
    this.r=r

    }
    moveDown(){
        this.y = this.y +.5
        
    }
    show() {
        noStroke();
        fill("white");
        ellipse(this.x, this.y, this.r);
      }
}
