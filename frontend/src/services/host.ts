export async function pickFolder(): Promise<string | null> {
    if(!window.chrome?.webview) {
        console.warn("Not running in a WebView environment. pickFolder will not work.");
        return null;
    }

    return new Promise((resolve) => {
        const handler = (event: MessageEvent) => {
            const data = event.data
            if(data.type === "pickFolderResult") {
                window.chrome?.webview?.removeEventListener("message", handler)
                resolve(data.path)
            }
        }

        window.chrome?.webview?.addEventListener("message", handler)
        window.chrome?.webview?.postMessage({ type: "pickFolder" })
    })
}

export async function createWorkspace(name: string, location: string): Promise<string | null> {
    return new Promise((resolve) => {
        const handler = (event: MessageEvent) => {
            const data = event.data
            if(data.type === "createWorkspaceResult") {
                window.chrome?.webview?.removeEventListener("message", handler)
                resolve(data.path)
            }
        }

        window.chrome?.webview?.addEventListener("message", handler)
        window.chrome?.webview?.postMessage({
            type: "createWorkspace",
            payload: { name, location }
        })
    })
}
