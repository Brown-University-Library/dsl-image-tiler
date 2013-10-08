
var canvas  = document.getElementById('wall');
var context = canvas.getContext('2d');
/*
image     = new Image();
image.src = 'dog.jpg';

image.onload = function() {
	context.drawImage(this, 0,0, 200, 100);
};*/

/*var sources = {
	dog:'dog.jpg', 
	trees:'trees.jpg'
};


function loadImages(sources, callback){

	var loadedImages = 0;
	var images = {};
		for (var src in sources){
			images[src] = new Image();
			images[src].onload = function() {
				context.drawImage(this, 0, 0, 200, 100);
				if(++loadedImages >= 2) {
              		callback(images);
            	}
		  		
	  		};
	  		images[src].src = sources[src];
	  	}
	}

}
*/

var numImgs = 7;
var srcDir = "/Users/Allison/Documents/DSL/dsl-image-tiler/photos2/";
var basename = "photo";
var extension = ".jpg";

var canvaswidth = 1200;
var canvasheight = 1200;

for (var i = 0; i <= numImgs; i++)
{
   x = 300;
   y = 0;

   (function(j){
      var imgSrc = srcDir + basename + j + extension;
      var img = new Image();
      img.onload = function() {
        context.drawImage(img, x*(j-1), y, 300, 200);
        /*if (x*j > canvaswidth-300){
        	x = 300;
        	y+=200;
        }*/
      }
      img.src = imgSrc;
   })(i);

}
