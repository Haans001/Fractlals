function Snake(){
  this.dir = createVector(1,0);
  this.x = 0;
  this.y = 0;
  this.total = 0;
  this.tail = [];
  this.show = function(){
    
    this.update();
    fill(75, 245, 66);
    for(let i=0; i<this.total;i++){
      rect(this.tail[i].x*w, this.tail[i].y*w,w,w);
    }    
    
    rect(this.x*w, this.y*w,w,w);
  }
  
  this.update = function(){
    for(let i=0;i<this.tail.length-1;i++){
      this.tail[i] = this.tail[i+1];
    }
   
    this.tail[this.total-1] = createVector(this.x,this.y);
    
     this.x+=this.dir.x; 
     this.y+=this.dir.y;
    
     this.x = constrain(this.x, 0, w-1); 
     this.y = constrain(this.y, 0, w-1);
    
    this.isEatingHimself();
  }
  this.changeDir = function(x,y){
    this.dir.x = x;
    this.dir.y = y;
 }
 this.eat = function(food){
   
    if (this.x == food.x && this.y == food.y) {
      this.total++; 
      return true;
    } else {
      return false;
    }
 } 
  
  this.isEatingHimself = function(){
     for(let i=0;i<this.tail.length;i++){
       
      if(this.x == this.tail[i].x && this.y == this.tail[i].y){  
        this.tail = this.tail.slice(i);
        this.total = 0;
        break;
      }
    }
  }
}



function Snake(){
  this.dir = createVector(1,0);
  this.x = 0;
  this.y = 0;
  this.total = 0;
  this.tail = [];
  this.show = function(){
    
    this.update();
    fill(75, 245, 66);
    for(let i=0; i<this.total;i++){
      rect(this.tail[i].x*w, this.tail[i].y*w,w,w);
    }    
    
    rect(this.x*w, this.y*w,w,w);
  }
  
  this.update = function(){
    for(let i=0;i<this.tail.length-1;i++){
      this.tail[i] = this.tail[i+1];
    }
   
    this.tail[this.total-1] = createVector(this.x,this.y);
    
     this.x+=this.dir.x; 
     this.y+=this.dir.y;
    
     this.x = constrain(this.x, 0, w-1); 
     this.y = constrain(this.y, 0, w-1);
    
    this.isEatingHimself();
  }
  this.changeDir = function(x,y){
    this.dir.x = x;
    this.dir.y = y;
 }
 this.eat = function(food){
   
    if (this.x == food.x && this.y == food.y) {
      this.total++; 
      return true;
    } else {
      return false;
    }
 } 
  
  this.isEatingHimself = function(){
     for(let i=0;i<this.tail.length;i++){
       
      if(this.x == this.tail[i].x && this.y == this.tail[i].y){  
        this.tail = this.tail.slice(i);
        this.total = 0;
        break;
      }
    }
  }
}

function Food(){
  this.x = floor(random(w))
  this.y = floor(random(w));
  
  this.show = function(){
    fill(245, 111, 66);
      rect(this.x*w, this.y*w, w,w);
  }
}
