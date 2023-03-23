let player;
let bullets = [];
let targets = [];

function setup() {
  createCanvas(800, 600);
  player = new Player();
  for (let i = 0; i < 5; i++) {
    targets.push(new Target());
  }
}

function draw() {
  background(0);
  player.show();

  for (let bullet of bullets) {
    bullet.move();
    bullet.show();
  }

  for (let target of targets) {
    target.move();
    target.show();
  }
}

function keyPressed() {
  if (key === ' ') {
    bullets.push(new Bullet(player.x, player.y));
  }
}

class Player {
  constructor() {
    this.x = width / 2;
    this.y = height - 50;
  }

  show() {
    fill(255);
    rect(this.x, this.y, 50, 50);
  }
}

class Bullet {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  move() {
    this.y -= 5;
  }

  show() {
    fill(255, 0, 0);
    ellipse(this.x + 25, this.y, 10);
  }
}

class Target {
  constructor() {
    this.x = random(width);
    this.y = random(height / 2);
    this.speed = random(1, 3);
  }

  move() {
    this.x += this.speed;
    if (this.x > width || this.x < 0) {
      this.speed = -this.speed;
    }
  }

  show() {
    fill(0, 255, 0);
    ellipse(this.x, this.y, 50);
  }
}
