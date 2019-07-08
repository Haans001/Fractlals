var angle;

function setup() {
  createCanvas(400, 400);
  angle = PI/2;
  
}

function draw() {
  background(0);
  stroke(255);
  strokeWeight(2);
  translate(width/2, height);
  branch(190);
}

function branch(len){
  line(0,0,0,-len);
  translate(0, -len) 
  if(len>1){
    push();
     rotate(angle)
      branch(len*0.6);
    pop();
    push();
      rotate(-angle);
      branch(len*0.6);
    pop();
  }
  
  
  
}
