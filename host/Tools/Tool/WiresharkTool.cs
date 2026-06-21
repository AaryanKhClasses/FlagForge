namespace FlagForgeHost.Tools.Tool;

using System.IO;

public class WiresharkTool : CommandTool
{
    private static readonly string[] SupportedExtensions = [".pcap", ".pcapng", ".cap"];

    public override string Name => "wireshark";

    public override string Description => "Explores Packet Capture Files";

    public override bool CanRun(string filePath) =>
        SupportedExtensions.Contains(Path.GetExtension(filePath).ToLowerInvariant());

    public override async Task<List<ToolResult>> ExecuteAsync(string filePath, Dictionary<string, string>? options = null)
    {
        var wslPath = ToolExecutor.ToWslPath(filePath);
        var output = await ToolExecutor.ExecuteAsync("wsl", $"wireshark  \"{wslPath}\"");

        return [new ToolResult {
            Type = "Wireshark",
            Content = output?.Trim() is { Length: > 0 } result ? result : "No packets found."
        }];
    }
}
