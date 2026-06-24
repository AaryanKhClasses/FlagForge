---
title: Introduction to Binwalk
category: Tools
---

# Introduction to Binwalk
Binwalk is a tool for analyzing, reverse engineering, and extracting firmware images. It can identify file signatures, compressed data, and executable code within binary files.

It is commonly used in security research and embedded systems analysis to inspect firmware files for vulnerabilities or hidden data.

An example of using Binwalk to analyze an image:

```bash
binwalk image.jpg
```

could give output like:

```
------------------------------------------------------------------------------------------------------------------------
DECIMAL                            HEXADECIMAL                        DESCRIPTION
------------------------------------------------------------------------------------------------------------------------
0                                  0x0                                JPEG image, total size: 7560 bytes
------------------------------------------------------------------------------------------------------------------------

Analyzed 1 file for 85 file signatures (187 magic patterns) in 26.0 milliseconds
```
