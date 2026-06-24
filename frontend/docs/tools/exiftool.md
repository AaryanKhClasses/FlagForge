---
title: Introduction to Exiftool
category: Tools
---

# Introduction to Exiftool
ExifTool is a platform-independent Perl library plus a command-line application for reading, writing, and editing meta information in a wide variety of files.

It supports many different types of metadata including EXIF, GPS, IPTC, XMP, JFIF, GeoTIFF, ICC Profile, Photoshop IRB, FlashPix, AFCP, and ID3, as well as the maker notes of many digital cameras.

An example of using ExifTool to read metadata from an image file:

```bash
exiftool image.jpg
```

could give output like:

```
ExifTool Version Number         : 13.50
File Name                       : image.jpg
Directory                       : /mnt/c/Users/username/Desktop
File Size                       : 7.6 kB
File Modification Date/Time     : 2026:06:23 13:26:39+00:00
File Access Date/Time           : 2026:06:23 13:26:40+00:00
File Inode Change Date/Time     : 2026:06:23 13:26:39+00:00
File Permissions                : -rwxrwxrwx
File Type                       : JPEG
File Type Extension             : jpg
MIME Type                       : image/jpeg
JFIF Version                    : 1.01
Resolution Unit                 : inches
X Resolution                    : 72
Y Resolution                    : 72
Comment                         : CTF{y0u_f1gur3d_0ut_h0w_t0_r34d_m3t4d4t4}
Image Width                     : 300
Image Height                    : 300
Encoding Process                : Progressive DCT, Huffman coding
Bits Per Sample                 : 8
Color Components                : 3
Y Cb Cr Sub Sampling            : YCbCr4:2:0 (2 2)
Image Size                      : 300x300
Megapixels                      : 0.090
```

This output shows various metadata fields extracted from the image file, including the file name, size, modification date, image dimensions, and a comment that contains a flag in this case.
