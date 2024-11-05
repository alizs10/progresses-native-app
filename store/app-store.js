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
    selectedData: [],

    closeSelectMode: () => set(() => ({ selectMode: false, selectedData: [] })),

    selectData: (data) => set((state) => ({ selectMode: true, selectedData: [...state.selectedData, data.id] })),

    unselectData: (data) => set((state) => {

        let filteredSelectedData = state.selectedData.filter(dataId => dataId !== data.id)
        let selectMode = filteredSelectedData.length > 0;

        return { selectedData: filteredSelectedData, selectMode }
    }),

}))