---
title: Hashcat Hash ID Tool
category: Tools
---

# Hashcat Hash ID Tool
---

`hashid` is a tool that identifies the type of a given hash. It's often used in conjunction with hash cracking tools like Hashcat to determine the hash algorithm before attempting to crack it.

It supports a wide range of hash types, making it an essential utility for penetration testers, security researchers, and anyone working with hashed data.

---

## Information
`hashid` analyzes the format and characteristics of an input hash string to determine its likely algorithm (e.g., MD5, SHA1, bcrypt, NTLM). This helps in selecting the correct cracking technique or tool for further analysis.

---

## Using as FlagForge Tool
<p class="text-primary">NOTE: Windows Subsystem for Linux (WSL) must be installed on your Windows machine in-order to use the 'hashid' tool. Also, the 'hashid' tool must be installed separately. The tool can be quickly installed by following instructions given within the app itself.</p>

The `hashid` tool is a general purpose FlagForge attachment tool, meaning that it can be run on any type of file. Simply select a file in the Attachment View and click on the "Attachment Info" button in the top right corner of the main area. Then, click on the "Hashid" tool to execute it on the selected attachment.

---

## Example Usage
Suppose you have a file containing a hash, or directly input a hash string into a challenge. To identify its type using the `hashid` tool, you would select the file in the Attachment View or input the hash, and then click on the "Hashid" tool. The output might look like this:

```
Analyzing '5d41402abc4b2a76b9719d911017c592'

[+] MD5
[+] MD5 (HMAC) / Keyed MD5
[+] MD5 (phpbb3)
[+] MD5 (Wordpress)
```

This output suggests that the provided hash is likely an MD5 hash, along with some common variations.

## More Information
For more information about the `hashid` tool, you can refer to its official documentation <a href="https://hashcat.net/hashid/" target="_blank">here</a>.

Happy hacking!
