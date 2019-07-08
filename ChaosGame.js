
/// TRIANGLE
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


//OTHER PATTERN
var points = [];
var colors = [];
var p;

var previousVertex;

function setup() {
  createCanvas(800, 800);
  background(0);
  stroke(255);
  strokeWeight(1);
  
  polygon(width/2,height/2, 300,7)
  p = createVector(random(width), random(height));
  
  for(let i=0;i<points.length;i++){
    colors.push({
      r: floor(random(255)),
      g: floor(random(255)),
      b: floor(random(255)),          
     })
  };
  
  
  
  
  
}

function draw() {
 
  for(let i=0;i<100;i++){
  point(p.x,p.y);
  
  let rand = floor(random(points.length));
  if(rand === previousVertex) continue;
  previousVertex = rand;
  p.x = lerp(p.x, points[rand].x, 0.5);
  p.y = lerp(p.y, points[rand].y, 0.5);
  stroke(colors[rand].r,colors[rand].g,colors[rand].b);
  
}

}

function polygon(x, y, radius, npoints) {
  let angle = TWO_PI / npoints;
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius;
    let sy = y + sin(a) * radius;
    points.push(createVector(sx,sy))
    point(sx, sy);
    
    
  }
}
