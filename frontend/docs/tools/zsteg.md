---
title: Zsteg Tool
category: Tools
---

# Zsteg Tool
---

`zsteg` is a command-line tool for steganalysis, primarily focused on PNG and BMP images. It detects hidden data in PNG/BMP files by analyzing various bit planes and metadata.

It is widely used in Capture The Flag (CTF) competitions, digital forensics, and security research to uncover hidden messages or files embedded within images.

---

## Information
`zsteg` can analyze different steganography techniques, including LSB (Least Significant Bit) steganography, where data is hidden in the least significant bits of pixel data. It can also detect hidden data in metadata, corrupted chunks, and other less obvious locations within image files. The tool offers various options for specifying bit order, channel, and offset to aid in the discovery of hidden data.

---

## Using as FlagForge Tool
<p class="text-primary">NOTE: Windows Subsystem for Linux (WSL) must be installed on your Windows machine in-order to use the 'zsteg' tool. Also, the 'zsteg' tool must be installed separately. The tool can be quickly installed by following instructions given within the app itself.</p>

The `zsteg` tool is a FlagForge attachment tool for image files. Simply select an image file in the Attachment View and click on the "Attachment Info" button in the top right corner of the main area. Then, click on the "Zsteg" tool to execute it on the selected attachment.

---

## Example Usage
Suppose you have a PNG image named `hidden.png` attached to a challenge and you suspect it contains hidden data. To analyze it using the `zsteg` tool, you would select the file in the Attachment View and click on the "Zsteg" tool. The output might look like this:

```
[+] 00000000.bin: 8 bytes
    ("This is the flag: CTF{s73g4n0_f0r3n51c5}")
```

This output indicates that `zsteg` found 8 bytes of hidden data, which, when interpreted as text, reveals a flag.

## More Information
For more information about the `zsteg` tool, you can refer to its official GitHub repository <a href="https://github.com/zed-0xff/zsteg" target="_blank">here</a>.

Happy hacking!
