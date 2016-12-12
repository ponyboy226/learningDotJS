var x = 1;
var y = 1;
var speedX = 3;
var speedY = 3;
radius = 50;

var col = {
  r : 0, 
  g : 0, 
  b : 0
};

function setup() {
  createCanvas(600, 400);
}

function draw() {
  // Set up the scene
  background(0);
  stroke(255);
  strokeWeight(4);
  noFill();
  
  // Check where the mouse is
  if (mouseX > width / 2){
    fill(col.r, col.g, col.b, 100);
  }
  
  // Draw the circle
  ellipse(x + radius, y + radius, radius * 2, radius * 2);

  // Set left side wall
  if (x < 0){
    speedX = random(1, 3);
    col.r = random(0, 255);
    col.g = random(0, 255);
    col.b = random(0, 255); 
  }
  
  // Set right side wall
  if (x >= width - radius * 2){
    speedX = random(-3, -1);
    col.r = random(0, 255);
    col.g = random(0, 255);
    col.b = random(0, 255);  
  }
  
  // Set top wall
  if (y <= 0){
    speedY = random(1, 3);
    col.r = random(0, 255);
    col.g = random(0, 255);
    col.b = random(0, 255);  
  }
  
  // Set bottom wall
  if (y >= height - radius * 2){
    speedY = random(-3, -1);
    col.r = random(0, 255);
    col.g = random(0, 255);
    col.b = random(0, 255);
  }

  // Make the circle move
  x = x + speedX;
  y = y + speedY;

}

