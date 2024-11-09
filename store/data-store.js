import { create } from 'zustand'
import { DATA } from '../database/data'

export const useDataStore = create((set) => ({

    // progresses: [],
    prevDataString: JSON.stringify([]),
    data: DATA,
    addData: (progress) => set((state) => ({ prevDataString: JSON.stringify(state.data), data: [...state.data, progress] })),

    updateData: (dataId, updatedData) => set((state) => ({ prevDataString: JSON.stringify(state.data), data: state.data.map(d => d.id === dataId ? updatedData : d) })),

    searchResults: [],
    searchData: (searchStr) => set((state) => {

        const results = state.data.filter(d => d.name.toLowerCase().includes(searchStr.toLowerCase()))

        return { searchResults: results }
    }),


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
    }),

    groupPin: (dataList) => set((state) => {

        let dataIns = [...state.data]
        const newHistory = JSON.stringify(state.data)

        for (let key in dataList) {
            let id = dataList[key]
            let dataIndex = dataIns.findIndex(d => d.id === id)
            let pinData = dataIns[dataIndex]
            pinData.isPinned = true
        }

        return { data: dataIns, prevDataString: newHistory }
    }),
    groupUnpin: (dataList) => set((state) => {

        const newHistory = JSON.stringify(state.data)

        for (let key in dataList) {

            let id = dataList[key]
            let dataIndex = state.data.findIndex(d => d.id === id)
            let pinData = state.data[dataIndex]
            pinData.isPinned = false
        }

        return { data: [...state.data], prevDataString: newHistory }
    }),

    trashOne: (dataId) => set((state) => {
        const newHistory = JSON.stringify(state.data)

        let dataIndex = state.data.findIndex(d => d.id === dataId)
        let deletableData = state.data[dataIndex]
        deletableData.deletedAt = Date.now()

        return { data: [...state.data], prevDataString: newHistory }
    }),

    groupTrash: (dataList) => set((state) => {
        const newHistory = JSON.stringify(state.data)

        for (let key in dataList) {
            let id = dataList[key]
            let dataIndex = state.data.findIndex(d => d.id === id)
            let trashData = state.data[dataIndex]
            trashData.deletedAt = Date.now()
        }

        return { data: [...state.data], prevDataString: newHistory }
    }),

    groupDeleteDataLabel: (labelList) => set((state) => {
        const newHistory = JSON.stringify(state.data)

        let dataList = state.data.filter(d => labelList.includes(d.label))

        for (let key in dataList) {
            let id = dataList[key].id
            let dataIndex = state.data.findIndex(d => d.id === id)
            let selectedData = state.data[dataIndex]
            selectedData.label = 0;
        }

        return { data: [...state.data], prevDataString: newHistory }
    }),

    groupDelete: (dataList) => set((state) => ({ prevDataString: JSON.stringify(state.data), data: state.data.filter(d => !dataList.includes(d.id)) })),

    restoreData: (dataList) => set((state) => {
        const newHistory = JSON.stringify(state.data)

        for (let key in dataList) {
            let id = dataList[key]
            let dataIndex = state.data.findIndex(d => d.id === id)
            let restoredData = state.data[dataIndex]
            restoredData.deletedAt = null
        }

        return { data: [...state.data], prevDataString: newHistory }
    }),

    undo: () => set((state) => {
        if (state.prevDataString) {
            return { data: JSON.parse(state.prevDataString) }
        }

        return { data: [...state.data] }
    })

}))