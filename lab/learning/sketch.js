// Global Variables:
let GRAVITY, WIND;
let walkers = [];
let attractors = [];

function setup() {
  createCanvas(400, 400);

  GRAVITY = createVector(0, 0.2);
  WIND = createVector(0.1, 0);

  for (let i = 0; i < 1; i++) {
    walkers.push(
      new Walker(random(50, width - 50), random(10, 50), random(3, 5))
    );
  }

  for (let i = 0; i < 1; i++) {
    attractors.push(new Attractor(width / 2, height / 2, 70));
  }
}

function draw() {
  background(35);

  for (let walker of walkers) {
    if (mouseIsPressed) {
      walker.applyForce(WIND);
    }
    walker.applyForce(p5.Vector.mult(GRAVITY, walker.mass));

    walker.update();
    walker.applyDragForce();
    walker.draw();

    // attractors:
    // for (let attractor of attractors) {
    //   attractor.draw();
    //   attractor.attract(walker);
    // }
  }
}
