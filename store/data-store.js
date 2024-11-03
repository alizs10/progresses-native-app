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

    subRecordValue: (recordId) => set((state) => {
        const record = state.data.find(record => record.id === recordId)
        record.value = record.value === 0 ? 0 : record.value - record.step;
        record.updatedAt = Date.now()
        return { data: [...state.data] }
    }),

    addManualRecordValue: (recordId) => set((state) => {
        const record = state.data.find(record => record.id === recordId)

        record.value = record.value + record.step;
        record.valueHistory = [...record.valueHistory, { date: Date.now(), step: record.step }];
        record.updatedAt = Date.now()
        return { data: [...state.data] }
    }),

    subManualRecordValue: (recordId) => set((state) => {
        const record = state.data.find(record => record.id === recordId)
        let subValue = record.valueHistory[record.valueHistory.length - 1].step
        record.valueHistory.pop();
        record.value = record.value - subValue;
        record.updatedAt = Date.now()
        return { data: [...state.data] }
    }),

    addManualRecordStep: (recordId) => set((state) => {
        const record = state.data.find(record => record.id === recordId)
        record.step++;

        return { data: [...state.data] }
    }),

    subManualRecordStep: (recordId) => set((state) => {
        const record = state.data.find(record => record.id === recordId)
        record.step = record.step > 1 ? record.step - 1 : 0;

        return { data: [...state.data] }
    })
}))