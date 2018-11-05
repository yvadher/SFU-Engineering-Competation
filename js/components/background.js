var backGroundColor = "#98FB98";
const width = 1000;
const height = 700;
export default class background {
    constructor(){
        this.pos = { x: 0, y: 0 };
    }

    show(){
        p5.noStroke();
        p5.fill(backGroundColor);
        p5.rect(this.pos.x, this.pos.y,  width , height);
        console.log("Turning color");
    }
    
}