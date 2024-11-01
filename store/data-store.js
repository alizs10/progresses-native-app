import { create } from 'zustand'
import { DATA } from '../database/data'

export const useDataStore = create((set) => ({

    // progresses: [],
    data: DATA,
    addData: (progress) => set((state) => ({ data: [...state.data, progress] })),


    stepForward: (progressId, stepId) => set((state) => {
        const progress = state.data.find(progress => progress.id === progressId)
        const step = progress.steps.find(step => step.id === stepId)
        step.isCompleted = true
        return { data: [...state.data] }
    }),
    stepBackward: (progressId, stepId) => set((state) => {
        const progress = state.data.find(progress => progress.id === progressId)
        const step = progress.steps.find(step => step.id === stepId)
        step.isCompleted = false
        return { data: [...state.data] }
    }),

    addRecordValue: (recordId) => set((state) => {
        const record = state.data.find(record => record.id === recordId)
        record.value = record.value + record.step;
        record.updatedAt = Date.now()
        return { data: [...state.data] }
    }),

    addManualRecordValue: (recordId) => set((state) => {
        const record = state.data.find(record => record.id === recordId)
        record.value = record.value + record.step;
        record.valueHistory = [...record.valueHistory, record.value];
        record.updatedAt = Date.now()
        return { data: [...state.data] }
    }),
}))