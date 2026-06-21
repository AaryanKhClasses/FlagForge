namespace FlagForgeHost.Tools.Tool;

using System.IO;

public class ZbarimgTool : CommandTool
{
    private static readonly string[] SupportedExtensions = [".png", ".jpg", ".jpeg", ".gif", ".bmp", ".tiff", ".pnm"];

    public override string Name => "zbarimg";

    public override string Description => "Scans For Barcodes / QR Codes";

    public override bool CanRun(string filePath) =>
        SupportedExtensions.Contains(Path.GetExtension(filePath).ToLowerInvariant());

    public override async Task<List<ToolResult>> ExecuteAsync(string filePath, Dictionary<string, string>? options = null)
    {
        var wslPath = ToolExecutor.ToWslPath(filePath);
        var output = await ToolExecutor.ExecuteAsync("wsl", $"zbarimg \"{wslPath}\"");

        return [new ToolResult {
            Type = "Zbarimg",
            Content = output?.Trim() is { Length: > 0 } result ? result : "No barcodes or QR codes found."
        }];
    }
}
