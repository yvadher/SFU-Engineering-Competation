import imgRobot from '../../assets/mine.png';
const width = 1000;
const height = 700;

export default class mine{
    constructor(x,y){
        console.log(imgRobot);
        this.pos = {x: x, y: y};
        this.img = p5.loadImage(imgRobot);
        
    }

    draw(){
        p5.image(this.img, this.pos.x, this.pos.y, width*0.18, height*0.2 );
        console.log("Just testing");
    }
    
    move(){
        console.log("Moving" + this.pos.x);
        var moveSpeed = (Math.random() * 2);
        this.pos.x += moveSpeed;
        this.pos.y += moveSpeed;
    }

}