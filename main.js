img = "";

function preload()
{
    img = loadImage('dog_cat.jpg');
}

function setup()
{
    canvas = createCanvas(640, 420);
    canvas.center();
}

function draw()
{
    image(img, 0, 0, 640, 420);
    fill("#05f5b1");
    text("dog", 45, 75);
    noFill();
    stroke("#29f505");
    rect(30, 60, 450, 350);
}