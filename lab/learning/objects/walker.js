class Walker {
  constructor(x, y) {
    this.pos = createVector(x, y);
  }

  update() {
    this.pos.x += random(-1, 1);
    this.pos.y += random(-1, 1);
  }

  draw() {
    point(this.pos.x, this.pos.y);
  }
}
