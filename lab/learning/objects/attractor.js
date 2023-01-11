const G = 6;

class Attractor {
  attract(walker) {
    let force = p5.Vector.sub(this.pos, walker.pos);
    let distanceSq = force.magSq();
    let magnitude = (G * this.mass * walker.mass) / distanceSq;

    force.setMag(magnitude);
    walker.applyForce(force);
  }

  draw() {
    this.applyFriction();
    this.setEdges();

    stroke(255, 220);
    strokeWeight(2);
    fill(0, 220, 0, 100);
    ellipse(this.pos.x, this.pos.y, this.radius * 2);
  }
}
