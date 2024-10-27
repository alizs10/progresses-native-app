import { create } from 'zustand'
import { LABELS } from '../database/data'

export const useLabelStore = create((set) => ({

    // labels: [],
    labels: LABELS,
    addLabel: (label) => set((state) => ({ labels: [...state.labels, label] })),

}))