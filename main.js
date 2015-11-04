function Square(x,y,size,color) {
  this.x = x;
  this.y = y;
  this.size = size;
  this.color = color;
}

Square.prototype.draw = function() {
  var canvas = document.querySelector('canvas').getContext('2d');
  canvas.fillStyle = this.color;
  canvas.beginPath();
  canvas.fillRect(this.x, this.y, this.size, this.size);
}

Square.prototype.moveRight = function() {
  this.x = this.x + 10;
}

Square.prototype.remove = function() {
  var tempColor = this.color;
  square.color = 'white';
  this.draw();
  this.color = tempColor;
}

var square = new Square(5, 5, 50, 'blue');
var c = document.querySelector('canvas')

canvas.addEventListener('click', function(event) {
  var x = event.offsetX;
  var y = event.offsetY;
  square.draw();
})

var button = document.querySelector('button')

button.addEventListener('click', function(event) {
  square.remove();
  square.moveRight();
  square.draw();

})
