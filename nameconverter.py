#!/usr/bin/env python

import os
import shutil


# Makes destination directory, then copies all files from sourcedir to destination and renames
# files in the format basename1.jpg, basename2.jpg, etc.

# NOTE: DOES NOT check that all files are photos, that the destination directory already exists

# Upon completion, prints to terminal number of files and destination directory. This information could
# be put in a text file if desired.


sourcedir = '/Users/Allison/Documents/DSL/dsl-image-tiler/photos'
destination = '/Users/Allison/Documents/DSL/dsl-image-tiler/photos3'
basename = 'photo'

def copyAndRename(src, dest, base):
	os.makedirs(dest)
	allphotos = os.listdir(src)
	for pic in allphotos:
		filepath = os.path.join(src, pic)
		if (os.path.isfile(filepath)):
			shutil.copy(filepath, dest)

	count = 1;
	allcopied = os.listdir(dest)
	for copy in allcopied:
		newname = os.rename(os.path.join(dest,copy), dest + "/" + base + str(count) + ".jpg")
		count+=1
	print str(count) + " photos copied to: '" + dest + "'"


copyAndRename(sourcedir,destination,basename)
