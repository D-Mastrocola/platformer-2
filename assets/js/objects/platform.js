class Platform {
  constructor(x, y, width, height) {
    this.position = createVector(x, y);
    this.size = createVector(width, height);
  }
  draw() {
    fill(255, 50, 0);
    rect(this.position.x, this.position.y, this.size.x, this.size.y);
  }
  update() {
    this.draw();
  }
}
