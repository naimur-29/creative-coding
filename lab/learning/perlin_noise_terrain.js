// let offset1 = 0;
// let offset2 = 100;
let start = 0;
let inc = 0.005;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(50);

  // let x = map(noise(offset1), 0, 1, 0, width);
  // let y = map(noise(offset2), 0, 1, 0, height);

  // offset1 += 0.02;
  // offset2 += 0.02;

  // fill(220);
  // ellipse(x, y, 24, 24);

  noFill();
  let off = start;

  beginShape();
  for (let x = 0; x < width; x++) {
    let x2 = map(sin(off), -1, 1, 0, 50);
    let y = noise(off) * height;

    stroke(220, 0, 0, 50);
    line(x, y, x, height);

    stroke(220, 220, 220, 50);
    rect(x, y, x, 0);

    stroke(220);
    vertex(x, y);

    off += inc;
  }
  endShape();

  start += inc;

  // noLoop();
}
