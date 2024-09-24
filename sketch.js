// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

let walker;
let randomCounts = [];
let total = 20;

function setup() {
  createCanvas(640, 1000);
  walker = new Walker();
  background(255);
  for (let i = 0; i < total; i++) {
    randomCounts[i] = 0;
  }
}

let t = 0;


function draw() {
  let index = floor(random(randomCounts.length));
  randomCounts[index]++;
  walker.step();
  walker.show();
  let w = width / randomCounts.length;

  for (let x = 0; x < randomCounts.length; x++) {
    // console.log(randomCounts[x]);
    stroke(0);

    rect(x * w, height - randomCounts[x], w - 1, randomCounts[x]);
  }
  t += 0.01;
}

class Walker {
  constructor() {
    this.x = width / 2;
    this.y = height / 2;
  }

  show() {
    stroke(random(255), random(255), random(255));
    // circle(random(20, 40), 180, 16);

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
