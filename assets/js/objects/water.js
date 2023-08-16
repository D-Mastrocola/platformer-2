class Water {
    constructor(x,y,width,height) {
        this.position = createVector(x, y);
        this.size = createVector(width, height);
    }
    draw() {
        fill('rgba(10, 10,255, 0.25)');
        rect(this.position.x, this.position.y, this.size.x, this.size.y);

    }
    update() {
        this.draw();
    }
}