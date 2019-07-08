var a,b,c, gamePoint;

function setup() {
  createCanvas(800, 800); 
  a = createVector(0,height);
  b = createVector(width/2,0);
  c = createVector(height,height);
  background(0);
  strokeWeight(4);
  gamePoint = createVector(random(width), random(height));
  

}

function draw() {
  for(let i=0;i<100;i++){
  point(gamePoint.x, gamePoint.y);
  let rand = floor(random(3));
  
  switch(rand) {
    case 0 : {
      gamePoint.x = lerp(gamePoint.x, a.x, 0.5);
      gamePoint.y = lerp(gamePoint.y, a.y, 0.5);
      stroke(66, 245, 135);
      break;
    }
      
      case 1 : {
      gamePoint.x = lerp(gamePoint.x, b.x, 0.5);
      gamePoint.y = lerp(gamePoint.y, b.y, 0.5);
      stroke(110, 55, 219);
      break;
    }
      
      case 2 : {
      gamePoint.x = lerp(gamePoint.x, c.x, -0.4);
      gamePoint.y = lerp(gamePoint.y, c.y, 0.5);
      stroke(209, 227, 16);
      break;
    }
  }
  }
  
}
