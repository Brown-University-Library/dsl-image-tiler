

/*
<canvas id="wall" width="1200" height="1200"
    style="border:1px solid #000000;">
  </canvas>
*/

//var canvas  = document.getElementById('wall');


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
var ON_DISPLAY_WALL = false; // set this to true when testing on the display wall
var ON_WEB_SERVER   = false; // if running in a web server, set to true

var canvas    = document.createElement('canvas')
canvas.width  = ON_DISPLAY_WALL ? 1920 * 4 : 1200;
canvas.height = ON_DISPLAY_WALL ? 1080 * 3 : 1200;

var context = canvas.getContext('2d');

//fake values for now
var WALLHEIGHT   = 3240;
var WALLWIDTH    = 7680/2;
var BEZEL        = 10;
var SCREENWIDTH  = 300;
var SCREENHEIGHT = 100;

/* Varies by project */
var numImgs = 6;	

// If running on a server, use relative addresses
var srcDir    = (ON_WEB_SERVER ? '' : '/Users/Allison/Documents/DSL/dsl-image-tiler/') + 'photos2/';
var basename  = "photo";
var extension = ".jpg";


var pwidth  = 150;
var pheight = 100;


var cols = 4;

for (var i = 0; i < numImgs; i++)
{
   (function(j){
      var imgSrc = srcDir + basename + (j+1) + extension;
      var img    = new Image();
      img.onload = function() {

      	screenCol = Math.floor(pwidth * (j % cols) / SCREENWIDTH);
		    screenRow = Math.floor(pheight * (Math.floor(j / cols)) / SCREENHEIGHT);

      	x = pwidth * (j % cols) + (BEZEL * screenCol);
      	y = pheight * (Math.floor(j / cols))+ (BEZEL * screenRow);
        
        context.drawImage(img, x, y, pwidth, pheight);
      }
      img.src = imgSrc;
   })(i);
}

document.body.appendChild(canvas);
context.drawImage(canvas, 0, 0);
