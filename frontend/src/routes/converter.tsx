import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useMemo, useState } from 'react'

type ToolDefinition = {
    id: string
    name: string
    description: string
    defaultOptions?: Record<string, any>
    options?: ToolOption[]
    execute: (input: string, options: Record<string, any>) => string
}

type ToolOption = {
    key: string
    label: string
    type: 'text' | 'number' | 'checkbox'
}

// type StepOptions = Record<string, string | number | boolean>

type Step = {
    id: string
    toolId: string
    options: Record<string, any>
}

const TOOLS: ToolDefinition[] = [
    {
        id: 'base64-encode',
        name: 'Base 64 Encode',
        description: 'Encode data to Base64 format',
        execute: input => btoa(String.fromCharCode(...new TextEncoder().encode(input)))
    },
    {
        id: 'base64-decode',
        name: 'Base 64 Decode',
        description: 'Decode data from Base64 format',
        execute: input => {
            const bytes = Uint8Array.from(atob(input), c => c.charCodeAt(0))
            return new TextDecoder().decode(bytes)
        }
    }
] as const

export default function Converter() {
    const [steps, setSteps] = useState<Step[]>([])
    const [input, setInput] = useState('')
    const [search, setSearch] = useState('')

    const addStep = (tool: ToolDefinition) => {
        setSteps(prev => [
            ...prev, {
                id: crypto.randomUUID(),
                toolId: tool.id,
                options: tool.defaultOptions || {}
            }
        ])
    }

    const updateStep = (stepId: string, optionKey: string, value: any) => {
        setSteps(prev => prev.map(step => step.id === stepId ? { ...step, options: { ...step.options, [optionKey]: value } } : step))
    }

    const output = useMemo(() => {
        let result = input
        for(const step of steps) {
            const tool = TOOLS.find(t => t.id === step.toolId)
            if(!tool) continue
            try { result = tool.execute(result, step.options) }
            catch(e) { result = `Error: ${(e as Error).message}` }
        }
        return result
    }, [input, steps])

    const toolMap = useMemo(() => Object.fromEntries(TOOLS.map(t => [t.id, t])), [])
    const filteredTools = useMemo(() => TOOLS.filter(t => t.name.toLowerCase().includes(search.toLowerCase()) || t.description.toLowerCase().includes(search.toLowerCase())), [search])

    return <div className="min-h-[calc(100vh-3rem)] flex">
        <aside className="flex flex-col gap-2 w-[20vw] bg-bg-light border-r border-border p-6">
            <h1 className="font-semibold uppercase">Converter</h1>
            <hr className="my-2 border-border" />
            <input type="text" placeholder="Search..." className="w-full p-2 rounded-xl bg-bg-light border border-border focus:outline-none focus:ring-1 focus:ring-primary transition" value={search} onChange={e => setSearch(e.target.value)} />
            <hr className="my-2 border-border" />
            {filteredTools.map(tool => <button
                draggable
                onDragStart={e => e.dataTransfer.setData('tool-id', tool.id)}
                onClick={() => addStep(tool)}
                key={tool.id}
                className="text-left p-2 rounded-xl bg-bg-light border border-border hover:bg-border/30 cursor-grab transition"
            >
                <span className="font-medium">{tool.name}</span>
                <p className="text-xs text-muted">{tool.description}</p>
            </button>)}
        </aside>
        <main
            onDragOver={e => e.preventDefault()}
            onDrop={e => {
                const toolId = e.dataTransfer.getData('tool-id')
                const tool = TOOLS.find(t => t.id === toolId)
                if(tool) addStep(tool)
            }}
            className="flex-1 p-6"
        >
            <h1 className="font-semibold uppercase">Steps</h1>
            <hr className="my-2 border-border" />
            <div className="min-h-[80vh] border border-border rounded-xl p-4">
                {steps.length === 0 ? <p className="text-muted">No steps added. Click a tool to add it to the converter.</p> : steps.map((step, index) => {
                    const tool = toolMap[step.toolId]
                    return <div key={step.id} className="flex flex-row items-center justify-between p-2 border border-border rounded-xl mb-2">
                        <div className="flex flex-col gap-2">
                            <span>{tool ? tool.name : 'Unknown Tool'}</span>
                            {tool?.options?.map(option => {
                                switch(option.type) {
                                    case 'number':
                                        return <div key={option.key} className="flex items-center gap-2">
                                            <label htmlFor={`${step.id}-${option.key}`}>{option.label}</label>
                                            <input type="number" id={`${step.id}-${option.key}`} key={option.key} value={step.options[option.key] || ''} onChange={e => {
                                                const value = e.target.valueAsNumber
                                                updateStep(step.id, option.key, value)
                                            }} className="w-20 p-1 rounded-xl bg-bg-light border border-border focus:outline-none focus:ring-1 focus:ring-primary transition" />
                                        </div>
                                    case 'text':
                                        return <div key={option.key} className="flex items-center gap-2">
                                            <label htmlFor={`${step.id}-${option.key}`}>{option.label}</label>
                                            <input type="text" id={`${step.id}-${option.key}`} key={option.key} value={step.options[option.key] || ''} onChange={e => {
                                                const value = e.target.value
                                                updateStep(step.id, option.key, value)
                                            }} className="w-20 p-1 rounded-xl bg-bg-light border border-border focus:outline-none focus:ring-1 focus:ring-primary transition" />
                                        </div>
                                    case 'checkbox':
                                        return <div key={option.key} className="flex items-center gap-2">
                                            <label htmlFor={`${step.id}-${option.key}`}>{option.label}</label>
                                            <input type="checkbox" id={`${step.id}-${option.key}`} key={option.key} checked={step.options[option.key] || false} onChange={e => {
                                                const value = e.target.checked
                                                updateStep(step.id, option.key, value)
                                            }} className="w-4 h-4 rounded bg-bg-light border border-border focus:outline-none focus:ring-1 focus:ring-primary transition" />
                                        </div>
                                    default: return null
                                }
                            })}
                        </div>
                        <button onClick={() => setSteps(prev => prev.filter((_, i) => i !== index))} className="text-sm text-primary hover:text-primary/90 transition cursor-pointer"><FontAwesomeIcon icon={faTrash} /></button>
                    </div>
                })}
            </div>
        </main>
        <aside className="flex flex-col gap-2 w-[20vw] bg-bg-light border-l border-border p-6">
            <h1 className="font-semibold uppercase">Input</h1>
            <hr className="my-2 border-border" />
            <textarea value={input} onChange={(e) => setInput(e.target.value)} className="w-full h-1/2 p-2 rounded-xl bg-bg-light border border-border focus:outline-none focus:ring-1 focus:ring-primary transition" placeholder="Enter input data..." />
            <h1 className="font-semibold uppercase mt-4">Output</h1>
            <hr className="my-2 border-border" />
            <textarea value={output} readOnly className="w-full h-1/2 p-2 rounded-xl bg-bg-light border border-border focus:outline-none focus:ring-1 focus:ring-primary transition" placeholder="Output will be displayed here..." />
        </aside>
    </div>
}
