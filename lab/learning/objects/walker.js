const MYU = 0.1;
const DRAG_COEFFICIENT = 0.2;

class Walker {
  constructor(x, y, mass) {
    this.mass = mass;
    this.radius = sqrt(this.mass / 3.1416) * 20;
    this.pos = createVector(x, y);
    this.vel = createVector(0, 0);
    this.acc = createVector(0, 0);
  }

  applyDragForce() {
    // draw drag part:
    fill(255, 150);
    noStroke();
    rect(0, height - height / 2.5, width, height);

    if (this.pos.y >= height - height / 2.5) {
      // Direction of Drag Force:
      let drag = this.vel.copy();
      drag.normalize();
      drag.mult(-0.5);

      // Magnitude of Drag:
      let speedSq = this.vel.magSq();
      drag.setMag(DRAG_COEFFICIENT * speedSq);

      this.applyForce(drag);
    }
  }

  applyFriction() {
    let diff = height - this.pos.y - this.radius;

    if (diff <= 1) {
      // Direction of friction:
      let friction = this.vel.copy();
      friction.normalize();
      friction.mult(-1);

      // Magnitude of friction:
      let normal = this.mass;
      friction.setMag(MYU * normal);

      this.applyForce(friction);
    }
  }

  applyForce(force) {
    this.acc.add(p5.Vector.div(force, this.mass));
  }

  setEdges() {
    if (this.pos.x <= this.radius) {
      this.pos.x = this.radius;
      this.vel.x *= -1;
    }

    if (this.pos.x >= width - this.radius) {
      this.pos.x = width - this.radius;
      this.vel.x *= -1;
    }

    if (this.pos.y >= height - this.radius) {
      this.pos.y = height - this.radius;
      this.vel.y *= -1;
    }

    if (this.pos.y <= this.radius) {
      this.pos.y = this.radius;
      this.vel.y *= -1;
    }
  }

  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.set(0, 0);
  }

  draw() {
    this.applyFriction();
    this.setEdges();
    this.update();

    stroke(255, 220);
    strokeWeight(2);
    fill(255, 100);
    ellipse(this.pos.x, this.pos.y, this.radius * 2);
  }
}
