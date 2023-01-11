let walker;

function setup() {
  createCanvas(400, 400);

  walker = new Walker(width / 2, height / 2);
}

function draw() {
  background(51);
  strokeWeight(5);
  stroke(255);

  walker.update();
  walker.draw();
}
