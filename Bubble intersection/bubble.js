function Bubble(x, y) {
  this.x = x;
  this.y = y;
  this.r = 24;
  this.col = color(100, 100, 255, 100);
  lifespan = 255;

  this.display = function() {
    stroke(255);
    fill(this.col, 100);
    ellipse(this.x, this.y, this.r * 2, this.r * 2);
  }

  this.update = function() {
    this.x = this.x + random(-1, 1);
    this.y = this.y + random(-1, 1);
    this.lifespan--;
  }

  this.changeColor = function() {
    this.col = color(100, 100, random(255));
  }

  this.intersects = function(other) {
    var d = dist(this.x, this.y, other.x, other.y);
    if (d < this.r + other.r) {
      return true;
    } else {
      return false;
    }
  }
}