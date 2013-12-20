//VLC command: /Applications/VLC.app/Contents/MacOS/VLC ./Documents/DSL/dsl-image-tiler/citylights.mp4 --rate=1 --video-filter=scene 
//              --vout=dummy --start-time=0 --stop-time=1000 --scene-format=jpg --scene-ratio=24 
//              --scene-prefix=snap --scene-path=/Volumes/Flashdrive/DSL/
// FFMPEG command: ffmpeg -i movie.mpg snap%d.jpg

var ON_DISPLAY_WALL = (window.innerWidth > 5000); // Auto-detect based on size of window
var ON_WEB_SERVER   = (window.location.origin.match(/^http:/) !== null); // if running in a web server, set to true

var canvas = document.createElement('canvas');

canvas.width  = ON_DISPLAY_WALL ? 1920 * 4 : 1200;
canvas.height = ON_DISPLAY_WALL ? 1080 * 3 : 1200;

var context = canvas.getContext('2d');

var BEZEL        = 0;
var SCREENWIDTH  = ON_DISPLAY_WALL ? 1920 : 300;
var SCREENHEIGHT = ON_DISPLAY_WALL ? 1080 : 100;

var NUMBER_OF_MONITORS_ACROSS = 4;
var NUMBER_OF_MONITORS_DOWN   = 3;

var TOTAL_NUMBER_OF_IMAGES = 75963; // Currently hard-coded

var srcDir    = (ON_WEB_SERVER ? 'img/the-kid/' : '/Volumes/Flashdrive/DSL/converted/');
var basename  = 'movie';
var extension = '.jpg';

/* Varies by project */

var columnsPerMonitor = 15; // Should be an integer to avoid straddling bezels
var cols = NUMBER_OF_MONITORS_ACROSS * columnsPerMonitor;

var pwidth  = (SCREENWIDTH * NUMBER_OF_MONITORS_ACROSS) / cols;
var pheight = pwidth * .75;

var numberOfRows = (SCREENHEIGHT * NUMBER_OF_MONITORS_DOWN) / pheight;
var numImgs = cols * numberOfRows;

var skipFrames = Math.floor(TOTAL_NUMBER_OF_IMAGES / numImgs);

for (var i = 0; i < numImgs; i++)
{
  (function(j) {
  
    var imgSrc = srcDir + basename + ((j + 1) * skipFrames) + extension;
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
