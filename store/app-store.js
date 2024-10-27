import { create } from 'zustand'
import { LABELS } from '../database/data'

export const useAppStore = create((set) => ({

    // labels: [],
    activeLabel: 0,
    selectLabel: (labelId) => set(() => ({ activeLabel: labelId })),

    importanceLevels: [
        {
            id: 0,
            name: 'Low',
            value: 0
        },
        {
            id: 1,
            name: 'Medium',
            value: 1
        },
        {
            id: 2,
            name: 'High',
            value: 2
        },
    ]

}))