#dsl-image-tiler

A generic tool for tiling multiple images on the DSL display wall

##Notes for future development

###Proposed DslTiler object definition:

####Sample behaviour:

```javascript
    var tiler = new DslTiler(tilerContainerId);
    tiler.loadLocalImageSeries({ names:'the_kid', stem:'movie_', suffix:'.jpg', numbering:[0,1000] });
    // There should also be a JSON registry of images series that includes the stem & numbering info
    tiler.setTimeLength('1:30:13'); // Allows for referencing by time
    tiler.setColumnsPerDisplay(8);
    tiler.setRowsPerDisplay(6);
    tiler.setImageSize('cover');
    tiler.setBackgroundColor('black');
    tiler.renderTimeSpan('0:45:00', '0:49:00');

    // Render with defaults
    // (as big as possible, contained, all images in series, black background, going from top left to bottom right)

    var imagesFilenames = ['movie_1.jpg', 'green.gif', 'red.png'];
    tiler.loadLocalImages(imagesFilenames);
    tiler.render();
```
####Public Methods:

* DslTiler.loadLocalImageSeries({ name: string, stem: string, suffix: string, numbering:array of numbers });
* DslTiler.loadLocalImageSeries(seriesName); // other info loaded from registry
* DslTiler.loadLocalImages([filenames]);
* DslTiler.loadRemoteImages ... // Also allow for loading via URL

* DslTiler.setColumnsPerDisplay(integer or 'auto');
* DslTiler.setRowsPerDisplay(integer or 'auto');

####Private methods:




####Image cropping options (taken from CSS:

* cover 
      Scale the background image to be as large as possible 
      so that the background area is completely covered by 
      the background image. Some parts of the background image 
      may not be in view within the background positioning area

* contain 
      Scale the image to the largest size such that both its 
      width and its height can fit inside the content area

####On and off the DSL wall

Behaviour should change whether it's on the wall or not. Obviously, if it's on the wall we need to worry about bezels, and if it's not we don't.

But also - what do we want this to do if it's NOT on the wall?

Possibilities:

* Large display: keep matrix
* Medium display: matrix + detail view
* Small display: detail view with advance button
