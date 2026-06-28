---
title: ZBarImg Tool
category: Tools
---

# ZBarImg Tool
---

`zbarimg` is a command-line utility from the ZBar bar code reader library. It scans image files for various types of barcodes and QR codes and decodes their contents.

It is commonly used in digital forensics, document processing, and inventory management to extract data embedded in visual codes within images.

---

## Information
`zbarimg` supports decoding a wide range of 1D barcodes (EAN-13, EAN-8, UPC-A, Code 39, Code 128, etc.) and 2D barcodes (QR Code, Data Matrix, PDF417). It can process multiple images and multiple codes within a single image, providing the decoded data and the type of code found.

---

## Using as FlagForge Tool
<p class="text-primary">NOTE: Windows Subsystem for Linux (WSL) must be installed on your Windows machine in-order to use the 'zbarimg' tool. Also, the 'zbarimg' tool must be installed separately. The tool can be quickly installed by following instructions given within the app itself.</p>

The `zbarimg` tool is a FlagForge attachment tool for image files. Simply select an image file (e.g., `.png`, `.jpg`) in the Attachment View and click on the "Attachment Info" button in the top right corner of the main area. Then, click on the "ZBarImg" tool to execute it on the selected attachment.

---

## Example Usage
Suppose you have an image file named `qr_code.png` attached to a challenge that you suspect contains a QR code. To decode it using the `zbarimg` tool, you would select the file in the Attachment View and click on the "ZBarImg" tool. The output might look like this:

```
QR-Code:https://example.com/CTF{zB4r_d3c0d3d_qu3st}
Scanned 1 barcode symbols from 1 images in 0.01 seconds
```

This output shows that a QR code was found and successfully decoded, revealing a URL that contains a flag.

## More Information
For more information about the `zbarimg` tool, you can refer to its official documentation <a href="https://linux.die.net/man/1/zbarimg" target="_blank">here</a>.

Happy hacking!
