namespace FlagForgeHost.Tools.Tool;

public class StringsTool : CommandTool
{
    public override string Name => "strings";

    public override string Description => "Extracts Printable Strings";

    public override async Task<List<ToolResult>> ExecuteAsync(string filePath, Dictionary<string, string>? options = null)
    {
        var wslPath = ToolExecutor.ToWslPath(filePath);
        var output = await ToolExecutor.ExecuteAsync("wsl", $"strings \"{wslPath}\"");

        return [new ToolResult {
            Type = "Strings",
            Content = output?.Trim() is { Length: > 0 } result ? result : "No strings found."
        }];
    }
}
