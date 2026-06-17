export async function sendCommand<T>(command: string, payload?: any): Promise<T> {
    return new Promise((resolve, reject) => {
        const handler = (event: MessageEvent) => {
            const data = event.data
            if(data.type === `${command}Result`) {
                window.chrome?.webview?.removeEventListener("message", handler)
                resolve(data.data)
            }
            if(data.type === `${command}Failed`) {
                window.chrome?.webview?.removeEventListener("message", handler)
                reject(new Error(data.error))
            }
        }

        window.chrome?.webview?.addEventListener("message", handler)
        window.chrome?.webview?.postMessage({ type: command, payload })
    })
}

export async function minimizeWindow(): Promise<void> {
    window.chrome?.webview?.postMessage({ type: "minimizeWindow" })
}

export async function closeWindow(): Promise<void> {
    window.chrome?.webview?.postMessage({ type: "closeWindow" })
}
