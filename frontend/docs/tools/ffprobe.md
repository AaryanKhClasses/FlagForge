---
title: FFprobe Tool
category: Tools
---

# FFprobe Tool
---

`ffprobe` is a multimedia stream analyzer that gathers information from multimedia streams and presents it in a human-readable and machine-readable format.

It is part of the FFmpeg project and is widely used for inspecting media files, troubleshooting playback issues, and verifying encoding parameters.

---

## Information
`ffprobe` can analyze various aspects of media files, including container format, stream types, codecs, duration, bitrate, and metadata. It provides detailed information about audio, video, and subtitle streams within a multimedia file.

---

## Using as FlagForge Tool
<p class="text-primary">NOTE: Windows Subsystem for Linux (WSL) must be installed on your Windows machine in-order to use the 'ffprobe' tool. Also, the 'ffprobe' tool must be installed separately. The tool can be quickly installed by following instructions given within the app itself.</p>

The `ffprobe` tool is a FlagForge attachment tool for multimedia files. Simply select a file in the Attachment View and click on the "Attachment Info" button in the top right corner of the main area. Then, click on the "FFprobe" tool to execute it on the selected attachment.

---

## Example Usage
Suppose you have a video file named `video.mp4` attached to a challenge. To analyze it using the `ffprobe` tool, you would select the file in the Attachment View and click on the "FFprobe" tool. The output might look like this:

```
Input #0, mov,mp4,m4a,3gp,3g2,mj2, from 'video.mp4':
  Metadata:
    major_brand     : isom
    minor_version   : 512
    compatible_brands: isomiso2avc1mp41
    encoder         : Lavf58.29.100
  Duration: 00:00:10.00, start: 0.000000, bitrate: 785 kb/s
    Stream #0:0(eng): Video: h264 (High) (avc1 / 0x31637661), yuv420p(tv, bt709), 1280x720 [SAR 1:1 DAR 16:9], 712 kb/s, 25 fps, 25 tbr, 12800 tbn, 50 tbc (default)
    Metadata:
      handler_name    : VideoHandler
    Stream #0:1(eng): Audio: aac (LC) (mp4a / 0x6134706D), 48000 Hz, stereo, fltp, 63 kb/s (default)
    Metadata:
      handler_name    : SoundHandler
```

This output provides detailed information about the video and audio streams, including codecs, resolution, and bitrate.

## More Information
For more information about the `ffprobe` tool, you can refer to its official documentation <a href="https://ffmpeg.org/ffprobe.html" target="_blank">here</a>.

Happy hacking!
