//VLC command: /Applications/VLC.app/Contents/MacOS/VLC ./Documents/DSL/dsl-image-tiler/citylights.mp4 --rate=1 --video-filter=scene 
//              --vout=dummy --start-time=0 --stop-time=1000 --scene-format=jpg --scene-ratio=24 
//              --scene-prefix=snap --scene-path=/Volumes/Flashdrive/DSL/
// FFMPEG command: ffmpeg -i movie.mpg snap%d.jpg

var ON_DISPLAY_WALL = true; // set this to true when testing on the display wall
var ON_WEB_SERVER   = true; // if running in a web server, set to true

var canvas = document.createElement('canvas');

canvas.width  = ON_DISPLAY_WALL ? 1920 * 4 : 1200;
canvas.height = ON_DISPLAY_WALL ? 1080 * 3 : 1200;

var context = canvas.getContext('2d');

var BEZEL        = 0;
var SCREENWIDTH  = ON_DISPLAY_WALL ? 1920 : 300;
var SCREENHEIGHT = ON_DISPLAY_WALL ? 1080 : 100;

var NUMBER_OF_MONITORS_ACROSS = 4;
var NUMBER_OF_MONITORS_DOWN   = 3;

var srcDir    = (ON_WEB_SERVER ? 'img/the-kid/' : '/Volumes/Flashdrive/DSL/converted/');
var basename  = 'movie';
var extension = '.jpg';

/* Varies by project */

var numImgs = 946;

var columnsPerMonitor = 15; // Should be an integer to avoid straddling bezels
var cols = NUMBER_OF_MONITORS_ACROSS * columnsPerMonitor;

var pwidth  = SCREENWIDTH / cols;
var pheight = pwidth * .75;

for (var i = 0; i < numImgs; i++)
{
  (function(j) {
  
    var imgSrc = srcDir + basename + (j+1) + extension;
    var img    = new Image();
    
    img.onload = function() {
    
      var screenCol = Math.floor(pwidth * (j % cols) / SCREENWIDTH);
      var screenRow = Math.floor(pheight * (Math.floor(j / cols)) / SCREENHEIGHT);  
    
      var x = pwidth  * (j % cols) + (BEZEL * screenCol);
      var y = pheight * (Math.floor(j / cols)) + (BEZEL * screenRow);
      
      context.drawImage(img, x, y, pwidth, pheight);
    };
    img.src = imgSrc;
  })(i);
}

document.getElementById('image-tiles').appendChild(canvas);
context.drawImage(canvas, 0, 0);
