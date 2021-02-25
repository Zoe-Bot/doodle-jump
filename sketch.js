let player;
let platforms = [];

function setup() {
    createCanvas(500, 800);
    player = new Player(200, 500, 20, 20);
    for(let i = 0; i < 10; i++) {
        platforms.push(new Platform(Math.random() * 700, Math.random() * 700, 50, 10, 10));
    }
}

function draw() {
    background(100);
    player.show();
    player.update();
    player.keyPressed();

    for(let platform of platforms) {
        platform.show();
    }
   
}