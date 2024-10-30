import { create } from 'zustand'
import { DATA } from '../database/data'

export const useDataStore = create((set) => ({

    // progresses: [],
    data: DATA,
    addData: (progress) => set((state) => ({ data: [...state.data, progress] })),

}))