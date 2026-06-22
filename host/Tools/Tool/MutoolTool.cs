namespace FlagForgeHost.Tools.Tool;

using System.IO;

public class MutoolTool : CommandTool
{
    private static readonly string[] SupportedExtensions = [".pdf"];

    public override string Name => "mutool";
    public override string Description => "Analyze PDF internals using mutool.";

    public override string InstallHint => "sudo apt install mupdf-tools";
    protected override string EmptyResultMessage => "No metadata found.";
    protected override string BuildArguments(string wslPath) => $"mutool \"{wslPath}\"";

    public override bool CanRun(string filePath) =>
        SupportedExtensions.Contains(Path.GetExtension(filePath).ToLowerInvariant());
}
