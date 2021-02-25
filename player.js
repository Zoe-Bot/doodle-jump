class Player {
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;

        this.gravity = 0.1;
        this.up = -5;
        this.velocity = 0;

        this.speed = 1;
    }

    show() {
        noStroke();
        rect(this.x, this.y, this.width, this.height);
    }

    update() {
        //falling down
        this.velocity += this.gravity;
        this.y += this.velocity;

        //jump
        if (this.y > height) {
            console.log('jump');
            this.jump();
        }
    }

    jump() {
        this.velocity += this.up;
    }

    keyPressed() {
        if (keyCode == RIGHT_ARROW)
            this.x += this.speed;
        else if (keyCode == LEFT_ARROW)
            this.x -= this.speed;
    }
}