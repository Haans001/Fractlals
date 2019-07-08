var root;
var tree;

function setup() {
  createCanvas(400, 400);
  tree = [];
  var a = createVector(width / 2, height);
  var b = createVector(width / 2, height - 100);
  root = new Branch(a, b);

  tree[0] = root;
}

function draw() {
  background(0);
  strokeWeight(2);
  for (let i = 0; i < tree.length; i++) {
    tree[i].show();
  }
}

function mousePressed() {
  for (let i = tree.length - 1; i >= 0; i--) {
    tree.push(tree[i].branch());
    tree.push(tree[i].branch(-1));
  }

  //   tree[1] = root.branch();
  //   tree[2] = root.branch(-1);
}
