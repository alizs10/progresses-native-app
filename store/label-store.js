import { create } from 'zustand'
import { LABELS } from '../database/data'


export const useLabelStore = create((set) => ({

    // labels: [],
    prevLabelsStr: JSON.stringify([]),
    labels: LABELS,
    addLabel: (label) => set((state) => ({ prevLabelsStr: JSON.stringify(state.labels), labels: [...state.labels, label] })),

    updateLabel: (labelId, updatedLabel) => set((state) => ({ prevLabelsStr: JSON.stringify(state.labels), labels: state.labels.map(label => label.id === labelId ? updatedLabel : label) })),

    trashOne: (labelId) => set((state) => ({ prevLabelsStr: JSON.stringify(state.labels), labels: state.labels.filter(label => label.id !== labelId) })),

    groupTrash: (labelList) => set((state) => ({ prevLabelsStr: JSON.stringify(state.labels), labels: state.labels.filter(label => !labelList.includes(label.id)) })),

    restoreLabels: (labelList) => set((state) => ({ prevLabelsStr: JSON.stringify(state.labels), labels: state.labels.map(label => labelList.includes(label.id) ? { ...label, deletedAt: null } : label) })),


    undo: () => set((state) => {
        if (state.prevLabelsStr) {
            return { labels: JSON.parse(state.prevLabelsStr) }
        }

        return { labels: [...state.labels] }
    })

}))