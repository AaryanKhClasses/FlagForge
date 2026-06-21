namespace FlagForgeHost.Tools.Tool;

using System.IO;

public class SteghideTool : CommandTool
{
    private static readonly string[] SupportedExtensions = [".jpg", ".jpeg", ".bmp", ".wav", ".au"];

    public override string Name => "steghide";

    public override string Description => "Detects Hidden Files";

    public override bool CanRun(string filePath) =>
        SupportedExtensions.Contains(Path.GetExtension(filePath).ToLowerInvariant());
    
    public override async Task<List<ToolResult>> ExecuteAsync(string filePath, Dictionary<string, string>? options = null)
    {
        var wslPath = ToolExecutor.ToWslPath(filePath);
        var output = await ToolExecutor.ExecuteAsync("wsl", $"steghide info \"{wslPath}\"");

        return [new ToolResult {
            Type = "Steghide",
            Content = output?.Trim() is { Length: > 0 } result ? result : "No information found."
        }];
    }
}