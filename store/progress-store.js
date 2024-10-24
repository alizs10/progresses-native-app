import { create } from 'zustand'
import { DATA } from '../database/data'

export const useProgressStore = create((set) => ({

    // progresses: [],
    progresses: DATA,
    addProgress: (progress) => set((state) => ({ progresses: [...state.progresses, progress] })),

}))