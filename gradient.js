var colours = new Array([60,40,255], [60,255,60], [255,40,100],[50,180,230],[255,0,255],[255,130,0]);
var step = 0;
var inverse_step = 1;
var speed = 0.003;
var colour_index = new Array(4);
var gradient = new Array(4);
var grad1;
var grad2;
var backgroundstyle = document.getElementsByClassName('background')[0].style;

colour_index[2] = Math.floor(Math.random()*(colours.length-1));
colour_index[3] = Math.floor(Math.random()*(colours.length-1));

window.onload = init();
function init(){
  new_colour();
  update();
  setInterval(update,10);
}
function new_colour(){
  colour_index[0] = colour_index[2];
  colour_index[1] = colour_index[3];
  colour_index[2] = Math.floor(Math.random()*(colours.length-1));
  colour_index[3] = Math.floor(Math.random()*(colours.length-1));
  if(colour_index[0] == colour_index[2]){
    if(colour_index[2] == colours.length - 1){
      colour_index[2] = 0;
    } else{
      colour_index[2] = colour_index[0] + 1;
    }
  }
  if(colour_index[1] == colour_index[3]){
    if(colour_index[3] == colours.length - 1){
      colour_index[3] = 0;
    } else{
      colour_index[3] = colour_index[1] + 1;
    }
  }
  gradient[0] = colours[colour_index[0]];
  gradient[1] = colours[colour_index[1]];
  gradient[2] = colours[colour_index[2]];
  gradient[3] = colours[colour_index[3]];
  grad1 = colours[colour_index[0]];
  grad2 = colours[colour_index[1]];
}

function update(){
  step += speed;
  if(step >= 1){
    new_colour();
    step = 0;
  }
  inverse_step = 1 - step;
  var r1 = Math.round(inverse_step*gradient[0][0]+step*gradient[2][0]);
  var r2 = Math.round(inverse_step*gradient[1][0]+step*gradient[3][0]);
  var g1 = Math.round(inverse_step*gradient[0][1]+step*gradient[2][1]);
  var g2 = Math.round(inverse_step*gradient[1][1]+step*gradient[3][1]);
  var b1 = Math.round(inverse_step*gradient[0][2]+step*gradient[2][2]);
  var b2 = Math.round(inverse_step*gradient[1][2]+step*gradient[3][2]);
  grad1 = [r1,g1,b1];
  grad2 = [r2,g2,b2];
  var grad1_rgb = 'rgb(' + grad1[0].toString() + ',' + grad1[1].toString() + ',' + grad1[2].toString() + ')';
  var grad2_rgb = 'rgb(' + grad2[0].toString() + ',' + grad2[1].toString() + ',' + grad2[2].toString() + ')';
  //console.log(grad1_rgb);
  //console.log(grad2_rgb);
  document.getElementsByClassName('background')[0].style.backgroundImage = 'linear-gradient(135deg,' + grad1_rgb + ',' + grad2_rgb + ')';
}
