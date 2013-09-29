
var canvas  = document.getElementById('wall');
var context = canvas.getContext('2d');

image     = new Image();
image.src = 'dog.jpg';

image.onload = function () {
  context.drawImage(this, 0, 0); 
}
