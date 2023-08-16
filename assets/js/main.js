const GRIDSIZE = 16;
const GRAVITY = 0.5;
let AIR_FRICTION;
let LIQUID_FRICTION;

let player;

let platforms = [];
let objects = [];

function setup() {
  new Canvas(GRIDSIZE * 40, GRIDSIZE * 40);
  world.gravity.y = GRIDSIZE;

  //             	( x,  y,  w,  h, collider)
  player = new Sprite(
    GRIDSIZE * 4,
    height - GRIDSIZE * 6,
    GRIDSIZE * 2,
    GRIDSIZE * 2,
    "d"
  );
  //player = new Player(GRIDSIZE * 4, height - GRIDSIZE * 6);

  floor = new Sprite();
  floor.x = GRIDSIZE * 20;
  floor.y = GRIDSIZE * 40;
  floor.w = GRIDSIZE * 40;
  floor.h = GRIDSIZE;
  floor.collider = "static";

  /*platforms.push(
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
  );*/
}


function draw() {
  background(220);

  if (kb.pressing("left")) player.vel.x = -GRIDSIZE/2;
  else if (kb.pressing("right")) player.vel.x = GRIDSIZE/2;
  else player.vel.x = 0;

  if (kb.pressing("space")) player.vel.y = -GRIDSIZE/2;
}
