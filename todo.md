## IDENTIFIED ISSUES TO FIX:
- Fix Toast Error in AddAttachmentsModal
- Not allow invalid file characters during creation of attachments
- Add more nonBase64Types in MainWindow.xaml.cs and also in AttachmentRenderer.tsx
- Correct type ToolResult in types.ts and ToolAccordion.tsx
- Going from an attachment of a challenge to writeup of a different challenge triggers the toast for "Attachment Not Found".
- When one tool is running and another tool is also ran while the first is still running, the output that is received earliest is pasted to both the tools result

## ATTACHMENT TOOLS:
To add: pdfimages
To fix: qpdf, mutool

## CONVERTER TOOLS:
- Encrypt/Decrypt with Morse, Bacon, Substitute, Bifid, CipherSaber2, RC2, SM4, Citrix CTX1
- Bcrypt, Scrypt, JWT Sign/Decode/Verify
- Psuedo-Random Number Generator

- Parse X.509, Parse ASN.1, Parse SSH
- Convert HEX <-> PEM <-> Object Identifier
- Encrypt/Decrypt/Verify/Sign PGP, RSA

- Set Operations, Arithmetic Operations, Logic Operations, Statistics Operations (Mean, Median, Mode, Variance, Standard Deviation, etc.), Shift Operations

- Hashing: MD2, MD4, MD5, MD6, SHA0, SHA1, SHA2, SHA3, SM3, Shake, etc

## DOCUMENTATION:
- Lots of MD Files To Add
