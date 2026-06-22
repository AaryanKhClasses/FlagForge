namespace FlagForgeHost.Tools.Tool;

using System.IO;

public class SonicVisualiserTool : CommandTool
{
    private static readonly string[] SupportedExtensions = [".wav", ".mp3", ".flac"];

    public override string Name => "sonicvisualiser";
    public override string Description => "Analyze audio files using Sonic Visualiser.";

    public override string InstallHint => "sudo apt install sonic-visualiser";
    protected override string EmptyResultMessage => "No metadata found.";
    protected override string BuildArguments(string wslPath) => $"sonic-visualiser \"{wslPath}\"";

    public override bool CanRun(string filePath) =>
        SupportedExtensions.Contains(Path.GetExtension(filePath).ToLowerInvariant());
}
