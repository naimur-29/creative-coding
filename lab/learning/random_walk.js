const pathArray = [];
let pos = {
  x: 0,
  y: 0,
};
let inc = 1;

function setup() {
  createCanvas(400, 400);
  background(51);

  pos.x = width / 2;
  pos.y = height / 2;
  pathArray.push(pos);
}

function draw() {
  let direction = floor(random(4));
  for (let i = 0; i < 5; i++) {
    noStroke();
    fill(0, 255, 0);
    ellipse(pos.x, pos.y, inc / 2, inc / 2);
    ellipse(pos.y, pos.x, inc / 2, inc / 2);
    ellipse(width - pos.x, height - pos.y, inc / 2, inc / 2);
    ellipse(width - pos.y, height - pos.x, inc / 2, inc / 2);

    console.log(direction);

    switch (direction) {
      case 0:
        pos.x += inc;
        break;
      case 1:
        pos.x -= inc;
        break;
      case 2:
        pos.y += inc;
        break;
      case 3:
        pos.y -= inc;
        break;
    }
  }
}
