let x
let y
function setup() {
  createCanvas(400, 400);
  strokeWeight(3);
  stroke(66, 245, 135);
  background(255);
  
  x=0;
  y=0;
}

function draw() {
  for(let i=0;i<100;i++){
      let nextX, nextY;
        let r = random();
         if (r < 0.01) {
            nextX =  0;
            nextY =  0.16 * y;
        } else if (r < 0.86) {
            nextX =  0.85 * x + 0.04 * y;
            nextY = -0.04 * x + 0.85 * y + 1.6;
        } else if (r < 0.93) {
            nextX =  0.20 * x - 0.26 * y;
            nextY =  0.23 * x + 0.22 * y + 1.6;
        } else {
            nextX = -0.15 * x + 0.28 * y;
            nextY =  0.26 * x + 0.24 * y + 0.44;
        }

        // Skalowanie i pozycjonowanie
        let plotX = width * (x + 3) / 6;
        let plotY = height - height * ((y + 2) / 14);

        point(plotX,plotY)

        x = nextX;
        y = nextY;
    
    }
}
