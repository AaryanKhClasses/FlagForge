namespace FlagForgeHost.Tools.Tool;

using System.IO;

public class CsoundTool : CommandTool
{
    private static readonly string[] SupportedExtensions = [".wav", ".mp3", ".flac"];

    public override string Name => "csound";
    public override string Description => "Analyze audio files using CSound.";

    public override string InstallHint => "sudo apt install csound";
    protected override string EmptyResultMessage => "No metadata found.";
    protected override string BuildArguments(string wslPath) => $"csound \"{wslPath}\"";

    public override bool CanRun(string filePath) =>
        SupportedExtensions.Contains(Path.GetExtension(filePath).ToLowerInvariant());
}
