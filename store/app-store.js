import { create } from 'zustand'
import { LABELS } from '../database/data'

export const useAppStore = create((set) => ({

    // labels: [],
    activeLabel: 0,
    selectLabel: (labelId) => set(() => ({ activeLabel: labelId })),

}))