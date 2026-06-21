namespace FlagForgeHost.Tools.Tool;

public class FileTool : CommandTool
{
    public override string Name => "file";

    public override string Description => "Detects File Type";

    public override async Task<List<ToolResult>> ExecuteAsync(string filePath, Dictionary<string, string>? options = null)
    {
        var wslPath = ToolExecutor.ToWslPath(filePath);
        var output = await ToolExecutor.ExecuteAsync("wsl", $"file \"{wslPath}\"");
        var result = output?[(output.IndexOf(':') + 1)..].Trim() ?? "";
    
        return [new ToolResult {
            Type = "File",
            Content = result
        }];
    }
}
