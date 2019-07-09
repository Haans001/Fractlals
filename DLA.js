function Walker(x,y,stuck = false) {
  
  this.pos = createVector(x,y);
  this.stuck = stuck;
  
  this.update = function(){
    
    if(stuck) return;
    
    let vel = p5.Vector.random2D();
    this.pos.add(vel);
  }
  
  this.show = function(){
    ellipse(this.pos.x,this.pos.y, r);
  }
  
  this.checkForStuck = function(others){
    
    for(let i=0;i< others.length; i++){
      let d = dist(this.pos.x, this.pos.y, others[i].pos.x, others[i].pos.y);
      
      if(d < r){
        this.stuck = true;
        return true;
      }
    }
    return false;
  }
}




var tree = [];
var walkers = [];
var r = 10;

function setup() {
  createCanvas(500, 500);
  tree[0] = new Walker(width/2,height/2, true);
  frameRate(60);
  
  for(let i=0;i<1000;i++){
    walkers.push(new Walker(random(width), random(height)));
  }
}

function draw() {
  
  background(0);
  noStroke()
  fill(245, 66, 66)
  
  for(let i=0;i<tree.length;i++){
    tree[i].show();
  }
  
  fill(255);
  
  for(let i=0;i<walkers.length;i++){
    walkers[i].show();
  }
  
  for(let a=0;a<10;a++){
  for(let i=0;i<walkers.length;i++){
    
      walkers[i].update();
    if(walkers[i].checkForStuck(tree)){
      tree.push(walkers[i]);
      walkers.splice(i,1);
    } 
    
  }
  }
}

// fucntion
