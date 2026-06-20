import { faUpload, faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
import { toast } from 'react-hot-toast/headless'
import { sendCommand } from '../services/host'
import { useWorkspaceStore } from '../stores/workspaceStore'
import { Commands } from '../utils/commands'

type Props = {
    open: boolean
    onClose: () => void
    onCreate: () => void
}

export default function AddAttachmentsModal({ open, onClose, onCreate }: Props) {
    const workspaceStore = useWorkspaceStore()
    const [newAttachmentName, setNewAttachmentName] = useState('')
    const [attachmentUrl, setAttachmentUrl] = useState('')

    const addAttachment = async(type: 'upload' | 'download' | 'create', options?: any) => {
        if(!workspaceStore.activeChallenge) return
        try {
            await sendCommand(Commands.AddAttachments, {
                type,
                path: workspaceStore.path,
                id: workspaceStore.activeChallenge.id,
                ...options
            })
            toast.success('Attachment added successfully!')
        } catch(err) {
            console.error(err)
            toast.error(err instanceof Error ? err.message : 'Failed to add attachment.')
        }
        await workspaceStore.loadChallenges()
        onClose()
        onCreate()
    }

    const handleUploadAttachments = async() => {
        addAttachment('upload')
    }

    const handleDownloadAttachment = async() => {
        if(!attachmentUrl) return
        setAttachmentUrl('')
        addAttachment('download', { url: attachmentUrl })
    }

    const handleCreateAttachment = async() => {
        if(!newAttachmentName) return
        setNewAttachmentName('')
        addAttachment('create', { name: newAttachmentName })
    }

    return <div className={`fixed inset-0 bg-black/50 backdrop-blur-xs flex items-center justify-center z-50 transition-opacity ${open ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <div className="bg-bg-light border border-border/60 rounded-2xl shadow-2xl overflow-hidden w-110 max-w-[90vw]">
            <div className="flex items-center justify-between px-6 py-5 border-b border-border/40">
                <h2 className="text-base font-semibold tracking-tight">Add Attachments</h2>
                <button onClick={onClose} className="w-7 h-7 rounded-md flex items-center justify-center text-muted hover:text-text hover:bg-border/40 transition cursor-pointer">
                    <FontAwesomeIcon icon={faXmark} className="text-sm" />
                </button>
            </div>

            <div className="flex flex-col gap-5 px-6 py-5">
                <div className="flex flex-col gap-2">
                    <label htmlFor="attachment-file-upload" className="text-xs font-semibold text-muted uppercase tracking-wide">Upload</label>
                    <button
                        id="attachment-file-upload"
                        onClick={handleUploadAttachments}
                        className="flex flex-col items-center gap-2.5 px-6 py-7 rounded-xl border border-dashed border-border/70 bg-text/2 hover:border-primary/40 hover:bg-primary/3 transition cursor-pointer"
                    >
                        <span className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                            <FontAwesomeIcon icon={faUpload} className="text-sm" />
                        </span>
                        <span className="text-sm font-medium">Drop files or click to browse</span>
                        <span className="text-[11px] text-muted">Any file type</span>
                    </button>
                </div>

                <div className="flex flex-col gap-2">
                    <label htmlFor="attachment-url-download" className="text-xs font-semibold text-muted uppercase tracking-wide">From URL</label>
                    <div className="flex flex-row gap-2">
                        <input
                            type="text"
                            id="attachment-url-download"
                            value={attachmentUrl}
                            onChange={(e) => setAttachmentUrl(e.target.value)}
                            placeholder="https://..."
                            className="flex-1 px-3 py-2.5 text-sm rounded-lg border border-border bg-bg placeholder:text-muted/60 focus:outline-none focus:ring-1 focus:ring-primary transition"
                        />
                        <button onClick={handleDownloadAttachment} className="px-4 py-2.5 text-sm font-semibold bg-primary/90 hover:bg-primary rounded-lg cursor-pointer transition whitespace-nowrap w-24">Download</button>
                    </div>
                </div>

                <div className="flex flex-col gap-2">
                    <label htmlFor="attachment-create-new" className="text-xs font-semibold text-muted uppercase tracking-wide">New File</label>
                    <div className="flex flex-row gap-2">
                        <input
                            type="text"
                            id="attachment-create-new"
                            value={newAttachmentName}
                            onChange={(e) => setNewAttachmentName(e.target.value)}
                            placeholder="filename.md"
                            className="flex-1 px-3 py-2.5 text-sm rounded-lg border border-border bg-bg placeholder:text-muted/60 focus:outline-none focus:ring-1 focus:ring-primary transition"
                        />
                        <button onClick={handleCreateAttachment} className="px-4 py-2.5 text-sm font-semibold bg-primary/90 hover:bg-primary rounded-lg cursor-pointer transition whitespace-nowrap w-24">Create</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
}
