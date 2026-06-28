---
title: PDFinfo Tool
category: Tools
---

# PDFinfo Tool
---

`pdfinfo` is a command-line utility that extracts information from PDF files, such as the number of pages, author, title, creation date, and other metadata.

It is part of the Xpdf and Poppler PDF utilities and is commonly used in digital forensics, document management, and scripting to quickly gather details about PDF documents.

---

## Information
`pdfinfo` provides a concise summary of a PDF file's properties without needing to open the document. It can display information about the PDF's version, encryption status, page size, font usage, and more, which can be useful for initial analysis or automated processing.

---

## Using as FlagForge Tool
<p class="text-primary">NOTE: Windows Subsystem for Linux (WSL) must be installed on your Windows machine in-order to use the 'pdfinfo' tool. Also, the 'pdfinfo' tool must be installed separately. The tool can be quickly installed by following instructions given within the app itself.</p>

The `pdfinfo` tool is a FlagForge attachment tool for PDF files. Simply select a file in the Attachment View and click on the "Attachment Info" button in the top right corner of the main area. Then, click on the "PDFinfo" tool to execute it on the selected attachment.

---

## Example Usage
Suppose you have a PDF file named `document.pdf` attached to a challenge. To get its information using the `pdfinfo` tool, you would select the file in the Attachment View and click on the "PDFinfo" tool. The output might look like this:

```
Title:          Sample Document
Author:         John Doe
Creator:        LaTeX with hyperref package
Producer:       xdvipdfmx (dvips + ps2pdf)
CreationDate:   Thu Jun 28 10:00:00 2026 UTC
ModDate:        Thu Jun 28 10:00:00 2026 UTC
Tagged:         no
Form:           none
Pages:          5
Encrypted:      no
Page size:      595 x 842 pts (A4)
File size:      12345 bytes
Optimized:      no
PDF version:    1.4
```

This output provides a summary of the PDF document's properties, which can be helpful for further investigation.

## More Information
For more information about the `pdfinfo` tool, you can refer to its official documentation <a href="https://linux.die.net/man/1/pdfinfo" target="_blank">here</a>.

Happy hacking!
