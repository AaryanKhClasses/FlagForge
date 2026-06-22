namespace FlagForgeHost.Tools.Tool;

using System.IO;

public class PdfInfoTool : CommandTool
{
    private static readonly string[] SupportedExtensions = [".pdf"];

    public override string Name => "pdfinfo";
    public override string Description => "Extracts Metadata From PDF Files";

    public override string InstallHint => "sudo apt install poppler-utils";
    protected override string EmptyResultMessage => "No metadata found.";
    protected override string BuildArguments(string wslPath) => $"pdfinfo \"{wslPath}\"";

    public override bool CanRun(string filePath) =>
        SupportedExtensions.Contains(Path.GetExtension(filePath).ToLowerInvariant());
}
