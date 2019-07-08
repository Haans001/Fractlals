var axiom;
var rules;

function setup() {
  createCanvas(400, 400);
  axiom = "0";
  rules = {
  "0" : "1[0]0",
  "1" : "11"
}
  generate(axiom)
  
}

function draw() {
  
}

function generate(axiom){
  
  if(axiom.length> 50) return;
  
    let newAxiom = '';
    for(let i=0;i<axiom.length;i++){
      if(axiom.charAt(i) == '[') {
        newAxiom+= '[';
      }
      else if(axiom.charAt(i) == ']'){
        newAxiom+= ']';
      }
      else{newAxiom+= rules[axiom.charAt(i)];}
      
    }
  console.log(newAxiom);
  generate(newAxiom);
}
