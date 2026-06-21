namespace FlagForgeHost.Tools.Tool;

public class ExiftoolTool : CommandTool
{
    public override string Name => "exiftool";

    public override string Description => "Extracts Metadata";

    public override async Task<List<ToolResult>> ExecuteAsync(string filePath, Dictionary<string, string>? options = null)
    {
        var wslPath = ToolExecutor.ToWslPath(filePath);
        var output = await ToolExecutor.ExecuteAsync("wsl", $"exiftool \"{wslPath}\"");

        return [new ToolResult {
            Type = "Exiftool",
            Content = output?.Trim() is { Length: > 0 } result ? result : "No metadata found."
        }];
    }
}
