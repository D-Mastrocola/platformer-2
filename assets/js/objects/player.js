class Player {
  constructor(x, y) {
    this.position = createVector(x, y);
    this.speed = createVector(0, 0);
    this.acceleration = createVector(0, 0);
    this.size = createVector(GRIDSIZE * 2, GRIDSIZE * 2);
    this.jumps = 1;
    this.keysPressed = {
      w: false,
      a: false,
      s: false,
      d: false,
    };

    this.sprite = new Sprite();
    this.sprite.d = 2*GRIDSIZE;
    this.sprite.pos = { x: x, y: y };
  }
  accelerate(gravity) {
    if (this.keysPressed.w) {
      this.jump();
    }
    if (this.keysPressed.a) {
      if (!this.keysPressed.d) {
        this.speed.x = -GRIDSIZE / 2;
      } else {
        this.speed.x = 0;
      }
    } else if (this.keysPressed.d) {
      if (!this.keysPressed.a) {
        this.speed.x = GRIDSIZE / 2;
      } else {
        this.speed.x = 0;
      }
    } else {
      this.speed.x = 0;
    }
    this.speed.y += gravity;

    //Max Speed
    if (this.speed.y > this.size.y) {
      this.speed.y = this.size.y;
    } else if (this.speed.y < -this.size.y) {
      this.speed.y = -this.size.y;
    }
  }
  updatePos() {
    this.position.add(this.speed);

    platforms.forEach((obj) => {
      //Check Platformer Collisions
      if (
        collideLineRect(
          obj.position.x,
          obj.position.y,
          obj.position.x,
          obj.position.y + obj.size.y,
          this.position.x,
          this.position.y,
          this.size.x,
          this.size.y
        )
      ) {
        //left
        this.position.x = obj.position.x - this.size.x;
      } else if (
        collideLineRect(
          obj.position.x + obj.size.x,
          obj.position.y,
          obj.position.x + obj.size.x,
          obj.position.y + obj.size.y,
          this.position.x,
          this.position.y,
          this.size.x,
          this.size.y
        )
      ) {
        //right
        this.position.x = obj.position.x + obj.size.x;
      } else if (
        collideLineRect(
          obj.position.x,
          obj.position.y,
          obj.position.x + obj.size.x,
          obj.position.y,
          this.position.x,
          this.position.y,
          this.size.x,
          this.size.y
        )
      ) {
        //Top of platform collision

        this.position.y = obj.position.y - this.size.y;
        this.jumps = 1;
        this.speed.y = 0;
      } else if (
        collideLineRect(
          obj.position.x,
          obj.position.y + obj.size.y,
          obj.position.x + obj.size.x,
          obj.position.y + obj.size.y,
          this.position.x,
          this.position.y,
          this.size.x,
          this.size.y
        )
      ) {
        //bottom
        this.position.y = obj.position.y + obj.size.y;
        this.speed.y = 0;
      }
    });
    objects.forEach((obj) => {
      console.log("checking");
      if (collideRectRect(obj.position, obj.size, this.position, this.size)) {
        console.log(this.speed.mag());
        if (this.speed.mag() > 20) {
          this.speed.normalize();
          this.speed.mult();
        }
        this.speed.sub(LIQUID_FRICTION);
      }
    });

    //if falls out of canvas
    if (this.position.y > height - this.size.y) {
      this.position.y = height - this.size.y;
      this.speed.y = 0;
      this.jumps = 1;
    }
    //if touches edges
    if (this.position.x < 0) {
      this.position.x = 0;
    }
    if (this.position.x > width - this.size.x) {
      this.position.x = width - this.size.x;
    }
  }
  jump() {
    if (this.jumps > 0) {
      this.speed.y = -GRIDSIZE;
      --this.jumps;
    }
  }
  draw() {
    fill(50, 50, 255);
    noStroke();
    rect(this.position.x, this.position.y, this.size.x, this.size.y);
  }
  update(gravity) {
    this.accelerate(gravity);
    this.updatePos();
    this.draw();
  }
}
