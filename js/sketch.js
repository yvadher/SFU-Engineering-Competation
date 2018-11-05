import p5 from 'p5';
import 'p5/lib/addons/p5.sound';
import 'p5/lib/addons/p5.dom';
import * as constants from './constants';
import { width } from './constants';

//asdfhl

// Sketch scope
const sketch = (p5) => {

  // Variables scoped within p5
  const canvasWidth = constants.width;
  const canvasHeight = constants.height;
  window.trackSize =50;
  // make library globally available
  window.p5 = p5;
  window.Trains = [];
  window.Tracks = [];
  createTrack();
  createTrain();
  // Setup function
  p5.setup = () => {
    let canvas = p5.createCanvas(canvasWidth, canvasHeight);
    canvas.parent('canvas');
    //p5.frameRate(10);
    // Your stuff goes in here
     
  }

  // Draw function
  p5.draw = () => {


     
  }
}


export default sketch;
