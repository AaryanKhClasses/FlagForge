using System.Diagnostics;
using System.IO;

namespace FlagForgeHost.Tools;

public static class ToolExecutor
{
    public static string ToWslPath(string windowsPath)
    {
        var driveLetter = char.ToLower(windowsPath[0]);
        return $"/mnt/{driveLetter}{windowsPath.Substring(2).Replace("\\", "/")}";
    }

    public static async Task<string?> ExecuteAsync(string executable, string arguments = "", Dictionary<string, string>? envVars = null, string? workingDirectory = null)
    {
        try
        {
            var startInfo = new ProcessStartInfo(executable, arguments)
            {
                UseShellExecute = false,
                RedirectStandardError = true,
                RedirectStandardOutput = true,
                CreateNoWindow = true
            };

            if (!string.IsNullOrEmpty(workingDirectory))
                startInfo.WorkingDirectory = workingDirectory;

            if (envVars != null)
                foreach (var env in envVars) startInfo.Environment[env.Key] = env.Value;

            using var process = new Process { StartInfo = startInfo };
            process.Start();

            string stdOut = await process.StandardOutput.ReadToEndAsync();
            string stdErr = await process.StandardError.ReadToEndAsync();

            await process.WaitForExitAsync();
            return string.IsNullOrWhiteSpace(stdErr) ? stdOut : $"{stdOut}\n[ERROR]: {stdErr}";
        } catch { return null; }
    }
}
