namespace FlagForgeHost.Tools.Tool;

using System.IO;

public class PdftotextTool : CommandTool
{
    private static readonly string[] SupportedExtensions = [".pdf"];

    public override string Name => "pdftotext";
    public override string Description => "Extracts Text From PDF Files";

    public override string InstallHint => "sudo apt install poppler-utils";
    protected override string EmptyResultMessage => "No text found.";
    protected override string BuildArguments(string wslPath) => $"pdftotext -layout \"{wslPath}\" -";

    public override bool CanRun(string filePath) =>
        SupportedExtensions.Contains(Path.GetExtension(filePath).ToLowerInvariant());
}
