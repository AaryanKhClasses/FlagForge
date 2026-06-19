import { useEffect, useState } from 'react'
import { sendCommand } from '../services/host'
import { useWorkspaceStore } from '../stores/workspaceStore'
import { Commands } from '../utils/commands'

type Props = {
    open: boolean
    attachment: string
}

type AttachmentData = {
    name: string
    content: string
    type: string
}

const IMAGE_TYPES = [
    '.png', '.jpg', '.jpeg', '.gif', '.bmp', '.webp'
] as const

const CODE_TYPES = [
    '.c', '.cpp', '.py', '.js', '.java', '.txt'
] as const

export default function AttachmentRenderer({ open, attachment }: Props) {
    const workspaceStore = useWorkspaceStore()
    const [file, setFile] = useState<AttachmentData | null>(null)

    useEffect(() => {
        if(!open) return
        const loadAttachment = async() => {
            const res = await sendCommand<AttachmentData>(Commands.GetAttachment, {  
                path: workspaceStore.path,
                challengeId: workspaceStore.activeChallenge?.id,
                name: attachment
            })
            setFile(res)
        }
        loadAttachment()
    }, [open, attachment, workspaceStore.path, workspaceStore.activeChallenge?.id])

    if(!open) return null
    if(!file) return <div className="flex flex-col items-center justify-center gap-2 p-6 flex-1">
        <p className="text-gray-500">Loading attachment...</p>
    </div>

    return <div className="flex flex-col items-center justify-center gap-2 p-6 flex-1">
        {IMAGE_TYPES.includes(file.type as any) && <ImageRenderer file={file} />}
        {file.type === '.pdf' && <PdfRenderer file={file} />}
        {CODE_TYPES.includes(file.type as any) && <CodeRenderer file={file} />}
    </div>
}

function ImageRenderer({ file }: { file: AttachmentData }) {
    return <img src={`data:image/${file.type.slice(1)};base64,${file.content}`} alt={file.name} className="max-w-full max-h-[80vh]" />
}

function PdfRenderer({ file }: { file: AttachmentData }) {
    return <iframe src={`data:application/pdf;base64,${file.content}`} title={file.name} className="w-full h-[80vh]" />
}

function CodeRenderer({ file }: { file: AttachmentData }) {
    return <pre className="w-full min-h-[80vh] text-wrap bg-bg-light p-4 rounded-lg">
        <code>
            {file.content}
        </code>
    </pre>
}
