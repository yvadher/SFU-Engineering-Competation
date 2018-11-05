import p5 from 'p5';
import 'p5/lib/addons/p5.sound';
import 'p5/lib/addons/p5.dom';
import * as constants from './constants';
import { width } from './constants';
import swal from 'sweetalert2/dist/sweetalert2.js'

import background from './components/background';

import robot from './components/robot';
import mine from './components/mine';

import 'sweetalert2/src/sweetalert2.scss';

//asdfhl

// Sketch scope
const sketch = (p5) => {

  // Variables scoped within p5
  const canvasWidth = constants.width;
  const canvasHeight = constants.height;
  window.trackSize =50;
  // make library globally available
  window.p5 = p5;
  // Setup function

  var robotObj = new robot();
  var bg = new background();
  var mineObj = new mine(50,80);
  var mineObj2 = new mine(440,543);
  var mineObj3 = new mine(440,100);
  p5.setup = () => {
    let canvas = p5.createCanvas(canvasWidth, canvasHeight);
    canvas.parent('canvas');
    //p5.frameRate(10);
    // Your stuff goes in here
    window.setTimeout(function(){
      swal({
        title: '<strong>Mine <u>Sim</u></strong>',
        type: 'info',
        html:
          'Mine status is <b>Normal</b>', 
        showCloseButton: true,
        showCancelButton: true,
        focusConfirm: false,
        confirmButtonText:
          '<i class="fa fa-thumbs-up"></i> Great!',
        confirmButtonAriaLabel: 'Thumbs up, great!'
      })
    }, 1000);
    bg.show();
    robotObj.draw();
  }

  // Draw function
  p5.draw = () => {
    bg.show();
    mineObj.draw();
    mineObj2.draw();
    mineObj3.draw();
    robotObj.move();
    robotObj.draw();
  }
}


export default sketch;
