namespace FlagForgeHost.Tools.Tool;

public class BinwalkTool : CommandTool
{
    public override string Name => "binwalk";

    public override string Description => "Scans for Embeded Data";

    public override async Task<List<ToolResult>> ExecuteAsync(string filePath, Dictionary<string, string>? options = null)
    {
        var wslPath = ToolExecutor.ToWslPath(filePath);
        var output = await ToolExecutor.ExecuteAsync("wsl", $"binwalk \"{wslPath}\"");

        return [new ToolResult {
            Type = "Binwalk",
            Content = output?.Trim() is { Length: > 0 } result ? result : "No Embedded data found."
        }];
    }
}