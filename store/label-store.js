import { create } from 'zustand'
import { LABELS } from '../database/data'


export const useLabelStore = create((set) => ({

    // labels: [],
    labels: LABELS,
    addLabel: (label) => set((state) => ({ labels: [...state.labels, label] })),

    updateLabel: (labelId, updatedLabel) => set((state) => ({ labels: state.labels.map(label => label.id === labelId ? updatedLabel : label) })),

    trashOne: (labelId) => set((state) => ({ labels: state.labels.filter(label => label.id !== labelId) })),

    groupTrash: (labelList) => set((state) => ({ labels: state.labels.filter(label => !labelList.includes(label.id)) })),

}))