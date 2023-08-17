class Player {
  constructor(x, y) {
    this.jumps = 1;
    this.keysPressed = {
      w: false,
      a: false,
      s: false,
      d: false,
    };

    this.sprite = new Sprite();
    this.sprite.d = 2 * GRIDSIZE;
    this.sprite.pos = { x: x, y: y };
  }
  accelerate() {}
  updatePos() {}
  jump() {
    if (this.jumps > 0) {
      this.speed.y = -GRIDSIZE;
      --this.jumps;
    }
  }
  draw() {}
  update(objects) {
    objects.forEach(obj => {
      if(this.sprite.colliding(obj)) {
        this.jumps = 1;
      }
    });
    if (kb.pressing("left")) {
      if (!kb.pressing("right")) {
        console.log("left");
        this.sprite.vel.x = -GRIDSIZE / 2;
      }
    } else if (kb.pressing("right")) {
      this.sprite.vel.x = GRIDSIZE / 2;
    }

    if (kb.pressing("space")) {
      if (this.jumps > 0) {
        this.sprite.vel.y = -GRIDSIZE;
        this.jumps = 0;
      }
    }

    if (player.sprite.pos.x - GRIDSIZE < 0) {
      player.sprite.pos.x = GRIDSIZE;
    } else if (player.sprite.pos.x + GRIDSIZE > width) {
      player.sprite.pos.x = width - GRIDSIZE;
    }
  }
}
