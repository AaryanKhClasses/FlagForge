namespace FlagForgeHost.Tools.Tool;

using System.IO;

public class QpdfTool : CommandTool
{
    private static readonly string[] SupportedExtensions = [".pdf"];

    public override string Name => "qpdf";
    public override string Description => "Decompresses PDF Files";

    public override string InstallHint => "sudo apt install qpdf";
    protected override string EmptyResultMessage => "No metadata found.";
    protected override string BuildArguments(string wslPath) => $"qpdf --show-npages \"{wslPath}\"";

    public override bool CanRun(string filePath) =>
        SupportedExtensions.Contains(Path.GetExtension(filePath).ToLowerInvariant());
}
