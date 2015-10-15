var makeBall = function (xAxis, yAxis) {
  var colors = ['red','blue','yellow'];
  var color = colors[Math.floor(Math.random() * 3)];

  this.color = color;
  this.radius = 25;
  this.xAxis = xAxis;
  this.yAxis = yAxis;
  
}

makeBall.prototype.draw = function() {
  var canvas = document.getElementById('canvas');
  var ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.beginPath();
  ctx.arc(this.xAxis, this.yAxis, this.radius, 0, Math.PI*2, true);
  ctx.closePath();
  ctx.fillStyle = this.color;
  ctx.fill();
  this.xAxis += 5;
  this.yAxis += 5;
}