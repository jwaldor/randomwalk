// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

let walker;
let randomCounts = [];
let total = 20;

function setup() {
  createCanvas(640, 240);
  walker = new Walker();
  background(255);
  for (let i = 0; i < total; i++) {
    randomCounts[i] = 0;
  }
}

function draw() {
  let index = floor(random(randomCounts.length));
  randomCounts[index]++;
  walker.step();
  walker.show();
  let w = width / randomCounts.length;

  for (let x = 0; x < randomCounts.length; x++) {
    // console.log(randomCounts[x]);
    rect(x * w, height - randomCounts[x], w - 1, randomCounts[x]);
  }
}

class Walker {
  constructor() {
    this.x = width / 2;
    this.y = height / 2;
  }

  show() {
    stroke(0);
    point(this.x, this.y);
  }

  step() {
    //{!2} Yields –1, 0, or 1
    let xstep = floor(random(3)) - 1;
    let ystep = floor(random(3)) - 1;
    this.x += xstep;
    this.y += ystep;
  }
}
