namespace FlagForgeHost.Tools.Tool;

public class EntropyTool : CommandTool
{
    public override string Name => "entropy";

    public override string Description => "Checks file Entropy for Hidden Data";

    public override async Task<List<ToolResult>> ExecuteAsync(string filePath, Dictionary<string, string>? options = null)
    {
        var wslPath = ToolExecutor.ToWslPath(filePath);
        var output = await ToolExecutor.ExecuteAsync("wsl", $"binwalk -E \"{wslPath}\"");

        return [new ToolResult {
            Type = "Entropy",
            Content = output?.Trim() is { Length: > 0 } result ? result : "Unable to caclulate entropy."
        }];
    }
}
