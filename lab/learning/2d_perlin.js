let inc = 0.005;

function setup() {
  createCanvas(400, 400);
  pixelDensity(1);
}

let yOff = 0;
function draw() {
  loadPixels();
  for (let y = 0; y < height; y++) {
    let xOff = 0;
    for (let x = 0; x < width; x++) {
      let index = (x + y * width) * 4;
      let rand = noise(xOff, yOff) * 255;

      pixels[index + 0] = rand;
      pixels[index + 1] = rand;
      pixels[index + 2] = rand;
      pixels[index + 3] = 255;

      xOff += inc;
    }
    yOff += inc;
  }
  updatePixels();
}
