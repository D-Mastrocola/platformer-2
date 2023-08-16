const GRIDSIZE = 16;
const GRAVITY = 0.5;
let AIR_FRICTION;
let LIQUID_FRICTION;

let player;

let platforms = [];
let objects = [];

function setup() {
  AIR_FRICTION = createVector(0.05, 0.05);
  LIQUID_FRICTION = createVector(0.1, 0.1);
  collideDebug(true);
  createCanvas(GRIDSIZE * 40, GRIDSIZE * 40);

  player = new Player(GRIDSIZE * 4, height - GRIDSIZE * 6);

  platforms.push(
    new Platform(
      GRIDSIZE * 4,
      height - GRIDSIZE * 7,
      GRIDSIZE * 10,
      GRIDSIZE * 8
    )
  );
  platforms.push(
    new Platform(
      GRIDSIZE * 6,
      height - GRIDSIZE * 20,
      GRIDSIZE * 6,
      GRIDSIZE * 2
    )
  );
  platforms.push(
    new Platform(
      GRIDSIZE * 30,
      height - GRIDSIZE * 7,
      GRIDSIZE * 10,
      GRIDSIZE * 8
    )
  );
  objects.push(
    new Water(
      GRIDSIZE * 14,
      height - GRIDSIZE * 6,
      GRIDSIZE * 16,
      height - GRIDSIZE * 6
    )
  );
}
function keyPressed() {
  //console.log(keyCode);
  //w
  if (keyCode === 87 || keyCode === 32) {
    player.keysPressed.w = true;
  }
  //s
  if (keyCode === 83) {
    player.keysPressed.s = true;
  }
  //a
  if (keyCode === 65) {
    player.keysPressed.a = true;
  }
  //d
  if (keyCode === 68) {
    player.keysPressed.d = true;
  }
}
function keyReleased() {
  //console.log(keyCode);
  //w
  if (keyCode === 87 || keyCode === 32) {
    player.keysPressed.w = false;
  }
  //s
  if (keyCode === 83) {
    player.keysPressed.s = false;
  }
  //a
  if (keyCode === 65) {
    player.keysPressed.a = false;
  }
  //d
  if (keyCode === 68) {
    player.keysPressed.d = false;
  }
}

function draw() {
  background(220);

  player.update(GRAVITY);

  platforms.forEach((obj) => {
    obj.update();
  });
  objects.forEach((obj) => {
    obj.update();
  });
}
