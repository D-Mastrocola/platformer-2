const GRIDSIZE = 16;
const GRAVITY = 0.5;
let AIR_FRICTION;
let LIQUID_FRICTION;

let player;

let platforms = [];

function setup() {
  new Canvas(GRIDSIZE * 40, GRIDSIZE * 40);
  world.gravity.y = GRIDSIZE*2;

  //             	( x,  y,  w,  h, collider)
  player = new Player(GRIDSIZE * 4, height - GRIDSIZE * 6);
  player.sprite.friction = 20;
  player.sprite.rotationDrag = 20;
  //player = new Player(GRIDSIZE * 4, height - GRIDSIZE * 6);

  let floor = new Sprite();
  floor.x = GRIDSIZE * 20;
  floor.y = GRIDSIZE * 40;
  floor.w = GRIDSIZE * 40;
  floor.h = GRIDSIZE;
  floor.collider = 'kinematic';

  platforms.push(floor);

  let platform1 = new Sprite(GRIDSIZE * 10, GRIDSIZE * 25, GRIDSIZE*10, GRIDSIZE*5, 'kinematic');

  platforms.push(platform1);


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

 

  player.update(platforms);
}
