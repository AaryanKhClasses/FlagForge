---
title: xxd Tool
category: Tools
---

# xxd Tool
---

`xxd` is a command-line utility that creates a hexadecimal dump of a given file or standard input. It can also convert a hexadecimal dump back to its original binary form.

It is widely used in reverse engineering, binary analysis, and debugging to inspect the raw bytes of files, especially when dealing with non-printable characters or structured binary data.

---

## Information
`xxd` provides a byte-level view of file content, displaying both hexadecimal and ASCII representations. This allows users to examine specific bytes, identify patterns, and understand the underlying data structure of binary files. It supports various formatting options, including plain hex dumps, postscript-style continuous dumps, and C-style array output.

---

## Using as FlagForge Tool
<p class="text-primary">NOTE: Windows Subsystem for Linux (WSL) must be installed on your Windows machine in-order to use the 'xxd' tool. Also, the 'xxd' tool must be installed separately. The tool can be quickly installed by following instructions given within the app itself.</p>

The `xxd` tool is a general purpose FlagForge attachment tool, meaning that it can be run on any type of file. Simply select a file in the Attachment View and click on the "Attachment Info" button in the top right corner of the main area. Then, click on the "xxd" tool to execute it on the selected attachment.

---

## Example Usage
Suppose you have a file named `secret.bin` attached to a challenge. To view its hexadecimal dump using the `xxd` tool, you would select the file in the Attachment View and click on the "xxd" tool. The output might look like this:

```
00000000: 4865 6c6c 6f2c 2057 6f72 6c64 210a 4354  Hello, World!.CT
00000010: 467b 6833 785f 6434 6d70 5f69 735f 6330  F{h3x_d4mp_is_c0
00000020: 306c 7d0a                                0l}. 
```

This output displays the hexadecimal representation of the file content on the left and its corresponding ASCII representation on the right, revealing a hidden flag.

## More Information
For more information about the `xxd` tool, you can refer to its official documentation <a href="https://linux.die.net/man/1/xxd" target="_blank">here</a>.

Happy hacking!
