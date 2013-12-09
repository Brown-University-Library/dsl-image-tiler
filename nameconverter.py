#!/usr/bin/env python

import os
import shutil


# Makes destination directory, then copies all files from sourcedir to destination and renames
# files in the format basename1.jpg, basename2.jpg, etc.

# NOTE: DOES NOT check that all files are photos, that the destination directory already exists

# Upon completion, prints to terminal number of files and destination directory. This information could
# be put in a text file if desired.

# Can also probably use something to call this from the javascript



# sourcedir = '/Users/Allison/Documents/DSL/dsl-image-tiler/icons'
# destination = '/Users/Allison/Documents/DSL/dsl-image-tiler/iconsConvert'
sourcedir = '/Volumes/Flashdrive/DSL'
destination = '/Volumes/Flashdrive/DSL/converted'
basename = 'snap'
exten = '.jpg'

def copyAndRename(src, dest, base, ext):
	os.makedirs(dest)
	allphotos = os.listdir(src)
	for pic in allphotos:
		filepath = os.path.join(src, pic)
		if (os.path.isfile(filepath)):
			shutil.copy(filepath, dest)

	count = 0;
	allcopied = os.listdir(dest)
	for copy in allcopied:
		newname = os.rename(os.path.join(dest,copy), dest + "/" + base + str(count+1) + ext)
		count+=1
	print str(count) + " photos copied to: '" + dest + "'"


copyAndRename(sourcedir,destination,basename,exten)
