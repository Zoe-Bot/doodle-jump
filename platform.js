class Platform {
    constructor(x, y, width, height, radius) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.radius = radius;
    }

    show() {
        rect(this.x, this.y, this.width, this.height, this.radius);
    }
}