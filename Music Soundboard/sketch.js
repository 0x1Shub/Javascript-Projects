let width = window.innerWidth();
let height = window.innerHeight();

let sound1;
let sound2;
let sound3;
let sound4;
let sound5;
let sound6;
let sound7;
let sound8;
let sound9;

let buttons_top = [];
let buttons_middle = [];
let buttons_bottom = [];

function setup() {
  canvas = createCanvas(width, height);

  sound1 = loadSound("sound1.mp3");
  sound2 = loadSound("sound2.mp3");
  sound3 = loadSound("sound3.mp3");
  sound4 = loadSound("sound4.mp3");
  sound5 = loadSound("sound5.mp3");
  sound6 = loadSound("sound6.mp3");
  sound7 = loadSound("sound7.mp3");
  sound8 = loadSound("sound8.mp3");
  sound9 = loadSound("sound9.mp3");

  let b1 = new Button(
    weight / 3,
    height / 3,
    200,
    80,
    color(226, 132, 19),
    color(244, 190, 124),
    sound1
  );
  let b2 = new Button(
    weight / 2,
    height / 3,
    200,
    80,
    color(0, 159, 183),
    color(153, 241, 255),
    sound2
  );
  let b3 = new Button(
    (2 * weight) / 3,
    height / 3,
    200,
    80,
    color(145, 145, 233),
    color(204, 204, 245),
    sound3
  );

  let b4 = new Button(
    weight / 3,
    height / 2,
    200,
    80,
    color(205, 92, 92),
    color(240, 128, 128),
    sound4
  );
  let b5 = new Button(
    weight / 2,
    height / 2,
    200,
    80,
    color(72, 209, 204),
    color(175, 238, 238),
    sound5
  );
  let b6 = new Button(
    (2 * weight) / 3,
    height / 2,
    200,
    80,
    color(255, 215, 0),
    color(255, 255, 0),
    sound6
  );

  let b7 = new Button(
    weight / 3,
    (2 * height) / 3,
    200,
    80,
    color(255, 163, 175),
    color(255, 214, 220),
    sound7
  );
  let b8 = new Button(
    weight / 2,
    (2 * height) / 3,
    200,
    80,
    color(143, 45, 86),
    color(216, 131, 166),
    sound8
  );
  let b9 = new Button(
    (2 * weight) / 3,
    (2 * height) / 3,
    200,
    80,
    color(236, 78, 32),
    color(234, 162, 133),
    sound9
  );

  buttons_top.push(b1);
  buttons_top.push(b2);
  buttons_top.push(b3);

  buttons_middle.push(b4);
  buttons_middle.push(b5);
  buttons_middle.push(b6);

  buttons_bottom.push(b7);
  buttons_bottom.push(b8);
  buttons_bottom.push(b9);
}

function draw() {
  background(247, 178, 183);
  noStroke();
  for (let i = 0; i < buttons_top.length; i++) {
    buttons_top[i].show();
    buttons_middle[i].show();
    buttons_bottom[i].show();
  }
}

class Button {
  constructor(x, y, w, h, color, accent, song) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.color = color;
    this.accent = accent;
    this.song = song;
  }

  show() {
    noStroke();
    fill(this.color);
    rect(this.x, this.y, this.w, this.h);

    fill(this.accent);
    ellipse(this.x, this.y, this.w, this.h);

    fill(this.color);
    arc(this.x, this.y, this.w, this.h, TWO_PI, PI);
  }
}
