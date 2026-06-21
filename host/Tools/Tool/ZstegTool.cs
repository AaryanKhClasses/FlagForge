namespace FlagForgeHost.Tools.Tool;

using System.IO;
public class ZstegTool : CommandTool
{
    private static readonly string[] SupportedExtensions = [".png", ".bmp"];

    public override string Name => "zsteg";

    public override string Description => "Detects Steganography In PNG/BMP Images";

    public override bool CanRun(string filePath) =>
        SupportedExtensions.Contains(Path.GetExtension(filePath).ToLowerInvariant());

    public override async Task<List<ToolResult>> ExecuteAsync(string filePath, Dictionary<string, string>? options = null)
    {
        var wslPath = ToolExecutor.ToWslPath(filePath);
        var output = await ToolExecutor.ExecuteAsync("wsl", $"zsteg -a \"{wslPath}\"");

        return [new ToolResult {
            Type = "Zsteg",
            Content = output?.Trim() is { Length: > 0 } result ? result : "No hidden data found."
        }];
    }
}
