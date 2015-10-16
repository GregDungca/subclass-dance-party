var makeBall = function (xAxis, yAxis) {
  var colors = ['red','blue','yellow'];
  var color = colors[Math.floor(Math.random() * 3)];

  this.color = color;
  this.radius = 25;
  this.xAxis = xAxis;
  this.yAxis = yAxis;
  this.moveX = makeBall.prototype.move();
  this.moveY = makeBall.prototype.move();
  
}

makeBall.prototype.draw = function() {
  var canvas = document.getElementById('canvas');
  var ctx = canvas.getContext('2d');
  var proposedMovementX = this.xAxis + this.moveX;
  var proposedMovementY = this.yAxis + this.moveY;
  ctx.clearRect(0, 0, canvas.width, canvas.height);


  ctx.beginPath();
  // ctx.moveTo(120,120);
  ctx.arc(this.xAxis, this.yAxis, this.radius, 0, Math.PI*2, true);
  ctx.closePath();
  ctx.fillStyle = this.color;
  ctx.fill();

  this.moveX = proposedMovementX < this.radius || proposedMovementX > canvas.width - this.radius  ? -1 * this.moveX : this.moveX;
  this.moveY = proposedMovementY < this.radius || proposedMovementY > canvas.height - this.radius ? -1 * this.moveY : this.moveY;
  this.xAxis += this.moveX;
  this.yAxis += this.moveY;
}

makeBall.prototype.move = function() {
  var signs = [-1, +1];
  return signs[Math.floor(Math.random())] * Math.random()*5;
}
