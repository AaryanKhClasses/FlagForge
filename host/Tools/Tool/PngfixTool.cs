namespace FlagForgeHost.Tools.Tool;

using System.IO;

public class PngfixTool : CommandTool
{
    public override string Name => "pngfix";

    public override string Description => "Repairs Corrupted PNG Files";

    public override bool CanRun(string filePath) => 
        Path.GetExtension(filePath).Equals(".png", StringComparison.OrdinalIgnoreCase);
    
    public override async Task<List<ToolResult>> ExecuteAsync(string filePath, Dictionary<string, string>? options = null)
    {
        var wslPath = ToolExecutor.ToWslPath(filePath);
        var attachmentDir = Path.GetDirectoryName(filePath);
        var output = await ToolExecutor.ExecuteAsync("wsl", $"pngfix \"{wslPath}\"", workingDirectory: attachmentDir);

        return [new ToolResult {
            Type = "Pngfix",
            Content = output?.Trim() is { Length: > 0 } result ? result : "No issues found",
            Metadata = new Dictionary<string, object> {
                ["repairedFile"] = $"fix-{Path.GetFileName(filePath)}"
            }
        }];
    }
}
