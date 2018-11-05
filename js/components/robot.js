import imgRobot from '../../assets/Giant_Mine_Truck.png';
const width = 1000;
const height = 700;
export default class robot{
    constructor(){
        console.log(imgRobot);
        this.pos = {x: 20, y: 60};
        this.img = p5.loadImage(imgRobot);
    }

    draw(){
        p5.image(this.img, this.pos.x, this.pos.y, width*0.18, height*0.2 );
        console.log("Just testing");
    }
    move(){
        console.log("Moving" + this.pos.x);
        var moveSpeed = (Math.random() * 2);
        if (this.pos.x >= width-200 || this.pos.y >= height - 200){
            moveSpeed = -moveSpeed;
        }else if (this.pos.x < 0 ){
            moveSpeed = -moveSpeed;
        }
        this.pos.x += moveSpeed;
        this.pos.y += moveSpeed;
    }
}