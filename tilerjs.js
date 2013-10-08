
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
var x = 0;
var y = 0;
loadImages(sources, function(images) {
	context.drawImage(images.dog, 0, 0, 200, 100); 
	
	x+=210;
	if (x >= 1000){
		x = 0;
		y += 110;
	}
	if (y>=1000){
		break;
	}

});*/
var numImgs = 7;
var widthtoheight = 2/3;


var imgwidth = ;
var imgheight
for (var i = 0; i <= numImgs; i++)
{
   x = 300;
   y = 0;


   (function(j){
      var imgSrc = "photo"+j+".jpg";
      var img = new Image();
      img.onload = function() {
        context.drawImage(img,x*(j-1),y, 300, 200);
      }
      img.src = imgSrc;
   })(i);

}
