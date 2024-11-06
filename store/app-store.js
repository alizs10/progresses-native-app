import { create } from 'zustand'
import { LABELS } from '../database/data'

export const useAppStore = create((set) => ({

    // labels: [],
    activeLabel: 0, // 0 means all
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
    ],

    selectMode: false,
    selectModeDataType: 0, // 0 means progresses or records, 1 mean labels
    setSelectModeDataType: (dataType) => set(() => ({ selectModeDataType: dataType })),
    selectedData: [],

    closeSelectMode: () => set(() => ({ selectMode: false, selectedData: [] })),

    selectData: (data) => set((state) => ({ selectMode: true, selectedData: [...state.selectedData, data.id] })),

    unselectData: (data) => set((state) => {

        let filteredSelectedData = state.selectedData.filter(dataId => dataId !== data.id)
        let selectMode = filteredSelectedData.length > 0;

        return { selectedData: filteredSelectedData, selectMode }
    }),

    searchMode: false,
    searchStr: '',
    setSearchStr: (str) => set(() => ({ searchStr: str })),
    setSearchMode: (mode) => set(() => ({ searchMode: mode })),

}))