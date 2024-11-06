import { create } from 'zustand'
import { LABELS } from '../database/data'


export const useLabelStore = create((set) => ({

    // labels: [],
    labels: LABELS,
    addLabel: (label) => set((state) => ({ labels: [...state.labels, label] })),

    deleteOne: (labelId) => set((state) => ({ labels: state.labels.filter(label => label.id !== labelId) })),

    groupDelete: (labelList) => set((state) => ({ labels: state.labels.filter(label => !labelList.includes(label.id)) })),

}))