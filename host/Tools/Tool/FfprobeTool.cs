namespace FlagForgeHost.Tools.Tool;

using System.IO;

public class FfprobeTool : CommandTool
{
    private static readonly string[] SupportedExtensions = [".wav", ".mp3", ".flac"];

    public override string Name => "ffprobe";
    public override string Description => "Analyze media files using FFprobe.";

    public override string InstallHint => "sudo apt install ffprobe";
    protected override string EmptyResultMessage => "No metadata found.";
    protected override string BuildArguments(string wslPath) => $"ffprobe \"{wslPath}\"";

    public override bool CanRun(string filePath) =>
        SupportedExtensions.Contains(Path.GetExtension(filePath).ToLowerInvariant());
}
