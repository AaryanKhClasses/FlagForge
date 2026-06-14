using Microsoft.Web.WebView2.Core;
using Microsoft.Win32;
using System.IO;
using System.Text.Json;
using System.Windows;

namespace FlagForgeHost;

/// <summary>
/// Interaction logic for MainWindow.xaml
/// </summary>
public partial class MainWindow : Window
{
    public MainWindow()
    {
        InitializeComponent();
        Loaded += MainWindow_Loaded;
    }

    private async void MainWindow_Loaded(object sender, RoutedEventArgs e)
    {
        await WebView.EnsureCoreWebView2Async();
        WebView.CoreWebView2.WebMessageReceived += WebMessageReceived;
        WebView.Source = new Uri("http://localhost:5173");
    }

    private async void WebMessageReceived(object? sender, CoreWebView2WebMessageReceivedEventArgs e)
    {
        var json = e.WebMessageAsJson;
        using var document = JsonDocument.Parse(json);
        var root = document.RootElement;
        var type = root.GetProperty("type").GetString();

        switch(type)
        {
            case "pickFolder": PickFolder(); break;
            case "createWorkspace": CreateWorkspace(root); break;
        }
    }

    private void SendMessage(object payload)
    {
        var json = JsonSerializer.Serialize(payload);
        WebView.CoreWebView2.PostWebMessageAsJson(json);
    }

    private void PickFolder()
    {
        OpenFolderDialog dialog = new()
        {
            Title = "Select Workspace Folder"
        };
        if (dialog.ShowDialog() != true) return;

        SendMessage(new
        {
            type = "pickFolderResult",
            path = dialog.FolderName
        });
    }

    private void CreateWorkspace(JsonElement root)
    {
        var payload = root.GetProperty("payload");
        var name = payload.GetProperty("name").GetString()!;
        var location = payload.GetProperty("location").GetString()!;

        var workspacePath = Path.Combine(location, name);
        if (Directory.Exists(workspacePath))
        {
            SendMessage(new
            {
                type = "createWorkspaceFailed",
                error = "Workspace already exists."
            });
            return;
        }
        Directory.CreateDirectory(workspacePath);
        Directory.CreateDirectory(Path.Combine(workspacePath, "projects"));

        var workspaceJson = JsonSerializer.Serialize(new
        {
            name,
            version = 1,
            createdAt = DateTime.UtcNow
        }, new JsonSerializerOptions { WriteIndented = true, IndentSize = 4 });
        File.WriteAllText(Path.Combine(workspacePath, "workspace.json"), workspaceJson);

        SendMessage(new
        {
            type = "createWorkspaceResult",
            path = workspacePath
        });
    }
}
