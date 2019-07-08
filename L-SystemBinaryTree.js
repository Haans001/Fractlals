var axiom = "X";
var rules;
var len = 150;
var angle;

function setup() {
  createCanvas(800, 900);
  background(0);
  angle = radians(-26);
  stroke(255, 166, 33);
  strokeWeight(1);
  let button = createButton("Generate");
  rules = {
    X: "F+[[X]-X]-F[-FX]+X",
    F: "FF"
  };
  button.mousePressed(generate);
  turtle();
}

function turtle() {
  background(0);
  resetMatrix();
  translate(width / 2, height);
  for (let i = 0; i < axiom.length; i++) {
    let current = axiom.charAt(i);

    switch (current) {
      case "F": {
        line(0, 0, 0, -len);
        translate(0, -len);
        break;
      }
      case "-": {
        rotate(-angle);
        break;
      }
      case "+": {
        rotate(angle);
        break;
      }
      case "[": {
        push();
        break;
      }
      case "]": {
        pop();
        break;
      }
    }
  }
}

function generate() {
  len *= 0.56;
  let newAxiom = "";
  for (let i = 0; i < axiom.length; i++) {
    if (rules[axiom.charAt(i)] === undefined) {
      newAxiom += axiom.charAt(i);
    } else {
      newAxiom += rules[axiom.charAt(i)];
    }
  }
  axiom = newAxiom;
  turtle();
}
