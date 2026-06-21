namespace FlagForgeHost.Tools.Tool;

public class HashidTool : CommandTool
{
    public override string Name => "hashid";

    public override string Description => "Identifies Hash Types used in a File";

    public override async Task<List<ToolResult>> ExecuteAsync(string filePath, Dictionary<string, string>? options = null)
    {
        var wslPath = ToolExecutor.ToWslPath(filePath);
        var output = await ToolExecutor.ExecuteAsync("wsl", $"hashid \"{wslPath}\"");

        return [new ToolResult {
            Type = "Hashid",
            Content = output?.Trim() is { Length: > 0 } result ? result : "No recognizable hashes found."
        }];
    }
}
