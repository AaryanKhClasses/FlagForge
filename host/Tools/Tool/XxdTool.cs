namespace FlagForgeHost.Tools.Tool;

public class XxdTool : CommandTool
{
    public override string Name => "xxd";

    public override string Description => "Displays Hex Dump";

    public override async Task<List<ToolResult>> ExecuteAsync(string filePath, Dictionary<string, string>? options = null)
    {
        var wslPath = ToolExecutor.ToWslPath(filePath);
        var output = await ToolExecutor.ExecuteAsync("wsl", $"xxd -l 16384 \"{wslPath}\"");

        return [new ToolResult {
            Type = "Xxd",
            Content = output?.Trim() is { Length: > 0 } result ? result : "Unable to read file."
        }];
    }
}
