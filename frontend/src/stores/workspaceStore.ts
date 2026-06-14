import { create } from 'zustand'
import { persist } from 'zustand/middleware'

type WorkspaceStore = {
    name: string
    location: string
    projects: string[]
    setWorkspace: (name: string, location: string) => void
    setProjects: (projects: string[]) => void
}

export const useWorkspaceStore = create<WorkspaceStore>()(persist(set => ({
    name: '',
    location: '',
    projects: [],
    setWorkspace: (name, location) => set({ name, location }),
    setProjects: (projects) => set({ projects })
}), { name: 'workspace-store' }))
