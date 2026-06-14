import { useEffect, useState } from 'react'
import CreateWorkspaceModal from '../components/CreateWorkspaceModal'
import { openWorkspace, restoreWindow } from '../services/host'
import { useWorkspaceStore } from '../stores/workspaceStore'
import { useNavigate } from 'react-router-dom'

export default function Launcher() {
    const workspaceStore = useWorkspaceStore()
    const navigate = useNavigate()
    const [createWorkspaceModal, setCreateWorkspaceModal] = useState(false)

    useEffect(() => {
        const restore = async() => { await restoreWindow() }
        restore()
    }, [])

    const handleOpen = async() => {
        const workspace = await openWorkspace()
        workspaceStore.setWorkspace(workspace.name, `${workspace.location}\\${workspace.name}`)
        navigate('/workspace')
    }

    return <div className="h-screen flex bg-gray-900 text-white">
        <aside className="flex flex-col w-64 bg-gray-800 border-r border-gray-700 p-6">
            <h1 className="text-xl">Recent Workspaces</h1>
            <span className="text-sm text-gray-400">Your recently opened workspaces</span>
            <span className="text-sm text-gray-400 mt-10">No recent workspaces</span>
        </aside>
        <main className="flex-1 flex flex-col items-center justify-center p-6">
            <img src="/favicon.ico" alt="FlagForge Logo" className="w-24 h-24 mb-4" />
            <h1 className="text-3xl tracking-wider font-bold">FlagForge</h1>
            <p className="text-gray-400 mt-2">CTF Writeup and Solving Made Easy.</p>
            <div className="p-4 rounded-xl bg-gray-800 mt-6 w-[80%]">
                <div className="flex flex-row justify-between items-center">
                    <div className="flex flex-col">
                        <p className="font-semibold">Create New Workspace</p>
                        <span className="text-sm text-gray-400">Create a new FlagForge workspace</span>
                    </div>
                    <button onClick={() => setCreateWorkspaceModal(true)} className="px-4 py-2 bg-gray-600 hover:bg-gray-700 rounded-xl cursor-pointer transition text-white w-24">Create</button>
                </div>
                <hr className="my-4 border-gray-700" />
                <div className="flex flex-row justify-between items-center">
                    <div className="flex flex-col">
                        <p className="font-semibold">Open Existing Workspace</p>
                        <span className="text-sm text-gray-400">Open an existing FlagForge workspace</span>
                    </div>
                    <button onClick={handleOpen} className="px-4 py-2 bg-gray-600 hover:bg-gray-700 rounded-xl cursor-pointer transition text-white w-24">Open</button>
                </div>
            </div>
        </main>
        <CreateWorkspaceModal open={createWorkspaceModal} onClose={() => setCreateWorkspaceModal(false)} />
    </div>
}
