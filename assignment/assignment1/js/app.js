function setup() {

    createCanvas(800,600);
    let a = color(255,212,0);
    rect(30, 20, 55, 55);

    fill(a);
    rect(100,20,30,20);
    background(128,0,128);

}
function draw () {
    circle(mouseX, mouseY, 80);
    
    let c = color(101, 204);
    fill(c);
    rect(30, 20, 55, 55);
    circle(30, 20, 55, 55);
    describe(`Yellow rect in middle right of canvas,
    with 55 pixel width and height.`);
}
